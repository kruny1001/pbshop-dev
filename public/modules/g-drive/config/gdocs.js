'use strict';
function GDocs(selector) {
    var SCOPE_ = 'https://www.googleapis.com/drive/v2/';
    this.lastResponse = null;
    this.__defineGetter__('SCOPE', function() {
        return SCOPE_;
    });
    this.__defineGetter__('DOCLIST_FEED', function() {
        return SCOPE_ + 'files/';
    });
    this.__defineGetter__('CREATE_SESSION_URI', function() {
        return 'https://www.googleapis.com/upload/drive/v2/files?uploadType=resumable';
    });
    this.__defineGetter__('DEFAULT_CHUNK_SIZE', function() {
        return 1024 * 1024 * 5; // 5MB;
    });
};
GDocs.prototype.auth = function(interactive, opt_callback) {
    try {
        chrome.identity.getAuthToken({interactive: interactive}, function(token) {
            if (token) {
                this.accessToken = token;
                opt_callback && opt_callback();
            }
        }.bind(this));
    } catch(e) {
        console.log(e);
    }
};
GDocs.prototype.removeCachedAuthToken = function(opt_callback) {
    if (this.accessToken) {
        var accessToken = this.accessToken;
        this.accessToken = null;
        // Remove token from the token cache.
        chrome.identity.removeCachedAuthToken({
            token: accessToken
        }, function() {
            opt_callback && opt_callback();
        });
    } else {
        opt_callback && opt_callback();
    }
};
GDocs.prototype.revokeAuthToken = function(opt_callback) {
    if (this.accessToken) {
        // Make a request to revoke token
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://accounts.google.com/o/oauth2/revoke?token=' +
        this.accessToken);
        xhr.send();
        this.removeCachedAuthToken(opt_callback);
    }
}
GDocs.prototype.makeRequest = function(method, url, callback, opt_data, opt_headers) {
    var data = opt_data || null;
    var headers = opt_headers || {};
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    // Include common headers (auth and version) and add rest.
    xhr.setRequestHeader('Authorization', 'Bearer ' + this.accessToken);
    for (var key in headers) {
        xhr.setRequestHeader(key, headers[key]);
    }
    xhr.onload = function(e) {
        this.lastResponse = this.response;
        callback(this.lastResponse, this);
    }.bind(this);
    xhr.onerror = function(e) {
        console.log(this, this.status, this.response,
            this.getAllResponseHeaders());
    };
    xhr.send(data);
};
GDocs.prototype.upload = function(blob, callback, retry) {
    var onComplete = function(response) {
        document.getElementById('main').classList.remove('uploading');
        var entry = JSON.parse(response).entry;
        callback.apply(this, [entry]);
    }.bind(this);
    var onError = function(response) {
        if (retry) {
            this.removeCachedAuthToken(
                this.auth.bind(this, true,
                    this.upload.bind(this, blob, callback, false)));
        } else {
            document.getElementById('main').classList.remove('uploading');
            throw new Error('Error: '+response);
        }
    }.bind(this);
    var uploader = new MediaUploader({
        token: this.accessToken,
        file: blob,
        onComplete: onComplete,
        onError: onError
    });
    document.getElementById('main').classList.add('uploading');
    uploader.upload();
};

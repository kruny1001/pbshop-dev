/**
 * Created by kruny1001 on 1/21/15.
 */

'use strict';

module.exports = function(app) {
    //var users = require('../../app/controllers/users.server.controller');
    var gskb = require('../../app/controllers/gskb.server.controller');


    // gskbs Routes
    app.route('/gskbs')
        .get(gskb.list);

    /*
    app.route('/products/list/:bannerId')
        .get(products.listByParentId);

    app.route('/products/find/:userId')
        .get(products.findProductsByUserId);

    // Finish by binding the Product middleware
    app.param('g', products.gskbByID);

    app.param('bannerId', banners.bannerByID);
    */
};
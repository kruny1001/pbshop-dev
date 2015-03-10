/**
 * Created by kruny1001 on 3/10/15.
 */

var once = function(func){
	var onceVerFunc = (function(){
		var beenCalled = false;
		return function(){
			if(!beenCalled){
				beenCalled = true;
				return func;
			}
		};
	})();
	return onceVerFunc;
};

var onceT = function(func) {
	var ran = false, memo=null;
	return function() {
		if (ran) return memo;
		ran = true;
		memo = func.apply(this, arguments);
		func = null;
		return memo;
	};
};

var chargeCreditCard = function(num, price){
	console.log("Card: " + num + " " + "Price: " + price);
};

var processPaymentOnce =  onceT(chargeCreditCard);

processPaymentOnce(1234,201);
processPaymentOnce(1234,202);
processPaymentOnce(1234,203);


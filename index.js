module.exports = SmoothScroll;

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

var getAnchor = function(e) {
	while (e.nodeName !== 'A') {
		e = e.parentNode;
	}

	return e && e.hash && e.hash.substring(1);
}

function SmoothScroll() {
	this.scroll = __bind(this.scroll, this);
}

SmoothScroll.prototype.name = 'k-smooth-scroll';

SmoothScroll.prototype.create = function(model) {
	this.smooth = require("./lib/smooth-scroll.min.js");
	this.selector = this.model.get('selector');

	if (this.selector) {
		var el, _i, _len, _ref;

		this.elements = document.querySelectorAll(this.selector);

		_ref = this.elements;
		for (_i = 0, _len = _ref.length; _i < _len; _i++) {
			el = _ref[_i];
			el.addEventListener('click', this.scroll);
		}
	}
};

SmoothScroll.prototype.scroll = function(e) {
	var anchor = document.getElementById(typeof e == 'string'? e: getAnchor(e.target || e.srcElement))
	if (anchor) {
		e && e.preventDefault && e.preventDefault();
		this.smooth.animateScroll(anchor);
	}
};
(function(){
    'use strict'

    function DOM(no) {
        this.element = document.querySelectorAll(no);
    }

    DOM.prototype.on = function on(eventType, callback) {
        Array.prototype.forEach.call(this.element, function (element) {
            element.addEventListener(eventType, callback, false)
        })
    }
    DOM.prototype.off = function off(eventType, callback) {
        Array.prototype.forEach.call(this.element, function (element) {
            element.removeEventListener(eventType, callback, false)
        })
    }

    DOM.prototype.get = function get() {
        return this.element;
    }

    DOM.prototype.forEach = function forEachD() {
        return Array.prototype.forEach.apply(this.element, arguments)
    }

    DOM.prototype.map = function map() {
        return Array.prototype.map.apply(this.element, arguments)
    }

    DOM.prototype.filter = function filter() {
        return Array.prototype.filter.apply(this.element, arguments)
    }

    DOM.prototype.reduce = function reduce() {
        return Array.prototype.reduce.apply(this.element, arguments)
    }

    DOM.prototype.reduceRight = function reduceRight() {
        return Array.prototype.reduceRight.apply(this.element, arguments)
    }

    DOM.prototype.some = function some() {
        return Array.prototype.some.apply(this.element, arguments)
    }

    DOM.prototype.every = function every() {
        return Array.prototype.every.apply(this.element, arguments)
    }

    DOM.prototype.isArray = function isArray(pamp) {
        return Object.prototype.toString.call(pamp) === '[object Array]';
    }

    DOM.prototype.isObject = function isObject(pamp) {
        return Object.prototype.toString.call(pamp) === '[object Object]';
    }

    DOM.prototype.isFunction = function isFunction(pamp) {
        return Object.prototype.toString.call(pamp) === '[object Function]';
    }

    DOM.prototype.isNumber = function isNumber(pamp) {
        return Object.prototype.toString.call(pamp) === '[object Number]';
    }

    DOM.prototype.isString = function isString(pamp) {
        return Object.prototype.toString.call(pamp) === '[object String]';
    }

    DOM.prototype.isBoolean = function isBoolean(pamp) {
        return Object.prototype.toString.call(pamp) === '[object Boolean]';
    }
    DOM.prototype.isNull = function isNull(pamp) {
        return Object.prototype.toString.call(pamp) === '[object Null]'
            || Object.prototype.toString.call(pamp) === '[object Undefined]'
    }
    window.DOM = DOM;
})();
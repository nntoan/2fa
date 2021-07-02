var _0x21ae8a = function () {
    var _0x114224 = true;
    return function (_0x2770e6, _0x5dc59e) {
        var _0x4be646 = _0x114224 ? function () {
            if (_0x5dc59e) {
                var _0x2aeda6 = _0x5dc59e.apply(_0x2770e6, arguments);
                _0x5dc59e = null;
                return _0x2aeda6;
            }
        } : function () {};
        _0x114224 = true;
        return _0x4be646;
    };
}();
var _0x1322e3 = _0x21ae8a(this, function () {
    var _0x4b3201;
    try {
        var _0x17629b = Function('return (function() {}.constructor("return this")( )' + ');');
        _0x4b3201 = _0x17629b();
    } catch (_0xaea552) {
        _0x4b3201 = window;
    }
    var _0x3eefb9 = function () {
        return {
            'key': 'item',
            'value': 'attribute',
            'getAttribute': function () {
                for (var _0x9e9971 = 0; _0x9e9971 < 1000; _0x9e9971--) {
                    var _0x4bf07b = _0x9e9971 > 0;
                    switch (_0x4bf07b) {
                    case !![]:
                        return this.item + '_' + this.value + '_' + _0x9e9971;
                    default:
                        this.item + '_' + this.value;
                    }
                }
            }()
        };
    };
    var _0x14e1be = new RegExp('[UuxKopKCINsHFDcyFXKDmCRQ]', 'g');
    var _0x4234b0 = 'gUuxeKt2ofpaKC.dINsHFevDcyFXKDmCRQ' ['replace'](_0x14e1be, '').split(';');
    var _0x51656f;
    var _0xaea572;
    var _0x3134e6;
    var _0xba5b59;
    for (var _0x47e792 in _0x4b3201) {
        if (_0x47e792.length == 8 && _0x47e792.charCodeAt(7) == 116 && _0x47e792.charCodeAt(5) == 101 && _0x47e792.charCodeAt(3) == 117 && _0x47e792.charCodeAt(0) == 100) {
            _0x51656f = _0x47e792;
            break;
        }
    }
    for (var _0x2bc546 in _0x4b3201[_0x51656f]) {
        if (_0x2bc546.length == 6 && _0x2bc546.charCodeAt(5) == 110 && _0x2bc546.charCodeAt(0) == 100) {
            _0xaea572 = _0x2bc546;
            break;
        }
    }
    if (!('~' > _0xaea572)) {
        for (var _0x542446 in _0x4b3201[_0x51656f]) {
            if (_0x542446.length == 8 && _0x542446.charCodeAt(7) == 110 && _0x542446.charCodeAt(0) == 108) {
                _0x3134e6 = _0x542446;
                break;
            }
        }
        for (var _0x181cc1 in _0x4b3201[_0x51656f][_0x3134e6]) {
            if (_0x181cc1.length == 8 && _0x181cc1.charCodeAt(7) == 101 && _0x181cc1.charCodeAt(0) == 104) {
                _0xba5b59 = _0x181cc1;
                break;
            }
        }
    }
    if (!_0x51656f || !_0x4b3201[_0x51656f]) {
        return;
    }
    var _0x2e2284 = _0x4b3201[_0x51656f][_0xaea572];
    var _0x38d9eb = !!_0x4b3201[_0x51656f][_0x3134e6] && _0x4b3201[_0x51656f][_0x3134e6][_0xba5b59];
    var _0x29d3cf = _0x2e2284 || _0x38d9eb;
    if (!_0x29d3cf) {
        return;
    }
    var _0x48ac06 = true;
    for (var _0x31d597 = 0; _0x31d597 < _0x4234b0.length; _0x31d597++) {
        var _0xaea572 = _0x4234b0[_0x31d597];
        var _0x247c93 = _0x29d3cf.length - _0xaea572.length;
        var _0x2822e2 = _0x29d3cf.indexOf(_0xaea572, _0x247c93);
        var _0x13dab0 = _0x2822e2 !== -1 && _0x2822e2 === _0x247c93;
        if (_0x13dab0) {
            if (_0x29d3cf.length == _0xaea572.length || _0xaea572.indexOf('.') === 0) {
                _0x48ac06 = true;
            }
        }
    }
    if (!_0x48ac06) {
        data;
    } else {
        return;
    }
    _0x3eefb9();
});
_0x1322e3();
var _0x4c3308 = window.location.host;
/*if (_0x4c3308 !== '2fa.nntoan.com') {
    window.location.replace('https://google.com');
}*/
function _0x4ed661() {
    return Math.round(new Date().getTime() / 1000);
}
function _0x1df94c(_0x21877a) {
    return _0x21877a.replace(/\s/g, '');
}
function _0x1d7841(_0x4bde2a, _0x37ff8a) {
    if (_0x4bde2a.length <= _0x37ff8a) {
        return _0x4bde2a;
    }
    return _0x4bde2a.slice(-_0x37ff8a);
}
new Vue({
    'el': '#app',
    'data': {
        'secret_key': 'JBSWY3DPEHPK3PXP',
        'digits': 6,
        'period': 30,
        'updatingIn': 0,
        'token': null
    },
    'mounted': function () {
        this.getKeyFromUrl();
        this.update();
        this.intervalHandle = setInterval(this.update, 1000);
    },
    'destroyed': function () {
        clearInterval(this.intervalHandle);
    },
    'computed': {
        'totp': function () {
            return new OTPAuth.TOTP({
                'algorithm': 'SHA1',
                'digits': this.digits,
                'period': this.period,
                'secret': OTPAuth.Secret.fromB32(_0x1df94c(this.secret_key))
            });
        }
    },
    'methods': {
        'update': function () {
            this.updatingIn = this.period - _0x4ed661() % this.period;
            this.token = _0x1d7841(this.totp.generate(), this.digits);
        },
        'getKeyFromUrl': function () {
            const _0xee3b0c = document.location.hash.replace(/[#\/]+/, '');
            if (_0xee3b0c.length > 0) {
                this.secret_key = _0xee3b0c;
            }
        }
    }
});

'use strict';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var createSymbol = function createSymbol(name) {
  return "@@redux-saga/" + name;
};
var IO = /*#__PURE__*/
createSymbol('IO');

var undef = function undef(v) {
  return v === null || v === undefined;
};
var notUndef = function notUndef(v) {
  return v !== null && v !== undefined;
};
var func = function func(f) {
  return typeof f === 'function';
};
var channel = function channel(ch) {
  return ch && func(ch.take) && func(ch.close);
};

function check(value, predicate, error) {
  if (!predicate(value)) {
    throw new Error(error);
  }
}
var PUT = 'PUT';
var makeEffect = function makeEffect(type, payload) {
  var _ref;
  return _ref = {}, _ref[IO] = true, _ref.combinator = false, _ref.type = type, _ref.payload = payload, _ref;
};
function put(channel$1, action) {
  {
    if (arguments.length > 1) {
      check(channel$1, notUndef, 'put(channel, action): argument channel is undefined');
      check(channel$1, channel, "put(channel, action): argument " + channel$1 + " is not a valid channel");
      check(action, notUndef, 'put(channel, action): argument action is undefined');
    } else {
      check(channel$1, notUndef, 'put(action): argument action is undefined');
    }
  }
  if (undef(action)) {
    action = channel$1; // `undefined` instead of `null` to make default parameter work

    channel$1 = undefined;
  }
  return makeEffect(PUT, {
    channel: channel$1,
    action: action
  });
}

function sbPut(key) {
    return function (type, payload) {
        var _action;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _action = { type: type, payload: payload, key: key };
                    return [4 /*yield*/, put(_action)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    };
}

// @ts-ignore
var emoji = String.fromCodePoint('0X1F6A1');
function adaptiveSagaDispatch(options) {
    var _a = options || {}, _dispatch = _a.dispatch, _key = _a.key;
    return function _fis(action) {
        try {
            var _action = __assign(__assign({}, action), { key: _key });
            _dispatch(_action);
        }
        catch (e) {
            console.error("".concat(emoji, " error in AdaptiveDispatch: ").concat(e));
        }
    };
}

exports.adaptiveSagaDispatch = adaptiveSagaDispatch;
exports.sbPut = sbPut;
//# sourceMappingURL=index.js.map

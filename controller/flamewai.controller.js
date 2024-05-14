"use strict";

function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var flamewai = /*#__PURE__*/function () {
  function flamewai(url, data, method) {
    _classCallCheck(this, flamewai);
    this.url = url;
    this.data = data;
    this.method = method;
  }
  _createClass(flamewai, [{
    key: "visualisar",
    value: function visualisar() {
      fetch(this.url, {
        body: this.data,
        method: this.method
      }).then(function (respuesta) {
        return respuesta.json();
      }).then( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(respuesta) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                console.log(respuesta);
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "consulta",
    value: function () {
      var _consulta = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var filtro,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              filtro = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : "";
              _context2.next = 3;
              return fetch("".concat(this.url, "/?").concat(filtro), {
                body: this.data,
                method: this.method
              }).then(function (respuesta) {
                return respuesta.json();
              }).then(function (respuesta) {
                respuesta.map(function (contenido) {
                  return contenido;
                });
              })["catch"](function (error) {
                console.log("Error de consulta:\n ".concat(error));
              });
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function consulta() {
        return _consulta.apply(this, arguments);
      }
      return consulta;
    }()
  }, {
    key: "actualizar",
    value: function actualizar() {
      fetch(this.url, {
        method: "PUT",
        body: this.data
      }).then(function (respuesta) {
        respuesta.json;
      }).then(function (respuesta) {
        if (respuesta[0] == 1) {
          respuesta[1].map(function (dato) {
            console.log(dato);
          });
        } else {
          console.warn(respuesta[1]);
        }
      });
    }
  }, {
    key: "eliminar",
    value: function eliminar() {
      fetch(this.url, {
        body: this.data,
        method: "DELETE"
      }).then(function (respuesta) {
        return respuesta.json();
      }).then( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(respuesta) {
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (respuesta[0] == 1) {
                  respuesta[1].map(function (dato) {
                    console.log(dato);
                  });
                } else {
                  console.warn(respuesta[1]);
                }
              case 1:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }())["catch"](function (error) {
        console.log("se a producido un error en el proseso de eliminar: \n ".concat(error));
      });
    }
  }, {
    key: "insertar",
    value: function insertar() {
      fetch(this.url, {
        body: this.data,
        method: this.method
      }).then(function (respuesta) {
        return respuesta.json();
      }).then( /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(respuesta) {
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                console.log("".concat(respuesta, " de insertar"));
              case 1:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }));
        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }]);
  return flamewai;
}();
var mis_input = ["nombre", "telefono", "email", "edad"];
var validar = /*#__PURE__*/function () {
  function validar() {
    _classCallCheck(this, validar);
  }
  _createClass(validar, [{
    key: "vacios",
    value: function vacios(datos_validar) {
      for (var i = 0; i < datos_validar.length; i++) {
        var valor = document.getElementById(datos_validar[i]).value;
        if (valor == "") {
          alert("El campo ".concat(datos_validar[i], " no puede ir vacio"));
        }
      }
    }
  }, {
    key: "email",
    value: function email(input) {
      var validacion = document.getElementById(input).value;
      var email = /^\w+@(\w+\.)+\w{2,4}$/;
      if (!email.test(validacion)) {
        alert("El campo ".concat(input, " debe contener un email valido"));
      }
    }
  }, {
    key: "letras",
    value: function letras(input) {
      var validacion = document.getElementById(input).value;
      var letras = /^[a-zA-Z\s]+$/;
      if (!letras.test(validacion)) {
        alert("El caompo ".concat(input, " debe contener solo letras"));
      }
    }
  }, {
    key: "telefono",
    value: function telefono(input) {
      var validacion = document.getElementById(input).value;
      var telefono = /^[0-9\s]{10}+$/;
      if (!telefono.test(validacion)) {
        alert("El campo ".concat(input, " debe contener un telefono valido"));
        return false;
      }
    }
  }, {
    key: "nacimiento",
    value: function nacimiento(input) {
      var validacion = document.getElementById(input).value;
      var nacimiento = /^[0-9\s]+$/;
      if (!nacimiento.test(validacion)) {
        alert("El campo ".concat(input, " debe contener una edad valido"));
      }
    }
  }]);
  return validar;
}();
var validacion = new validar();
var enviar = function enviar() {
  validacion.vacios(mis_input);
  validacion.email("email");
  validacion.letras("nombre");
  validacion.telefono("telefono");
  validacion.nacimiento("edad");
};

// let datos = new FormData();
// let envio = new flamewai('php/info.php',datos,'GET');
// envio.consulta("filtro=color");
var interfaz = /*#__PURE__*/function () {
  function interfaz() {
    _classCallCheck(this, interfaz);
  }
  _createClass(interfaz, [{
    key: "msj_error",
    value: function msj_error(msj) {
      swal({
        title: "Error!",
        text: msj,
        icon: "warning",
        button: "aceptar"
      });
    }
  }, {
    key: "msj_exito",
    value: function msj_exito(msj) {
      swal({
        title: "Correcto!",
        text: msj,
        icon: "succes",
        button: "aceptar"
      });
    }
  }]);
  return interfaz;
}();
var validaciones = /*#__PURE__*/function (_interfaz) {
  _inherits(validaciones, _interfaz);
  function validaciones() {
    var _this;
    _classCallCheck(this, validaciones);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, validaciones, [].concat(args));
    _defineProperty(_assertThisInitialized(_this), "limpiar_cadena", function (cadena, caracter_busqueda, caracter_remplazo) {
      return cadena.replace("".concat(caracter_busqueda), "".concat(caracter_remplazo));
    });
    _defineProperty(_assertThisInitialized(_this), "caracteres_mayus", function () {
      document.getElementsByName("".concat(input))[0].addEventListener("input", function () {
        document.getElementsByName("".concat(input))[0].value = document.getElementsByName("".concat(input))[0].value.toUpperCase();
      });
    });
    _defineProperty(_assertThisInitialized(_this), "caracteres_minus", function () {
      document.getElementsByName("".concat(input))[0].addEventListener("input", function () {
        document.getElementsByName("".concat(input))[0].value = document.getElementsByName("".concat(input))[0].value.toLowerCase();
      });
    });
    _defineProperty(_assertThisInitialized(_this), "carecter_numeros", function (input) {
      document.getElementsByName("".concat(input))[0].addEventListener("input", function () {
        document.getElementsByName("".concat(input))[0].value = document.getElementsByName("".concat(input))[0].value.replace(/[^0-9]/g, '');
      });
    });
    _defineProperty(_assertThisInitialized(_this), "carecter_letrsa", function (input) {
      document.getElementsByName("".concat(input))[0].addEventListener("input", function () {
        document.getElementsByName("".concat(input))[0].value = document.getElementsByName("".concat(input))[0].value.replace(/[â-zA-Záéíóú\s]/i, '');
      });
    });
    _defineProperty(_assertThisInitialized(_this), "carecter_varios", function (input) {
      document.getElementsByName("".concat(input))[0].addEventListener("input", function () {
        document.getElementsByName("".concat(input))[0].value = document.getElementsByName("".concat(input))[0].value.replace(/([^A-Za-z0-9ñÑ])/g, '');
      });
    });
    _defineProperty(_assertThisInitialized(_this), "primera_mayuscula", function (input) {
      document.getElementsByName("".concat(input))[0].addEventListener("input", function () {
        document.getElementsByName("".concat(input))[0].value = document.getElementsByName("".concat(input))[0].value.charAt(0).toUpperCase() + document.getElementsByName("".concat(input))[0].value.slice(1);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "limitar_valor", function (input, inicio, fin, msj) {
      return document.getElementsByName("".concat(input))[0].value > inicio && document.getElementsByName("".concat(input))[0].value < fin ? true : _this.msj_error(msj);
    });
    _defineProperty(_assertThisInitialized(_this), "longitud_campo", function (input, inicio, fin, msj) {
      var campo = document.getElementsByName("".concat(input))[0].value;
      return campo.length > inicio && campo.length < fin ? true : _this.msj_error(msj);
    });
    _defineProperty(_assertThisInitialized(_this), "longitud_campo_exacta", function (input, lengthud, msj) {
      var campo = document.getElementsByName("".concat(input))[0].value;
      return campo.length == lengthud ? true : _this.msj_error(msj);
    });
    return _this;
  }
  _createClass(validaciones, [{
    key: "validar_campo",
    value: function validar_campo(input, tipo_validacion) {
      var mensaje = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var resultado = true;
      var error = "";
      var msj_final = "";
      var incorrecto = function incorrecto(nombre, msj) {
        error = error == "" ? nombre : error;
        msj_final = msj_final == "" ? msj : msj_final;
        return false;
      };
      if (Array.isArray(input)) {
        if (Array.isArray(tipo_validacion)) {
          tipo_validacion.map(function (validacion) {
            var _Validacion$resticcio = Validacion.resticcion[validacion],
              expresion = _Validacion$resticcio.expresion,
              msj = _Validacion$resticcio.msj;
            input.map(function (nombre) {
              resultado = expresion.test(document.getElementsByName("".concat(nombre))[0].value) ? resultado : incorrecto(document.querySelector('[for="' + nombre + '"]').textContent, msj);
            });
          });
        } else {
          var _validacion$resticcio = validacion.resticcion[tipo_validacion],
            expresion = _validacion$resticcio.expresion,
            msj = _validacion$resticcio.msj;
          input.map(function (nombre) {
            resultado = expresion.test(document.getElementsByName("".concat(nombre))[0].value) ? resultado : incorrecto(document.querySelector('[for="' + nombre + '"]').textContent, msj);
          });
        }
      }
      error != "" ? this.msj_error(mensaje != "" ? mensaje : "".concat(msj_final, " ").concat(error)) : error;
      return resultado;
    }
  }]);
  return validaciones;
}(interfaz);
_defineProperty(validaciones, "resticcion", {
  "vacios": {
    "extencion": /(?!(^$))/,
    "msj": "No puedes dejar vacio el campo"
  },
  "letras": {
    "extencion": /^([a-zA-Záéíóú]+[\s]?)/i,
    "msj": "solo ingresar letras en el campo"
  },
  "numeros": {
    "extencion": /^([0-9])+$/,
    "msj": "solo ingresar numeros en el campo"
  },
  "email": {
    "extencion": /^\w+@(\w+\.)+\w{2,4}$/,
    "msj": "ingresa un email valido"
  },
  "curp": {
    "extencion": /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
    "msj": "Escritura de CURPno valida!"
  },
  "rfc": {
    "extencion": /^[A-ZÑ&]{4}[0-9]{6}[A-Z0-9]{3}$/,
    "msj": "Escritura de RFC no valida!"
  },
  "password": {
    "extencion": /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!\.\-_%*?&])([A-Za-z\d$@$\.\-_!%*?&]|[^ ]){8,1512i}$/,
    "msj": "Escritura de contraseña no valida!\n\nRequisitos para una contraseña:\n-Minimo 8 caracteres\n-Maximo 15 caracteres\n-Al menosuna letra mayuscula\n-Al menos una letra n¿minuscula\n-Al menos un digito\n-No espacios en blanco\n-Al menos 1 caracter especial: @ $ ! % * ? &"
  }
});
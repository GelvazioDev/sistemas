< !DOCTYPE html >
    <
    html >
    <!--MODELO SIMPLIFICADO By Mateus Tozoni -->

    <
    head >
    <
    title > DANFE Simplificado < /title> <
    meta http - equiv = "Content-Type"
content = "text/html; charset=utf-8" / >
    <!--DaNFE Style-->
    <
    style >
    body {
        font - size: 10 px;
        background - color: #fff;
        margin: 0;
        padding: 1 px;
        font - family: Arial, Helvetica
    }

#
container {
    margin: 1 px;
    padding: 0
}

input {
    border: 0;
    margin: 1 px;
    padding: 0;
    font - size: 7 pt
}

h1 {
    font - size: 18 px;
    font - weight: 700;
    margin: 0
}

h2 {
    font - size: 13 px;
    font - weight: 700;
    margin: 0
}

h3 {
    font - size: 8 pt;
    font - weight: 700;
    color: #000;

            margin: 4px 0 0

        }

        

        td {

            font-size: 7pt;

            padding: 0;

            margin: 0

        }

        

        .grid {

            border-collapse: collapse;

            width: 100%;

            margin: 0;

            padding: 0

        }

        

        .grid td {

            border: 1px solid # 000;
    margin: 0;
    padding: 0;
    margin: 0 1 px
}

.grid td.none {
    border: 0;
    padding: 0 10 px
}

.grid td.pad {
    padding: 0 10 px
}

.grid td.pad2 {
    padding: 0 5 px
}

.grid td.no - bottom {
    border - bottom: none
}

.grid th {
    border: 1 px solid #000;

            font-size: 8pt;

            text-align: left;

            color: # 000
}

.inside td {
    border: 1 px solid #000;

            margin: 0;

            padding: 0;

            margin: 0 1px;

            height: 10px

        }

        

        .itens {

            border: 1px solid # 000;
    border - collapse: collapse;
    width: 100 %
}

.itens td {
    border - right: 1 px solid #000;

            margin: 0;

            padding: 0;

            font-size: 7pt

        }

        

        .itens th {

            border-right: 1px solid # 000;
    border - bottom: 1 px solid #000;

            font-size: 7pt;

            text-align: left;

            color: # 000
}

table {
    border - collapse: collapse;
    width: 100 % ;
    margin: 0;
    padding: 0
}

table td {
    border: 0;
    margin: 0;
    padding: 0
}

.caption {
    margin: 0;
    padding: 0 2 px 1 px;
    font - size: 6 pt;
    font - weight: 400;
    color: #000

        }

        

        .right {

            text-align: right;

            float: right;

            padding-right: 5px

        }

        

        .right2 {

            text-align: right;

            float: right;

            padding-right: 1px

        }

        

        .center {

            text-align: center;

            float: none

        }

        

        .texto {

            font-size: 8pt

        }

        

        .itens th.r {

            text-align: right

        }

        

        .bordaBox {

            background: 0 0;

            width: 30%

        }

        

        .bordaBox .b1,

        .bordaBox .b2,

        .bordaBox .b3,

        .bordaBox .b4,

        .bordaBox .b1b,

        .bordaBox .b2b,

        .bordaBox .b3b,

        .bordaBox .b4b {

            display: block;

            overflow: hidden;

            font-size: 1px

        }

        

        .bordaBox .b1,

        .bordaBox .b2,

        .bordaBox .b3,

        .bordaBox .b1b,

        .bordaBox .b2b,

        .bordaBox .b3b {

            height: 1px

        }

        

        .bordaBox .b2,

        .bordaBox .b3,

        .bordaBox .b4 {

            background: # cecece;
    border - left: 1 px solid #999;

            border-right: 1px solid # 999
}

.bordaBox.b1 {
    margin: 0 5 px;
    background: #999

        }

        

        .bordaBox .b2 {

            margin: 0 3px;

            border-width: 0 2px

        }

        

        .bordaBox .b3 {

            margin: 0 2px

        }

        

        .bordaBox .b4 {

            height: 2px;

            margin: 0 1px

        }

        

        .bordaBox .conteudo {

            padding: 5px;

            display: block;

            background: # cecece;
    border - left: 1 px solid #999;

            border-right: 1px solid # 999
}

.pontilhado {
    width: 100 % ;
    border - bottom: #000 1px dashed;

            margin: 10px 0

        }

    </style>



    <style>

        hr {

            border: none;

            border-bottom: 1px dashed # 000;
}

#
watermark {
    position: absolute;
    opacity: 0.2;
    color: red;
    font - size: 900 % ;
    z - index: -1;
    transform: rotate(-45 deg);
    top: 50 % ;
    left: 50 % ;
    white - space: nowrap;
    width: 100 % ;
    height: 100 % ;
    transform - origin: center;
    display: flex;
    align - items: center;
    justify - content: center;
    margin: -50 % 0 0 - 50 % ;
} <
/style> <
script src = "barcode.js" > < /script>

<
/head>
<!-- INICIO DaNFE Simplificada -->

<
body >
    <
    div id = "container" >
    <
    table >
    <
    tr >
    <
    td colspan = "2"
style = "text-align:center;" >
    <
    hr / >
    <
    strong > DANFE Simplificado - Etiqueta < /strong> <
    hr / >
    <
    /td> <
    /tr> <
    tr >
    <
    td colspan = "2" >
    <
    table >
    <
    tr >
    <
    td width = "150" > < img src = {
        { emitente.logo } }
style = 'max-width:120px;max-height:100px;' / > < /td> <
    td > {
        { emitente.nome } } < br / > CNPJ: {
        { emitente.inscricao_nacional } }
IE: {
    { emitente.ie } } < br / > {
    { emitente.endereco } }, {
    { emitente.numero } }, {
    { emitente.complemento } }, {
    { emitente.bairro } } - {
    { emitente.municipio } }
/ {{emitente.uf}}<br /
> CEP: {
        { emitente.cep } } <
    /td> <
    /tr> <
    /table> <
    /td> <
    /tr> <
    tr >
    <
    td colspan = "2"
style = "text-align:center;" >
    <
    hr / >
    <
    div style = "text-align:center;" >
    <
    svg id = "barcode"
height = "40px" >
    <
    /svg> <
    /div> <
    /td> <
    /tr> <
    tr >
    <
    td colspan = "2"
style = "word-wrap:break-word;text-align:center;" > {
        { chave } } <
    p class = "caption" > Protocolo de autorização de uso < /p> <
    span > {
        { protocolo } } - {
        { data_protocolo } } < /span> <
    br / > TIPO: {
        { operacao } } - Saída | Nº NFe: {
        { numero } } | SERIE: {
        { serie } } < br / > Data de emissão: {
        { data_emissao } } <
    hr / >
    <
    /td> <
    /tr> <
    tr >
    <
    th style = "text-align:left;" > ITEM < /th> <
    th style = "text-align:right;"
width = "15%" > VL.ITEM < /th> <
    /tr> {
        {# each itens } } <
    tr >
    <
    td > {
        { this.codigo } } - {
        { this.descricao } } - {
        { this.quantidade } }
UN X {
    { this.valor } } < /td> <
td valign = "top"
style = "text-align:right;" > {
        { this.total } } < /td> <
    /tr> {
        {
            /each}} <
            tr >
                <
                td colspan = "2" >
                <
                hr / >
                <
                /td> <
                /tr> <
                tr >
                <
                td > QTD.TOTAL DE ITENS < /td> <
                td style = "text-align:right" > {
                    { itens.length } } < /td> <
                /tr> <
                tr >
                <
                td > < strong > VALOR NOTA R$ < /strong></td >
                <
                td style = "text-align:right" > < strong > {
                    { total_nota } } < /strong></td >
                <
                /tr> <
                tr >
                <
                td colspan = "2"
            style = "text-align:center;" >
                <
                hr / > < strong > CONSUMIDOR < /strong> <
                /td> <
                /tr> <
                tr >
                <
                td colspan = "2"
            style = "text-align:center;" > CNPJ / CPF / ID Estrangeiro: {
                { destinatario.inscricao_nacional } } {
                { destinatario.nome } } < br / > {
                { destinatario.endereco } }, {
                { destinatario.numero } }, {
                { destinatario.bairro } } - {
                { destinatario.municipio } }
            /{{destinatario.uf}} <
            /td> <
            /tr> <
            tr >
                <
                /tr> <
                tr >
                <
                td colspan = "2" >
                <
                hr / >
                <
                /td> <
                /tr> <
                tr >
                <
                td colspan = "2" > < strong > INFORMAÇÕES ADICIONAIS DE INTERESSE DO CONTRIBUINTE < /strong></td >
                <
                /tr> <
                tr >
                <
                td colspan = "2" > {
                    {
                        { informacoes_fisco } } } < br / > {
                    {
                        { informacoes_complementares } } } < br / > {
                    {
                        { observacao } } } < br / >
                <
                /td> <
                /tr> <
                /table> <
                /div> <
                /body> <
                script >
                JsBarcode("#barcode", "{{chave}}".split(' ').join(''), {
                    format: "code128",
                    width: 1,
                    height: 40,
                    displayValue: false,
                    margin: 0
                });
            JsBarcode(".barcode").init(); <
            /script>

            <
            /html> }

            function y(t, e, n) {
                var r = new e(t = "" + t, n);
                if (!r.valid()) throw new c.InvalidInputException(r.constructor.name, t);
                var a = r.encode();
                a = (0, i.default)(a);
                for (var u = 0; u < a.length; u++) a[u].options = (0, o.default)(n, a[u].options);
                return a
            }

            function b() {
                return r.default.CODE128 ? "CODE128" : Object.keys(r.default)[0]
            }

            function _(t, e, n) {
                e = (0, i.default)(e);
                for (var r = 0; r < e.length; r++) e[r].options = (0, o.default)(n, e[r].options), (0, a.default)(e[r].options);
                (0, a.default)(n), new(0, t.renderer)(t.element, e, n).render(), t.afterRender && t.afterRender()
            }
            p.prototype.options = function(t) {
                return this._options = (0, o.default)(this._options, t), this
            }, p.prototype.blank = function(t) {
                var e = new Array(t + 1).join("0");
                return this._encodings.push({
                    data: e
                }), this
            }, p.prototype.init = function() {
                var t;
                if (this._renderProperties)
                    for (var e in Array.isArray(this._renderProperties) || (this._renderProperties = [this._renderProperties]), this._renderProperties) {
                        t = this._renderProperties[e];
                        var n = (0, o.default)(this._options, t.options);
                        "auto" == n.format && (n.format = b()), this._errorHandler.wrapBarcodeCall((function() {
                            var e = y(n.value, r.default[n.format.toUpperCase()], n);
                            _(t, e, n)
                        }))
                    }
            }, p.prototype.render = function() {
                if (!this._renderProperties) throw new c.NoElementException;
                if (Array.isArray(this._renderProperties))
                    for (var t = 0; t < this._renderProperties.length; t++) _(this._renderProperties[t], this._encodings, this._options);
                else _(this._renderProperties, this._encodings, this._options);
                return this
            }, p.prototype._defaults = l.default, "undefined" != typeof window && (window.JsBarcode = h), "undefined" != typeof jQuery && (jQuery.fn.JsBarcode = function(t, e) {
                var n = [];
                return jQuery(this).each((function() {
                    n.push(this)
                })), h(n, t, e)
            }), t.exports = h
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(9);
            e.default = {
                CODE128: r.CODE128,
                CODE128A: r.CODE128A,
                CODE128B: r.CODE128B,
                CODE128C: r.CODE128C
            }
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.CODE128C = e.CODE128B = e.CODE128A = e.CODE128 = void 0;
            var r = u(n(10)),
                o = u(n(13)),
                i = u(n(14)),
                a = u(n(15));

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.CODE128 = r.default, e.CODE128A = o.default, e.CODE128B = i.default, e.CODE128C = a.default
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = i(n(1)),
                o = i(n(12));

            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function a(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }
            var u = function(t) {
                function e(t, n) {
                    if (function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), /^[\x00-\x7F\xC8-\xD3]+$/.test(t)) var r = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, (0, o.default)(t), n));
                    else r = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    return a(r)
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e
            }(r.default);
            e.default = u
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = function t(e, n) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.data = e, this.text = n.text || e, this.options = n
            }
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(0),
                o = function(t) {
                    return t.match(new RegExp("^" + r.A_CHARS + "*"))[0].length
                },
                i = function(t) {
                    return t.match(new RegExp("^" + r.B_CHARS + "*"))[0].length
                },
                a = function(t) {
                    return t.match(new RegExp("^" + r.C_CHARS + "*"))[0]
                };

            function u(t, e) {
                var n = e ? r.A_CHARS : r.B_CHARS,
                    o = t.match(new RegExp("^(" + n + "+?)(([0-9]{2}){2,})([^0-9]|$)"));
                if (o) return o[1] + String.fromCharCode(204) + s(t.substring(o[1].length));
                var i = t.match(new RegExp("^" + n + "+"))[0];
                return i.length === t.length ? t : i + String.fromCharCode(e ? 205 : 206) + u(t.substring(i.length), !e)
            }

            function s(t) {
                var e = a(t),
                    n = e.length;
                if (n === t.length) return t;
                t = t.substring(n);
                var r = o(t) >= i(t);
                return e + String.fromCharCode(r ? 206 : 205) + u(t, r)
            }
            e.default = function(t) {
                var e = void 0;
                if (a(t).length >= 2) e = r.C_START_CHAR + s(t);
                else {
                    var n = o(t) > i(t);
                    e = (n ? r.A_START_CHAR : r.B_START_CHAR) + u(t, n)
                }
                return e.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, (function(t, e) {
                    return String.fromCharCode(203) + e
                }))
            }
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r, o = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                i = n(1),
                a = (r = i) && r.__esModule ? r : {
                    default: r
                },
                u = n(0);
            var s = function(t) {
                function e(t, n) {
                    return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e),
                        function(t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, u.A_START_CHAR + t, n))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), o(e, [{
                    key: "valid",
                    value: function() {
                        return new RegExp("^" + u.A_CHARS + "+$").test(this.data)
                    }
                }]), e
            }(a.default);
            e.default = s
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r, o = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                i = n(1),
                a = (r = i) && r.__esModule ? r : {
                    default: r
                },
                u = n(0);
            var s = function(t) {
                function e(t, n) {
                    return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e),
                        function(t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, u.B_START_CHAR + t, n))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), o(e, [{
                    key: "valid",
                    value: function() {
                        return new RegExp("^" + u.B_CHARS + "+$").test(this.data)
                    }
                }]), e
            }(a.default);
            e.default = s
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r, o = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                i = n(1),
                a = (r = i) && r.__esModule ? r : {
                    default: r
                },
                u = n(0);
            var s = function(t) {
                function e(t, n) {
                    return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e),
                        function(t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, u.C_START_CHAR + t, n))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), o(e, [{
                    key: "valid",
                    value: function() {
                        return new RegExp("^" + u.C_CHARS + "+$").test(this.data)
                    }
                }]), e
            }(a.default);
            e.default = s
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e = [];
                return function t(n) {
                    if (Array.isArray(n))
                        for (var r = 0; r < n.length; r++) t(n[r]);
                    else n.text = n.text || "", n.data = n.data || "", e.push(n)
                }(t), e
            }
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                return t.marginTop = t.marginTop || t.margin, t.marginBottom = t.marginBottom || t.margin, t.marginRight = t.marginRight || t.margin, t.marginLeft = t.marginLeft || t.margin, t
            }
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                o = u(n(19)),
                i = u(n(20)),
                a = n(6);

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function s(t) {
                if ("string" == typeof t) return function(t) {
                    var e = document.querySelectorAll(t);
                    if (0 === e.length) return;
                    for (var n = [], r = 0; r < e.length; r++) n.push(s(e[r]));
                    return n
                }(t);
                if (Array.isArray(t)) {
                    for (var e = [], n = 0; n < t.length; n++) e.push(s(t[n]));
                    return e
                }
                if ("undefined" != typeof HTMLCanvasElement && t instanceof HTMLImageElement) return u = t, {
                    element: f = document.createElement("canvas"),
                    options: (0, o.default)(u),
                    renderer: i.default.CanvasRenderer,
                    afterRender: function() {
                        u.setAttribute("src", f.toDataURL())
                    }
                };
                if (t && t.nodeName && "svg" === t.nodeName.toLowerCase() || "undefined" != typeof SVGElement && t instanceof SVGElement) return {
                    element: t,
                    options: (0, o.default)(t),
                    renderer: i.default.SVGRenderer
                };
                if ("undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement) return {
                    element: t,
                    options: (0, o.default)(t),
                    renderer: i.default.CanvasRenderer
                };
                if (t && t.getContext) return {
                    element: t,
                    renderer: i.default.CanvasRenderer
                };
                if (t && "object" === (void 0 === t ? "undefined" : r(t)) && !t.nodeName) return {
                    element: t,
                    renderer: i.default.ObjectRenderer
                };
                throw new a.InvalidElementException;
                var u, f
            }
            e.default = s
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = i(n(3)),
                o = i(n(4));

            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.default = function(t) {
                var e = {};
                for (var n in o.default) o.default.hasOwnProperty(n) && (t.hasAttribute("jsbarcode-" + n.toLowerCase()) && (e[n] = t.getAttribute("jsbarcode-" + n.toLowerCase())), t.hasAttribute("data-" + n.toLowerCase()) && (e[n] = t.getAttribute("data-" + n.toLowerCase())));
                return e.value = t.getAttribute("jsbarcode-value") || t.getAttribute("data-value"), e = (0, r.default)(e)
            }
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = a(n(21)),
                o = a(n(22)),
                i = a(n(23));

            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.default = {
                CanvasRenderer: r.default,
                SVGRenderer: o.default,
                ObjectRenderer: i.default
            }
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r, o = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                i = n(2),
                a = (r = i) && r.__esModule ? r : {
                    default: r
                },
                u = n(5);
            var s = function() {
                function t(e, n, r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.canvas = e, this.encodings = n, this.options = r
                }
                return o(t, [{
                    key: "render",
                    value: function() {
                        if (!this.canvas.getContext) throw new Error("The browser does not support canvas.");
                        this.prepareCanvas();
                        for (var t = 0; t < this.encodings.length; t++) {
                            var e = (0, a.default)(this.options, this.encodings[t].options);
                            this.drawCanvasBarcode(e, this.encodings[t]), this.drawCanvasText(e, this.encodings[t]), this.moveCanvasDrawing(this.encodings[t])
                        }
                        this.restoreCanvas()
                    }
                }, {
                    key: "prepareCanvas",
                    value: function() {
                        var t = this.canvas.getContext("2d");
                        t.save(), (0, u.calculateEncodingAttributes)(this.encodings, this.options, t);
                        var e = (0, u.getTotalWidthOfEncodings)(this.encodings),
                            n = (0, u.getMaximumHeightOfEncodings)(this.encodings);
                        this.canvas.width = e + this.options.marginLeft + this.options.marginRight, this.canvas.height = n, t.clearRect(0, 0, this.canvas.width, this.canvas.height), this.options.background && (t.fillStyle = this.options.background, t.fillRect(0, 0, this.canvas.width, this.canvas.height)), t.translate(this.options.marginLeft, 0)
                    }
                }, {
                    key: "drawCanvasBarcode",
                    value: function(t, e) {
                        var n, r = this.canvas.getContext("2d"),
                            o = e.data;
                        n = "top" == t.textPosition ? t.marginTop + t.fontSize + t.textMargin : t.marginTop, r.fillStyle = t.lineColor;
                        for (var i = 0; i < o.length; i++) {
                            var a = i * t.width + e.barcodePadding;
                            "1" === o[i] ? r.fillRect(a, n, t.width, t.height) : o[i] && r.fillRect(a, n, t.width, t.height * o[i])
                        }
                    }
                }, {
                    key: "drawCanvasText",
                    value: function(t, e) {
                        var n, r, o = this.canvas.getContext("2d"),
                            i = t.fontOptions + " " + t.fontSize + "px " + t.font;
                        t.displayValue && (r = "top" == t.textPosition ? t.marginTop + t.fontSize - t.textMargin : t.height + t.textMargin + t.marginTop + t.fontSize, o.font = i, "left" == t.textAlign || e.barcodePadding > 0 ? (n = 0, o.textAlign = "left") : "right" == t.textAlign ? (n = e.width - 1, o.textAlign = "right") : (n = e.width / 2, o.textAlign = "center"), o.fillText(e.text, n, r))
                    }
                }, {
                    key: "moveCanvasDrawing",
                    value: function(t) {
                        this.canvas.getContext("2d").translate(t.width, 0)
                    }
                }, {
                    key: "restoreCanvas",
                    value: function() {
                        this.canvas.getContext("2d").restore()
                    }
                }]), t
            }();
            e.default = s
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r, o = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                i = n(2),
                a = (r = i) && r.__esModule ? r : {
                    default: r
                },
                u = n(5);
            var s = "http://www.w3.org/2000/svg",
                f = function() {
                    function t(e, n, r) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.svg = e, this.encodings = n, this.options = r, this.document = r.xmlDocument || document
                    }
                    return o(t, [{
                        key: "render",
                        value: function() {
                            var t = this.options.marginLeft;
                            this.prepareSVG();
                            for (var e = 0; e < this.encodings.length; e++) {
                                var n = this.encodings[e],
                                    r = (0, a.default)(this.options, n.options),
                                    o = this.createGroup(t, r.marginTop, this.svg);
                                this.setGroupOptions(o, r), this.drawSvgBarcode(o, r, n), this.drawSVGText(o, r, n), t += n.width
                            }
                        }
                    }, {
                        key: "prepareSVG",
                        value: function() {
                            for (; this.svg.firstChild;) this.svg.removeChild(this.svg.firstChild);
                            (0, u.calculateEncodingAttributes)(this.encodings, this.options);
                            var t = (0, u.getTotalWidthOfEncodings)(this.encodings),
                                e = (0, u.getMaximumHeightOfEncodings)(this.encodings),
                                n = t + this.options.marginLeft + this.options.marginRight;
                            this.setSvgAttributes(n, e), this.options.background && this.drawRect(0, 0, n, e, this.svg).setAttribute("style", "fill:" + this.options.background + ";")
                        }
                    }, {
                        key: "drawSvgBarcode",
                        value: function(t, e, n) {
                            var r, o = n.data;
                            r = "top" == e.textPosition ? e.fontSize + e.textMargin : 0;
                            for (var i = 0, a = 0, u = 0; u < o.length; u++) a = u * e.width + n.barcodePadding, "1" === o[u] ? i++ : i > 0 && (this.drawRect(a - e.width * i, r, e.width * i, e.height, t), i = 0);
                            i > 0 && this.drawRect(a - e.width * (i - 1), r, e.width * i, e.height, t)
                        }
                    }, {
                        key: "drawSVGText",
                        value: function(t, e, n) {
                            var r, o, i = this.document.createElementNS(s, "text");
                            e.displayValue && (i.setAttribute("style", "font:" + e.fontOptions + " " + e.fontSize + "px " + e.font), o = "top" == e.textPosition ? e.fontSize - e.textMargin : e.height + e.textMargin + e.fontSize, "left" == e.textAlign || n.barcodePadding > 0 ? (r = 0, i.setAttribute("text-anchor", "start")) : "right" == e.textAlign ? (r = n.width - 1, i.setAttribute("text-anchor", "end")) : (r = n.width / 2, i.setAttribute("text-anchor", "middle")), i.setAttribute("x", r), i.setAttribute("y", o), i.appendChild(this.document.createTextNode(n.text)), t.appendChild(i))
                        }
                    }, {
                        key: "setSvgAttributes",
                        value: function(t, e) {
                            var n = this.svg;
                            n.setAttribute("width", t + "px"), n.setAttribute("height", e + "px"), n.setAttribute("x", "0px"), n.setAttribute("y", "0px"), n.setAttribute("viewBox", "0 0 " + t + " " + e), n.setAttribute("xmlns", s), n.setAttribute("version", "1.1"), n.setAttribute("style", "transform: translate(0,0)")
                        }
                    }, {
                        key: "createGroup",
                        value: function(t, e, n) {
                            var r = this.document.createElementNS(s, "g");
                            return r.setAttribute("transform", "translate(" + t + ", " + e + ")"), n.appendChild(r), r
                        }
                    }, {
                        key: "setGroupOptions",
                        value: function(t, e) {
                            t.setAttribute("style", "fill:" + e.lineColor + ";")
                        }
                    }, {
                        key: "drawRect",
                        value: function(t, e, n, r, o) {
                            var i = this.document.createElementNS(s, "rect");
                            return i.setAttribute("x", t), i.setAttribute("y", e), i.setAttribute("width", n), i.setAttribute("height", r), o.appendChild(i), i
                        }
                    }]), t
                }();
            e.default = f
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }();
            var o = function() {
                function t(e, n, r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.object = e, this.encodings = n, this.options = r
                }
                return r(t, [{
                    key: "render",
                    value: function() {
                        this.object.encodings = this.encodings
                    }
                }]), t
            }();
            e.default = o
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }();
            var o = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.api = e
                }
                return r(t, [{
                    key: "handleCatch",
                    value: function(t) {
                        if ("InvalidInputException" !== t.name) throw t;
                        if (this.api._options.valid === this.api._defaults.valid) throw t.message;
                        this.api._options.valid(!1), this.api.render = function() {}
                    }
                }, {
                    key: "wrapBarcodeCall",
                    value: function(t) {
                        try {
                            var e = t.apply(void 0, arguments);
                            return this.api._options.valid(!0), e
                        } catch (t) {
                            return this.handleCatch(t), this.api
                        }
                    }
                }]), t
            }();
            e.default = o
        }]);
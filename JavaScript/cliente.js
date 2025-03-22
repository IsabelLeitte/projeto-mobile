"use strict";
var empresa;
(function (empresa) {
    class cliente extends empresa.pessoa {
        constructor(codigo) {
            super();
            this._saldo = 0;
            this._codigo = codigo;
        }
        get codigo() {
            return this._codigo;
        }
        get saldo() {
            return this._saldo;
        }
        deposita(valor) {
            this._saldo += valor;
        }
        comprar(valorCompra) {
            if (this._saldo >= valorCompra) {
                this._saldo = this._saldo - valorCompra;
                return true;
            }
            else {
                return false;
            }
        }
    }
    empresa.cliente = cliente;
})(empresa || (empresa = {}));

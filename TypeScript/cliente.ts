namespace empresa{
    export class Cliente extends Pessoa{
    
        private _codigo:number;
        private _saldo:number;
        

        get codigo(){
            return this. _codigo;
        }
        set codigo(codigo:number){
            this. _codigo = codigo;
        }

        get saldo(){
            return this. _saldo;
        }
        set saldo(saldo:number){
            this. _saldo = saldo;
        }
    }
}
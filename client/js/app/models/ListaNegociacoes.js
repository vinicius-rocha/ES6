class ListaNegociacoes{

    constructor(contexto,armadilha){
        this._negociacoes = [];
        this._armadilha = armadilha;
        this._contexto = contexto;
    }

    get negociacoes(){
        return [].concat(this._negociacoes);
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
        Reflect.apply(this._armadilha, this._contexto, [this]);
    }
    
    esvazia(){
        this._negociacoes = [];
        Reflect.apply(this._armadilha, this._contexto, [this]);
    }
}this._listaNegociacoes
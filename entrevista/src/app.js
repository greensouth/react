import {test,testRest,closure,bindSample,retrieveAPI,hijo,testProm} from "./modules.js";


test();
testRest("a","b","c","d");
const miMsg = closure();
miMsg();



class miClass{
    constructor(muestra){
        this.holi = "";
        this.muestra = muestra;

        //this.miMetodo = this.miMetodo.bind(muestra)
    }

    miMetodo(){
        console.log(`Hijo:`,this);
    }

}

const padre = new bindSample();
const hi = new hijo();
hi.miMetodo()
//clase.miMetodo.call(miClase);

//const weather = retrieveAPI((result) => console.log(result));
//retrieveAPI().then((result) => console.log(result));
testProm().then((result) => console.log(result)).catch((e) => console.log("error:",e));
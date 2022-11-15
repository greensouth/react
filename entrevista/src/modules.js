export function test(){
    console.log("test");
}

export function testRest(param1,...meow){
    console.log(param1,meow);
    meow.forEach((item) => {
        console.log(item);
    });
}


export function closure(){
    const miParam = "Hi there!";
    return () => console.log(miParam);
}

export class bindSample{
    constructor(){
        this.number = 33;
        this.helper = "cuchiCuchi";
    }

    muestraScope(){
        console.log(this);
    }

    miMetodo(){
        console.log(`Padre:`,this);
    }
}

export class hijo extends bindSample{
    constructor(){
        super();
        console.log(this.number,this.helper)
    }

    miMetodo(){
        super.miMetodo();
        console.log("mi polluela")
    }
}

export async function retrieveAPI(cb = () => {}) {
    try{
        const weather = await fetch('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json');
        cb(weather);
        return weather;
    }catch{
        console.log('unable to deliver content');
        return null;
    }
}

export async function testProm(){
    try{
        const weather = await fetch('http://www.7timerz.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json');
        return weather;
    }catch(e){
        await Promise.reject("Caca");
        return  null;
    }

}
export default test;
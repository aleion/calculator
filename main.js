function turning(){
    
var swi = document.getElementById('turningOn');
var swiClass = swi.className;
var txt = document.getElementById('txt');
var screenTxt = document.getElementById('entry');
var led = document.getElementById('smLedBord');


if(swiClass === 'off') {
    swi.classList.remove('off');
    swi.classList.add('onn');
    screenTxt.classList.remove('entryOff');
    screenTxt.classList.add('entryOn')
    led.classList.remove('ledOff');
    led.classList.add('ledOn');

}else if (swiClass === 'onn'){
    swi.classList.remove('onn');
    swi.classList.add('off');
    screenTxt.classList.remove('entryOn');
    screenTxt.classList.add('entryOff')
    led.classList.remove('ledOn');
    led.classList.add('ledOff');
}



    
};
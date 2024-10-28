// lightining bulb 

const bulb = document.querySelector(".bulb");
const switchh = document.querySelector(".switch");

let condition = false;

switchh.addEventListener('click',function(){
    if(condition === false){
        bulb.style.backgroundColor = 'yellow';
        condition = true;
        switchh.innerHTML = 'off'
    }
    else if(condition === true){
        bulb.style.backgroundColor = 'white'
        condition = false;
        switchh.innerHTML = 'on'
    }

});
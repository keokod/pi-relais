let RL = false;

var isChecked=document.getElementById("RL");
console.log(isChecked);
isChecked.addEventListener('click',function(){
    changeRL(RL)
    RL = !RL;
    console.log(RL);
})

function changeRL(RL){
    RL ? reqOnOff(1,1) : reqOnOff(1,0); //attention le relais travail = gpio à 0
}

function reqOnOff(RL,position){
    var url = "http://192.168.1.15:8000";
    let xhr = new XMLHttpRequest();

    let json = JSON.stringify({
      numeroRL: "A",
      etat: position
    });
    
    xhr.open("POST", url)
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
}
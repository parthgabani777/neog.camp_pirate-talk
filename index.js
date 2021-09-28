const button = document.querySelector('#btn');
const plain = document.querySelector('#plain');
const pirate = document.querySelector('#pirate');

let url = 'https://api.funtranslations.com/translate/pirate.json';

function clickEventHandler(){
      let txt = plain.value;
      
      url = url + "?text=" + encodeURI(txt);
      console.log(url);
      fetch(url).then(res=>res.json())
      .then((data)=>{
            pirate.value = data["contents"]["translated"];
      })
      .catch((e)=>console.log("Error occured"+ e))
}
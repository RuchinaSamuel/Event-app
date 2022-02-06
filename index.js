const eventCard= document.getElementById('card');
const plannerName= document.getElementById('plannerName');
const eventName= document.getElementById('eventName');
const eventNumber= document.getElementById('eventNumber');
const eventMail= document.getElementById('eventMail');
const eventLocation= document.getElementById('eventLocation');
const countryName= document.getElementById('countryName');
const eventDate= document.getElementById('eventDate');
const eventTime= document.getElementById('eventTime');
const eventGuest = document.getElementById('eventGuest');
const eventPhoto= document.getElementById('photo')

const ul= document.createElement('ul')
const canvas=document.createElement('canvas')
const ctx =canvas.getContext('2d')


document.addEventListener('submit', function(event){
    event.preventDefault()

    const eventData= {
        plannerName:plannerName.value,
        eventName: eventName.value,
        eventNumber:eventNumber.value,
        eventMail:eventMail.value,
        eventLocation:eventLocation.value,
        countryName: countryName.value,
        eventDate:eventDate.value,
        eventTime:eventTime.value,
        guest: eventGuest.value,
       

    }
    
     console.log('eventData',eventData)

     
     eventCard.appendChild(ul)
     for (let item in eventData){
     if(item==="photo"){
         console.log('yes')
     initImageUpload()
     
     }else{const li = document.createElement('li')
     li.innerHTML=`${item}: ${eventData[item]}`
         ul.appendChild(li)
         }
      }
 


})




window.addEventListener('DOMContentLoaded', initImageUpload);


function initImageUpload(){
    photo.addEventListener('change', handleManualUpload);
    function handleManualUpload(ev){
        const file =ev.target.files[0];
        handleFile(file)
        console.log(file);
    }
}

function handleFile(file){
const reader =new FileReader()
reader.onloadend = function(event){
    const imageStore = new Image()
    imageStore.onload= function(ev){
        canvas.height = 200;
        canvas.width= 200;

        const height= 200;
        const width = 200;

        ctx.drawImage(ev.target, 0,0, width, height);
        ul.appendChild(canvas);
    }
    console.log(event.target.result)
    imageStore.src= event.target.result;
}
reader.readAsDataURL(file);
}



eventCard.style.width='700px';

eventCard.style.backgroundColor='purple';
'purple'
eventCard.style.borderRadius='20px';
eventCard.style.color='white'
eventCard.style.alignContent='center'

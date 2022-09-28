let isPlantWatered = false;

$(document).ready(function () {
    $('.add').click(function () {
        isPlantWatered = true;
        $(".watering-can").css("visibility", "visible");
        setTimeout(function(){
            const plantImage = $('.plant').attr('src');
            if (plantImage === "images/happy_plant_sprout.svg" || plantImage === "images/neutral_plant_sprout.svg" || plantImage === "images/sad_plant_sprout.svg") {
                $('.plant').attr("src", "images/happy_plant_teen.svg");
                console.log("1");
            } else if (plantImage === "images/happy_plant_teen.svg" || plantImage === "images/neutral_plant_teen.svg" || plantImage === "images/sad_plant_teen.svg") {
                $('.plant').attr("src", "images/happy_plant_adult.svg");
                console.log("2");
            } else {
                $('.plant').attr("src", "images/happy_plant_adult.svg");
                console.log("3");
            }
            $(".watering-can").css("visibility", "hidden");
        }, 1500); 
    })
})


function checkIfPlantIsWatered() {
    const plantImage = $('.plant').attr('src');
    if (isPlantWatered === false) {
        if (plantImage === "images/happy_plant_sprout.svg") {
            $('.plant').attr("src", "images/neutral_plant_sprout.svg");
        } else if (plantImage === "images/happy_plant_teen.svg") {
            $('.plant').attr("src", "images/neutral_plant_teen.svg");
        } else if (plantImage === "images/happy_plant_adult.svg") {
            $('.plant').attr("src", "images/neutral_plant_adult.svg");
        } else if (plantImage === "images/neutral_plant_sprout.svg") {
            $('.plant').attr("src", "images/sad_plant_sprout.svg");
        } else if (plantImage === "images/neutral_plant_teen.svg") {
            $('.plant').attr("src", "images/sad_plant_teen.svg");
        } else if (plantImage === "images/neutral_plant_adult.svg") {
            $('.plant').attr("src", "images/sad_plant_adult.svg");
        }
    }
    isPlantWatered = false;
}

function resetPlant() {
    $('.plant').attr("src", "images/happy_plant_sprout.svg");
    isPlantWatered = false;
}

setInterval(checkIfPlantIsWatered, 5000);
setInterval(reset, 600000);


//Button selectors
const addButton = document.querySelector(".add");
    resetButton = document.querySelector(".reset")
//Element for update
const currentCupsEl = document.querySelector('.current-cups'),
    currentLitersEl = document.querySelector('.current-liters')
const progress = document.querySelector('.percentage')
const remainedLiters = document.getElementById('remained-liters')
const wellDone = document.getElementById('wellDone')
const remained = document.getElementById('remained')

const MAX_CUPS = 8,
      MIN_CUPS = 0;

let cups = 0,
    liters =0,
    percentage =0;
    remains=2;

updateLayout();
addButton.addEventListener("click",addCup)
resetButton.addEventListener("click",reset)


function addCup(){
    cups++;
    liters+=250;
    percentage = (cups/MAX_CUPS) *100;
    
    //Update Layout
    updateLayout();
   
    if(cups === MAX_CUPS ){
        addButton.disabled=true;
    }else{
        resetButton.disabled = false;
    }
    

}

function reset() {
    resetCup();
    resetPlant();
}

function resetCup(){
    cups =0;
    liters =0;
    percentage = 0;
      //Update Layout
      updateLayout();
     
      addButton.disabled = false;
      
      if(cups === MIN_CUPS){
        resetButton.disabled = true;
        }else{
        addButton.disabled=false;
      }
}


function updateLayout(){
  
    currentCupsEl.textContent = `${cups}/8`;
    currentLitersEl.textContent = `${liters/1000}l/2l`;
    progress.innerText = `${percentage}%`;
    progress.style.height= `${percentage}%`;
    remainedLiters.innerText=`${2-(250* cups / 1000)}L`
  
    if(cups === MIN_CUPS){
        progress.style.visibility = 'hidden'
        progress.style.height = 0
        wellDone.style.visibility = 'hidden'

    }else{
        progress.style.visibility = 'visible'
    }

    if(cups === MAX_CUPS){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
        wellDone.style.visibility = 'visible'

    }else{
        remained.style.visibility = 'visible'
        wellDone.style.visibility = 'hidden'
    }
}

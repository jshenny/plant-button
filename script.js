
//Button selectors
const addButton = document.querySelector(".add");
        removeButton = document.querySelector(".remove")
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
removeButton.addEventListener("click",removeCup)

function addCup(){
    cups++;
    liters+=250;
    percentage = (cups/MAX_CUPS) *100;
    
    //Update Layout
    updateLayout();
   
    if(cups === MAX_CUPS ){
        addButton.disabled=true;
    }else{
        removeButton.disabled = false;
    }
    

}

function removeCup(){
    cups--;
    liters-=250;
    percentage = (cups/MAX_CUPS) *100;

      //Update Layout
      updateLayout();

      if(cups === MIN_CUPS){
        removeButton.disabled = true;
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
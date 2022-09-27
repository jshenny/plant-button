let isPlantWatered = false;

$(document).ready(function () {
    $('.water-button').click(function () {
        isPlantWatered = true;
        $(".watering-can").css("display", "block");
        setTimeout(function(){
            const plantImage = $('.plant').attr('src');
            if (plantImage === "images/happy_plant_sprout.svg" || plantImage === "images/neutral_plant_sprout.svg" || plantImage === "images/sad_plant_sprout.svg") {
                $('.plant').attr("src", "images/happy_plant_teen.svg");
            } else if (plantImage === "images/happy_plant_teen.svg" || plantImage === "images/neutral_plant_teen.svg" || plantImage === "images/sad_plant_teen.svg") {
                $('.plant').attr("src", "images/happy_plant_adult.svg");
            } else {
                $('.plant').attr("src", "images/happy_plant_adult.svg");
            }
            $(".watering-can").css("display", "none");
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
setInterval(resetPlant, 60000);

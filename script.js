$(document).ready(function() {
    $('.water-button').click(function() {
      if ($('.plant').attr('src') == "images/plant_sprout.svg") {
        $('.plant').attr("src", "images/plant_teen.svg"); 
      }
      else if ($('.plant').attr('src') == "images/plant_teen.svg") {
        $('.plant').attr("src", "images/plant_adult.svg"); 
      }
    })
  })

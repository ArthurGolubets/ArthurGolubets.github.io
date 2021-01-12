let max = document.getElementsByClassName('max');
let min = document.getElementsByClassName('min');

$( function() {

  var slider = document.getElementById('slider');
  
  noUiSlider.create(slider, {
        start: [0, 11180],
        connect: true,
        range: {
            'min': 0,
            'max': 12000
        }
  });

  let vals = slider.noUiSlider.get();
  max[0].value = parseFloat(vals[1]);
  min[0].value = parseFloat(vals[0]);
   
  slider.noUiSlider.on('end', function(value){
    max[0].value = parseInt(value[1]);
    min[0].value = parseInt(value[0]);
  });

  max[0].addEventListener('change', function(){
    slider.noUiSlider.set([min[0].value,max[0].value])
  })

  min[0].addEventListener('change', function(){
    slider.noUiSlider.set([min[0].value,max[0].value])
  })
  });
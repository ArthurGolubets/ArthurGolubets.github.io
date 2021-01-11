let slider = document.getElementById("range");
let max = document.getElementById('max');
let min = document.getElementById('min');

$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 12000,
      values: [ 0, 12000 ],
      slide: function( event, ui ) {
        max.value = ui.values[ 1 ];
        min.value = ui.values[ 0 ];
      }
    });

    max.value = $( "#slider-range" ).slider( "values", 1 );
    min.value = $( "#slider-range" ).slider( "values", 0 );
  } );


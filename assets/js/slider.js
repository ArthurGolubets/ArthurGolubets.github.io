let max = document.getElementsByClassName('max');
let min = document.getElementsByClassName('min');

$( function() {
    $( ".Range__slider" ).slider({
      range: true,
      min: 0,
      max: 12000,
      values: [ 0, 12000 ],
      slide: function( event, ui ) {
        for(let i=0;i<max.length;i++) max[i].value = ui.values[ 1 ];
        for(let i=0;i<min.length;i++) min[i].value = ui.values[ 0 ];
      }
    });
   
    for(let i=0;i<min.length;i++) min[i].value = $( ".Range__slider" ).slider( "values", 0 );
    for(let i=0;i<max.length;i++) max[i].value = $( ".Range__slider" ).slider( "values", 1 );
   
 
  });
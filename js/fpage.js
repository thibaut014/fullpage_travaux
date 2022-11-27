$(document).ready(function(){




      new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        anchors:['section1', 'section2', 'section3', 'section4'],
        menu: '#myMenu',
        lockAnchors: false,
        slidesNavigation: true,



        onLeave: function(origin, destination, direction, trigger){
          var leavingSection = this;


          //after leaving section 1
          if
          (origin.anchor == 'section1' && direction =='down'){
            //alert("Going to section 3!");
            console.log('direction section 2 venant de section 1 (down)');
          }


  
          //after leaving section 2
          if
            (origin.anchor == 'section2' && direction =='down'){
              //alert("Going to section 3!");
              console.log('direction section 3 venant de section 2 (down)');
            }
  
          else if
            (origin.anchor == 'section2' && direction == 'up'){
              //alert("Going to section 1!");
              console.log('direction section 1 venant de section 2 (up)');
            }


            //after leaving section 3
          if
          (origin.anchor == 'section3' && direction =='down'){
            //alert("Going to section 3!");
            console.log('direction section 4 venant de section 3 (down)');
            console.log('derniere page');
          }

        else if
          (origin.anchor == 'section3' && direction == 'up'){
            //alert("Going to section 1!");
            console.log('direction section 2 venant de section 3 (up)');
          }


           //after leaving section 4
           if
           (origin.anchor == 'section4' && direction =='up'){
             //alert("Going to section 3!");
             console.log('direction section 3 venant de section 4 (up)');
           };

      }






      });

      $( "#moveTo1" ).click(function() {
        fullpage_api.moveTo('section2', 1);
        //console.log("ok"); 
      });

      $( "#moveTo2" ).click(function() {
        fullpage_api.moveTo('section3', 2);
        console.log("derniere slide"); 
      });

      $( "#silentMoveTo1" ).click(function() {
        fullpage_api.silentMoveTo('section4');
        //console.log("silent1"); 
      });

      $( "#silentMoveTo2" ).click(function() {
        fullpage_api.silentMoveTo('section1');
        //console.log("silent2"); 
      });






      $( "#page4" ).click(function() {
        console.log("derniere page"); 
      });

      
});
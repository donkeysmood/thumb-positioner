document.addEventListener("DOMContentLoaded",function(){
  
  cloneFlowchartToThumb();  

  // HELPER FUNCTIONS
  function cloneFlowchartToThumb() {
    const node = document.getElementsByClassName("js-flowchart");
    let clone = node[0].cloneNode(true);
    
    const postionerNode = document.getElementsByClassName("js-flowchart-positioner");
    postionerNode[0].appendChild(clone);
  }

  document.getElementById('flowchart-positioner').onclick = function clickEvent(e) {
    // e = Mouse click event.
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.

    const node = document.getElementsByClassName("js-flowchart");
    console.log(x*1.7);
    
    document.getElementById('flowchart').scrollLeft += 100;


    console.log("Left? : " + x + " ; Top? : " + y + ".");
  }

});
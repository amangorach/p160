AFRAME.registerComponent("helicopter",{
   init:function(){
    var bg = document.querySelector("#background");
    var helicopter = document.createElement("a-entity");
    helicopter.setAttribute("position",{x:0, y:2, z:3});
    helicopter.setAttribute("visible", true);
    helicopter.setAttribute("scale",{
        width:1, 
        height:1,
        depth:1
    });
    helicopter.setAttribute("material", {
        color:"black",
        src:"./assets/helicopter.png"
    });

    helicopter.addEventListener("click", function(){
        bg.setAttribute("material", {
            src:"./assets/2.jpg",
        });
    });
    bg.appendChild(helicopter);
   },
});
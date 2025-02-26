AFRAME .registerComponent("movement" , {
    init:function(){
     window.addEventListener("keydown",(h)=>{
      researcherRotation=this.el.getAttribute('rotation');
      if(h.key==="ArrowRight"){
        this.el.setAttribute('rotation',{
            y:90,

        })
      }
      if(h.key==="ArrowDown"){
        this.el.setAttribute('rotation',{
            y:0,

        })
      }
      if(h.key==="ArrowLeft"){
        this.el.setAttribute('rotation',{
            y:270,

        })
      }
      if(h.key==="ArrowUp"){
        this.el.setAttribute('rotation',{
            y:180,

        })
      }
     })   
    },
    tick:function(){
        camera=document.getElementById('look');
        cameraPos=camera.getAttribute('position');
        this.el.setAttribute('position',{
            x:cameraPos.x-0,
            y:cameraPos.y-9,
            z:cameraPos.z-9,

        })


    }
})



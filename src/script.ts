
let slider = <HTMLElement>document.querySelector(".landing"),
sliderImage:string[]=["../image/landing2.jpg","../image/landing.jpg","../image/landing3.jpg"],
btn:Element[]=Array.from(document.querySelectorAll(".landing ul li") as NodeListOf<Element>),
next =<HTMLElement>document.querySelector(".landing i:last-of-type"),
back =<HTMLElement>document.querySelector(".landing i:first-of-type"),
liArray:Element[] = Array.from(document.querySelectorAll(".portifolio .contener ul li") as NodeListOf<Element>),
cardArray:Element[] = Array.from(document.querySelectorAll(".portifolio .galare .card") as NodeListOf<Element>);
slider.style.cssText=`background-image: url(../image/landing2.jpg)`
let place:number=0;
function moveNext():void {
  if (place < sliderImage.length-1) {
    slider.style.cssText=`background-image: url(${sliderImage[++place]})`;
  }
  btn.forEach((e:Element):void=>{
    e.classList.remove("active");
  })
  btn[place].classList.add("active");
}
function moveBack():void {
  if (place > 0 ) {
    slider.style.cssText=`background-image: url(${sliderImage[--place]})`;
  }
  btn.forEach((e:Element):void=>{
    e.classList.remove("active");
  })
  btn[place].classList.add("active");
}
next.addEventListener("click",moveNext);
back.addEventListener("click",moveBack);
btn.forEach((e:Element,index:number)=>{
  e.addEventListener("click",()=>{
    btn.forEach((e:Element)=>{
      e.classList.remove("active")
    })
    slider.style.cssText=`background-image: url(${sliderImage[index]})`;
    e.classList.add("active")
  })
})
liArray.forEach((e:Element)=>{
  e.addEventListener("click",(e:any)=>{
    liArray.forEach((e:Element):void=>{
      e.classList.remove("active")
    });
    cardArray.forEach((e:any)=>{
      e.style.display="none";
    });
    let targetCard=Array.from(document.querySelectorAll(e.target.dataset.type) as NodeListOf<Element>);
    targetCard.forEach((e:any)=>{
      e.style.display="block";
    })
    e.target.classList.add("active");
  })
})

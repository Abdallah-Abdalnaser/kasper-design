let liArray:Element[] = Array.from(document.querySelectorAll(".portifolio .contener ul li") as NodeListOf<Element>);
let cardArray:Element[] = Array.from(document.querySelectorAll(".portifolio .galare .card") as NodeListOf<Element>);

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
    e.target.classList.add("active")
  })
})
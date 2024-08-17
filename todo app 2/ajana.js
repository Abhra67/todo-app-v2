let btn=document.querySelector("button");
let unl=document.querySelector("ul");
let input=document.querySelector("input");

btn.addEventListener("click" ,function(){
    console.log(input.value);
    let item=document.createElement("li");
    item.innerText=input.value;
    unl.appendChild(item);
    input.value="";

    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
})
unl.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});
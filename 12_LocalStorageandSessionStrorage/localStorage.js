const inp_feild = document.getElementById("inp")
const mybtn= document.getElementById('mybb')
const del_btn= document.getElementById("delete")



//this function will popUp the text inside the text Input
const popUp= ()=>{
    sessionStorage.setItem("key1",inp_feild.value)
}


mybtn.addEventListener('click', popUp)
del_btn.addEventListener('click', ()=>{
    console.log(sessionStorage.length);

})

if(sessionStorage.getItem("key1")){
    alert(sessionStorage.getItem("key1"));
}
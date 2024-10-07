let name=document.querySelector('.name')
let caption=document.querySelector('.caption')
let button=document.querySelector('.button')
let button2=document.querySelector('.button2')
let jhakanaka=document.querySelector('.jhakanaka')
let error1=document.querySelector('.error1')
let error2=document.querySelector('.error2')



let arr=[]

button.addEventListener('click',()=>{

if (!name.value) {
    error1.innerHTML='Please Enter Your Name'
   
}
else if(!caption.value) {
    error2.innerHTML='Enter Something'
}
else{
    arr.push({
        name:name.value,
        caption:caption.value
    })

    name.value=''
    caption.value=''
    error1.innerHTML=''
    error2.innerHTML=''

    jhakanaka.innerHTML=''
    display()
}
})

function display(){
    arr.map(item=>{
        // console.log(item.name);
        // console.log(item.caption);
        jhakanaka.innerHTML+=`<div class="card">
        <div class="card-content">
          <h3 class="card-title">${item.name}</h3>
        <p class="card-description">${item.caption}</p>
          <button  class="edit">EDIT</button>
          <button  class="deleted">DELETE</button>
        </div>
      </div>`
    })
    let deletebtn=document.querySelectorAll('.deleted')
    let convertdltbutton=Array.from(deletebtn)
    convertdltbutton.map((item,index)=>{
        item.addEventListener('click',()=>{

            arr.splice(index,1)
        
            jhakanaka.innerHTML=''
            display()
        })
    })
   
    let editbutton=document.querySelectorAll('.edit')
    let converteditbutton=Array.from(editbutton)
    converteditbutton.map((item,index)=>{
       item.addEventListener('click',()=>{
        
          name.value=arr.splice(index,1,arr[name.value])
          caption.value=arr.splice(index,1,'arr[name.value]')

           button2.style.display='inline-block'
           button.style.display='none'

       })
    })

}
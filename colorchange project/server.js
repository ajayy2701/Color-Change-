const div=document.querySelectorAll('div')
const body=document.querySelector('body')


div.forEach((div)=>{
     div.addEventListener('click',(e)=>{

     console.log(e)
     console.log(e.target.id)
     if(e.target.id==="div1"){
        body.style. backgroundColor="red"
     }
     if(e.target.id==="div2"){
        body.style. backgroundColor="green"
     }
     if(e.target.id==="div3"){
        body.style. backgroundColor="blue"
     }
     if(e.target.id==="div4"){
        body.style. backgroundColor="violet"
     }
     })
})
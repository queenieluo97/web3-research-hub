async function loadProjects(){

let res=await fetch("projects.json")

let data=await res.json()

let container=document.getElementById("projects")

data.forEach(p=>{

let div=document.createElement("div")

div.innerHTML=

"<b>"+p.name+"</b><br>"+
"Category: "+p.category+"<br>"+
"Funding: "+p.funding+"<br>"+
"Token: "+p.token

container.appendChild(div)

})

}

loadProjects()

async function searchProject(){

let keyword=document.getElementById("search").value

let res=await fetch("projects.json")

let data=await res.json()

let result=data.filter(p=>p.name.toLowerCase().includes(keyword.toLowerCase()))

let container=document.getElementById("projects")

container.innerHTML=""

result.forEach(p=>{

let div=document.createElement("div")

div.innerHTML=p.name+" - "+p.category

container.appendChild(div)

})

}

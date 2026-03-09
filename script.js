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

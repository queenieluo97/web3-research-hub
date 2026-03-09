async function loadPrices(){

let url="https://api.coingecko.com/api/v3/simple/price?ids=arbitrum,ethereum&vs_currencies=usd"

let res=await fetch(url)

let data=await res.json()

document.getElementById("price").innerHTML=

"ARB: $"+data.arbitrum.usd+
"<br>ETH: $"+data.ethereum.usd

}

loadPrices()

async function airdropProjects(){

let res=await fetch("projects.json")

let data=await res.json()

let container=document.getElementById("airdrops")

data.forEach(p=>{

if(p.airdrop=="Potential"){

let div=document.createElement("div")

div.innerHTML=p.name+" may have future airdrop"

container.appendChild(div)

}

})

}

airdropProjects()

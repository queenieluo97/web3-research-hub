async function loadPrices(){

let url="https://api.coingecko.com/api/v3/simple/price?ids=arbitrum,ethereum&vs_currencies=usd"

let res=await fetch(url)

let data=await res.json()

document.getElementById("price").innerHTML=

"ARB: $"+data.arbitrum.usd+
"<br>ETH: $"+data.ethereum.usd

}

loadPrices()

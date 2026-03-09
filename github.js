async function githubActivity(){

let url="https://api.github.com/repos/OffchainLabs/arbitrum"

let res=await fetch(url)

let data=await res.json()

document.getElementById("github").innerHTML=

"Stars: "+data.stargazers_count+
"<br>Forks: "+data.forks

}

githubActivity()

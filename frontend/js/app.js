document
.getElementById("deployBtn")
.addEventListener("click",()=>{

  alert(
`Infrastructure deployed

AWS ✔
Azure ✔
GCP ✔

Terraform Apply Success`
  );

});

let score=0;

const cloud=
document.getElementById("cloud-game");

cloud.addEventListener("click",()=>{

 score++;

 document
 .getElementById("score")
 .innerText=score;

 cloud.style.transform=
 `rotate(${score*15}deg)`;
});

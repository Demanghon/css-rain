const amount = 150;
const body = document.body;
const dropRadius = parseInt(getComputedStyle(body).getPropertyValue("--drop-radius"), 10);

for(let i=0; i < amount;i++){
    const drop = document.createElement("i");
    const width = Math.random() * dropRadius;
    const posX = Math.random() * window.innerWidth;

    drop.style.width = width + "px";
    drop.style.left = posX + "px";
    drop.style.animationDuration = (0.7 + (Math.random() * 3)) +"s";
    drop.style.animationDelay = (Math.random() * -20) + "s";

    document.body.appendChild(drop);
}
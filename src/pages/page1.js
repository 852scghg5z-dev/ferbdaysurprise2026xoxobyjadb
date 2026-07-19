import { showPage2 } from "./page2";

export function showPage1(app) {

    app.innerHTML = `
        <div class="container">

            <h1 class="title">
                Hello Fa<span class="letter-i">i<span class="heart-button">♥</span></span>thy
            </h1>

            <button class="fake-button">
                Click Here
            </button>

        </div>
    `;

    const fakeButton = document.querySelector(".fake-button");
    const heartButton = document.querySelector(".heart-button");

    let clicks = 0;

    fakeButton.addEventListener("click", () => {

        clicks++;

        const maxX = window.innerWidth - fakeButton.offsetWidth;
        const maxY = window.innerHeight - fakeButton.offsetHeight;

        fakeButton.style.position = "fixed";
        fakeButton.style.left = Math.random() * maxX + "px";
        fakeButton.style.top = Math.random() * maxY + "px";

        // Make it slightly cheeky after lots of clicks

        if(clicks === 10){

            fakeButton.textContent = "Still not it 😜";

        }

        if(clicks === 20){

            fakeButton.textContent = "Try somewhere else ❤️";

        }

    });

    heartButton.addEventListener("click", () => {

        expandHeart(app);

    });

}

function expandHeart(app){

    const heart = document.querySelector(".heart-button");

    const rect = heart.getBoundingClientRect();

    const expandingHeart = document.createElement("div");

    expandingHeart.className = "expanding-heart";

    expandingHeart.innerHTML = "♥";

    expandingHeart.style.left =
        rect.left + rect.width / 2 + "px";

    expandingHeart.style.top =
        rect.top + rect.height / 2 + "px";

    document.body.appendChild(expandingHeart);

    requestAnimationFrame(() => {

        expandingHeart.classList.add("grow");

    });

    setTimeout(()=>{

        document.body.style.background="#ff2d6f";

        expandingHeart.remove();

        showPage2(app);

    },1200);

}
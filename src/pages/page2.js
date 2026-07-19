import { showPage3 } from "./page3";

export function showPage2(app) {

    app.innerHTML = `

    <div class="question-page">

        <h1 class="question">
            Who is your favourite person? ;)
        </h1>

        <input
            id="answer"
            class="answer-box"
            type="text"
            placeholder="Type your answer..."
            autocomplete="off"
        >

        <button class="submit-button">
            Submit
        </button>

    </div>

    `;

    const input = document.getElementById("answer");
    const button = document.querySelector(".submit-button");

    input.focus();

    button.addEventListener("click", checkAnswer);
    input.addEventListener("keydown", (e) => {

        if(e.key === "Enter"){
            checkAnswer();
        }

    });

    function checkAnswer(){

        const answer = input.value.trim().toLowerCase();

        if(answer === "jude"){

            celebrate();

        }else{

            input.classList.remove("shake");

            void input.offsetWidth;

            input.classList.add("shake");

            input.value = "";

            input.placeholder = "Nope... try again 😉";

        }

    }

    function celebrate(){

        button.disabled = true;
        input.disabled = true;

        createConfetti();

        setTimeout(()=>{

            showPage3(app);

        },2200);

    }

}

function createConfetti(){

    const colours = [
        "#FFD700",
        "#FF4081",
        "#00C853",
        "#2979FF",
        "#FFFFFF",
        "#FF9800"
    ];

    for(let i=0;i<220;i++){

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random()*100+"vw";

        piece.style.background =
            colours[Math.floor(Math.random()*colours.length)];

        piece.style.animationDuration =
            (2+Math.random()*2)+"s";

        piece.style.transform =
            `rotate(${Math.random()*360}deg)`;

        document.body.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },4500);

    }

}
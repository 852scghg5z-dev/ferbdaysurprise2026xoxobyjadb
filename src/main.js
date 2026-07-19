import "./style.css";

const app = document.querySelector("#app");

showPage1();

function showPage1() {
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

  fakeButton.addEventListener("click", () => {

    const maxX = window.innerWidth - fakeButton.offsetWidth;
    const maxY = window.innerHeight - fakeButton.offsetHeight;

    fakeButton.style.position = "fixed";
    fakeButton.style.left = `${Math.random() * maxX}px`;
    fakeButton.style.top = `${Math.random() * maxY}px`;

  });

  heartButton.addEventListener("click", expandHeart);
}

function expandHeart() {

  const heart = document.querySelector(".heart-button");
  const rect = heart.getBoundingClientRect();

  const expandingHeart = document.createElement("div");

  expandingHeart.className = "expanding-heart";
  expandingHeart.innerHTML = "♥";

  expandingHeart.style.left = `${rect.left + rect.width / 2}px`;
  expandingHeart.style.top = `${rect.top + rect.height / 2}px`;

  document.body.appendChild(expandingHeart);

  requestAnimationFrame(() => {
    expandingHeart.classList.add("grow");
  });

  setTimeout(() => {

    document.body.style.background = "#ff2d6f";

    expandingHeart.remove();

    showQuestionPage();

  }, 1200);

}

function showQuestionPage() {

  app.innerHTML = `

    <div class="question-page">

      <h1 class="question">

        Who is your favourite person? ;)

      </h1>

      <input
        id="answer"
        class="answer-box"
        placeholder="Type your answer..."
      >

      <button class="submit-button">

        Submit

      </button>

    </div>

  `;

  const input = document.getElementById("answer");
  const button = document.querySelector(".submit-button");

  button.addEventListener("click", checkAnswer);
  input.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
      checkAnswer();
    }

  });

}

function checkAnswer() {

  const input = document.getElementById("answer");

  const answer = input.value.trim().toLowerCase();

  if (answer === "jude") {

    celebrate();

  } else {

    input.classList.remove("shake");

    void input.offsetWidth;

    input.classList.add("shake");

  }

}

function celebrate() {

  for (let i = 0; i < 200; i++) {

    const confetti = document.createElement("div");

    confetti.className = "confetti";

    confetti.style.left = Math.random() * window.innerWidth + "px";

    confetti.style.animationDelay = Math.random() * 0.5 + "s";

    confetti.style.background =
      ["#FFD700","#00C853","#2979FF","#FF4081","#FFFFFF"][
        Math.floor(Math.random()*5)
      ];

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(),3000);

  }

  setTimeout(() => {

    document.body.style.background="#bfefff";

    app.innerHTML = `

      <div class="container">

        <h1 class="title">
          Secret Page Unlocked
        </h1>

        <h2 class="catch-text">
          Catch <span id="runaway">me</span> for your surprise.
        </h2>

      </div>

    `;

    startRunaway();

  },2000);

}
function startRunaway() {

    const me = document.getElementById("runaway");

    let touches = 0;

    me.addEventListener("mouseenter", () => {

        touches++;

        // First 8 touches - stay on screen
        if (touches < 8) {

            const rect = me.getBoundingClientRect();

            let x = rect.left + (Math.random() * 300 - 150);
            let y = rect.top + (Math.random() * 300 - 150);

            // Keep it fully on screen
            x = Math.max(20, Math.min(window.innerWidth - rect.width - 20, x));
            y = Math.max(20, Math.min(window.innerHeight - rect.height - 20, y));

            me.style.position = "fixed";
            me.style.left = `${x}px`;
            me.style.top = `${y}px`;

        }

        // On the 8th touch, escape off the screen
        else {

            me.style.left = `${window.innerWidth + 200}px`;

            setTimeout(() => {

                spawnDragon();

            }, 600);

        }

    });

}
    const me = document.getElementById("runaway");

    let escaped = false;

    me.addEventListener("mouseenter", () => {

        if (escaped) return;

        const rect = me.getBoundingClientRect();

        let x = rect.left + (Math.random() * 300 - 150);
        let y = rect.top + (Math.random() * 300 - 150);

        x = Math.max(20, Math.min(window.innerWidth - 20, x));
        y = Math.max(20, Math.min(window.innerHeight - 20, y));

        me.style.position = "fixed";
        me.style.left = `${x}px`;
        me.style.top = `${y}px`;

        if (Math.random() > 0.75) {

            escaped = true;

            me.style.left = `${window.innerWidth + 100}px`;

            setTimeout(() => {

                spawnDragon();

            },400);

        }

    });


function spawnDragon() {

    const dragon = document.createElement("div");

    dragon.id = "dragon";

    dragon.innerHTML = "🐉";

    document.body.appendChild(dragon);

    let angle = 0;

    const fly = setInterval(() => {

        angle += 0.03;

        const x = window.innerWidth / 2 + Math.cos(angle) * 300;
        const y = window.innerHeight / 2 + Math.sin(angle * 2) * 150;

        dragon.style.left = x + "px";
        dragon.style.top = y + "px";

    }, 16);

    dragon.addEventListener("click", () => {

    clearInterval(fly);

    dragon.remove();   // Removes the dragon from the page

    showDragonPage();

});


}
function showDragonPage() {

    document.body.style.background = "#bfefff";

    app.innerHTML = `

        <div class="container">

            <h1 class="title">
                HAPPY BIRTHDAY!!
            </h1>

            <h2 class="dance-text">

    <span class="dancer left">💃</span>

    <span>Wanna dance? ;)</span>

    <span class="dancer right">🕺</span>

</h2>

<div class="choices">

    <label class="choice">
        <input type="checkbox" class="dance-choice">
        <span class="option">No</span>
    </label>

    <label class="choice">
        <input type="checkbox" class="dance-choice">
        <span class="option">No</span>
    </label>

</div>

        </div>

    `;

    // Confetti again
    for (let i = 0; i < 200; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random() * window.innerWidth + "px";

        confetti.style.animationDelay = Math.random() * 0.5 + "s";

        confetti.style.background =
            ["#FFD700","#00C853","#2979FF","#FF4081","#FFFFFF"][
                Math.floor(Math.random()*5)
            ];

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(),3000);

    }

    const choices = document.querySelectorAll(".dance-choice");

choices.forEach(choice => {

    choice.addEventListener("change", () => {

        const option = choice.parentElement.querySelector(".option");

        option.classList.add("fall");

        setTimeout(() => {

            option.classList.remove("fall");

            option.textContent = "Yes";

            option.classList.add("pop");

        },500);

        setTimeout(() => {

            showDancePage();

        },1200);

    });

});

}

function showDancePage() {

    document.body.style.background = "#bfefff";

    app.innerHTML = `

        <div class="container">

            <h1 class="title">
                You have unlocked
                <br>
                Private Dance Lessons
            </h1>

            <h2 class="dance-subtitle">
                Just you and me :)
            </h2>

            <h2 class="dance-question">
                Do you <span id="acceptWord">accept?</span>
            </h2>

            <div class="accept-buttons">

                <button class="accept-btn" id="yesBtn">
                    YES ❤️
                </button>

                <button class="accept-btn" id="noBtn">
                    NO 😢
                </button>

            </div>

        </div>

    `;

    // YES button does nothing
    document.getElementById("yesBtn").addEventListener("click", () => {

        // Nothing happens 😄

    });

    // NO button runs away
    document.getElementById("noBtn").addEventListener("mouseenter", () => {

        const btn = document.getElementById("noBtn");

        const maxX = window.innerWidth - btn.offsetWidth;
        const maxY = window.innerHeight - btn.offsetHeight;

        btn.style.position = "fixed";
        btn.style.left = Math.random() * maxX + "px";
        btn.style.top = Math.random() * maxY + "px";

    });

document.getElementById("acceptWord").addEventListener("click", () => {

    showCalendarPage();

});

}
function showCalendarPage() {

    document.body.style.background = "#bfefff";

    const today = new Date();

    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 2);

    const formatDate = (date) => {
        return date.toISOString().split("T")[0];
    };

    app.innerHTML = `

        <div class="container">

            <h1 class="title">
                Pick our dance date ❤️
            </h1>

      

            <input
                type="date"
                id="datePicker"
                class="date-picker"
                min="${formatDate(today)}"
                max="${formatDate(maxDate)}"
            >

            <button class="accept-btn" id="confirmDate">
                Confirm Date
            </button>

        </div>

    `;

document.getElementById("confirmDate").addEventListener("click", async () => {

    const chosenDate = document.getElementById("datePicker").value;

    if (!chosenDate) {

        alert("Choose a date first 😊");
        return;

    }

    const [year, month, day] = chosenDate.split("-");

    const formData = new FormData();

    formData.append("entry.1261812451_year", year);
    formData.append("entry.1261812451_month", month);
    formData.append("entry.1261812451_day", day);

    try {

        await fetch(
            "https://docs.google.com/forms/d/e/1FAIpQLSetnRJvFOn03vRf27u31NsnUjMnefUzv5tzotw2wPzA9ZpWNg/formResponse",
            {
                method: "POST",
                mode: "no-cors",
                body: formData
            }
        );

    } catch (e) {
        console.log("Couldn't submit form", e);
    }

    showFinalPage(chosenDate);

});
}

function showFinalPage(date){

    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    app.innerHTML = `

        <div class="container">

            <h1 class="title">
                It's a date! ❤️
            </h1>

            <h2 class="dance-subtitle">
                ${formattedDate}
            </h2>

        </div>

    `;

}
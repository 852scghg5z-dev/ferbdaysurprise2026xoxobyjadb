import { showPage4 } from "./page4";

export function showPage3(app) {

    document.body.style.background = "#bfefff";

    app.innerHTML = `
        <div class="secret-page">

            <h1 class="secret-title">
                Secret Page Unlocked
            </h1>

            <p class="secret-text">
                Catch <span id="runaway">me</span> for your surprise!
            </p>

            <div id="dragon" class="dragon">

    <div class="wing wing-left"></div>

    <div class="wing wing-right"></div>

    <div class="tail"></div>

    <div class="body">

        <div class="eye eye-left"></div>
        <div class="eye eye-right"></div>

        <div class="nostril left"></div>
        <div class="nostril right"></div>

        <div class="leg leg1"></div>
<div class="leg leg2"></div>
<div class="leg leg3"></div>

    </div>

</div>

        </div>
    `;

    const me = document.getElementById("runaway");
    const dragon = document.getElementById("dragon");

    let escapes = 0;

    dragon.style.display = "none";

    me.addEventListener("mouseenter", () => {

        escapes++;

        // After enough escapes, disappear
        if (escapes >= 8) {

            me.style.transition = "all .8s ease";

            me.style.left = "110vw";
            me.style.top = "-100px";

            setTimeout(() => {

                me.style.visibility = "hidden";

                startDragon();

            },800);

            return;
        }

        const x = Math.random() * (window.innerWidth - 120);
        const y = Math.random() * (window.innerHeight - 120);

        me.style.position = "fixed";
        me.style.left = x + "px";
        me.style.top = y + "px";

    });

    function startDragon(){

        dragon.style.display = "block";

        let angle = 0;

        const radiusX = window.innerWidth/3;
        const radiusY = window.innerHeight/4;

        const centreX = window.innerWidth/2;
        const centreY = window.innerHeight/2;

        const fly = setInterval(()=>{

            angle += 0.03;

            const x = centreX + Math.cos(angle)*radiusX;
            const y = centreY + Math.sin(angle)*radiusY;

            dragon.style.left = x + "px";
            dragon.style.top = y + "px";

            dragon.style.transform =
                `translate(-50%,-50%) scaleX(${Math.cos(angle)>0?1:-1})`;

        },16);

        dragon.addEventListener("click",()=>{

            clearInterval(fly);

            showPage4(app);

        });

    }

}
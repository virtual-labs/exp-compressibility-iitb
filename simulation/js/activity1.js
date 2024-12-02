let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Compressibility and Bulk Modulus</h5>
        <p>Learning Objective: Find volume strain and increase in pressure</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Volume strain and increase in pressure", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <h5>The Pressure on Liquid is increased from ${l_pressure} N/cm<sup>2</sup> to ${h_pressure} N/cm<sup>2</sup>. The decrease in volume found to be 0.15%, find bulk modulus & compressibility.</h5>

        <p style='text-align: center; font-size: 18px;'>
            Volume Strain = 
            <span style='display: inline-block;' >
                $$ \\frac{-\\Delta v}{v} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal1-inp' > <span id='cal1-val-sp'></span>
        </p>

        <p style='text-align: center; font-size: 18px;'>
            where <span style='display: inline-block;' > $$ v $$ </span> is volume 
        </p>

        <p style='text-align: center; font-size: 18px;'>
            dP = Increase in pressure in N/m<sup>2</sup>=
            <span style='display: inline-block;' >
                $$ (${h_pressure} - ${l_pressure}) \\times 10^4  $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal2-inp' > <span id='cal2-val-sp'></span>
        </p>

        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a1();'  id='temp-btn-120' >Verify</button></div>
        

    
        <br> 

        <div id='nxt' style='display: none;'>
            <div id='tab-1'></div>
        </div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_a1() {
    let btn = document.getElementById('temp-btn-120');
    console.log(`dP => ${dP / 100}, difference => ${diff_pressure}`);
    let inp1 = document.getElementById('cal1-inp');
    let sp1 = document.getElementById('cal1-val-sp');
    let inp2 = document.getElementById('cal2-inp');
    let sp2 = document.getElementById('cal2-val-sp');
    if (!verify_values(parseFloat(inp1.value), dP / 100)) {
        alert('first value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), diff_pressure)) {
        alert('second value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(dP / 100).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${diff_pressure.toFixed(4)}`;
    alert('Your entered values are correct!!');
    let ele = document.getElementById('nxt');
    ele.style.display = 'block';
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map
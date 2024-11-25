function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate Bulk Modulus and Compressibility</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-2');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate Bulk Modulus and Compressibility", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <div style='text-align: center;'>Bulk Modulus (K) = <span style='font-size: 24px; display: inline-block;'>$$ \\frac{\\Delta P}{\\frac{- \\Delta v}{v}} $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal3-inp' > <span id='cal3-val-sp'></span> x 10<sup>7</sup> N/m<sup>2</sup></div>

        <div style='text-align: center;'>Compressibility = <span style='font-size: 24px; display: inline-block;'>$$ \\frac{1}{K} $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal4-inp' > <span id='cal4-val-sp'></span> x 10<sup>-7</sup> m<sup>2</sup>/N</div>
    
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a2();'  id='temp-btn-20' >Verify</button></div>
        
    </div>

    `;
    maindiv.innerHTML += text;
    show_step('tb2-box');
    internal_calculations1();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations1() {
    bulk_modulus = (diff_pressure / (dP / 100)) / Math.pow(10, 7);
    compressibility = 1 / bulk_modulus;
}
function verify_a2() {
    let btn = document.getElementById('temp-btn-20');
    console.log(`K => ${bulk_modulus}, 1/K => ${compressibility}`);
    let inp = document.getElementById('cal3-inp');
    let sp = document.getElementById('cal3-val-sp');
    let inp1 = document.getElementById('cal4-inp');
    let sp1 = document.getElementById('cal4-val-sp');
    if (!verify_values(parseFloat(inp.value), bulk_modulus)) {
        alert('Bulk Modulus value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp1.value), compressibility)) {
        alert('Compressibility value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp.remove();
    sp.innerText = `${bulk_modulus.toFixed(2)}`;
    inp1.remove();
    sp1.innerText = `${compressibility.toFixed(2)}`;
    alert('Your entered values are correct!!');
}
//# sourceMappingURL=activity2.js.map
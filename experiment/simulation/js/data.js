// trapazium ----------------------------------------------------------------
let tb_data = [];
let tb2_data = [];
let a = 10; //Math.round(Math.random()*4 + 8)  // take 10 for check;
let b = 57; //Math.round(Math.random()*5 + 55) // take 57 for check;
let pd1 = 0;
let pd2 = 0;
let pd3 = 0;
let pd4 = 0;
let I_val = 0;
//all variables
let X = [];
function initialize_X() {
    let ini = Math.round(Math.random() * 3 + 1);
    X = [ini, ini + 1, ini + 2];
}
initialize_X();
let Y = [];
let y = Y[0];
let x = X[0] + 0.5;
console.log(`x => ${x}`);
let x_ex = X[0] - 0.5;
console.log(`x_ex => ${x_ex}`);
for (let i = 0; i < X.length; i++) {
    Y.push((Math.pow(X[i], 4)) + Math.round(Math.random() * 5 + 5));
}
let x1_init = 1.5;
let x2_init = 3.5;
function load_tb2() {
    for (let i = 0; i < 10; i++) {
        let num1 = cal_f1() * (1 + 6 * x1_init * x2_init) - cal_f2() * x1_init;
        let den1 = (2 * x1_init + x2_init) * (1 + 6 * x1_init * x2_init) - x1_init * (3 * (Math.pow(x2_init, 2)));
        let n = x1_init - (num1 / den1);
        let num2 = cal_f2() * (2 * x1_init + x2_init) - cal_f1() * 3 * (Math.pow(x2_init, 2));
        x2_init = x2_init - (num2 / den1);
        x1_init = n;
        tb2_data.push([i + 1, x1_init, x2_init]);
    }
    console.log(tb2_data);
}
function cal_f1() {
    return (Math.pow(x1_init, 2)) + x1_init * x2_init - a;
}
function cal_f2() {
    return x2_init + (3 * x1_init * (Math.pow(x2_init, 2))) - b;
}
load_tb2();
// all variables
let l_pressure = Math.round(Math.random() * 20 + 70);
let h_pressure = Math.round(Math.random() * 15 + 125);
let dP = 0.15;
let diff_pressure = (h_pressure - l_pressure) * 10000;
let bulk_modulus = 0;
let compressibility = 0;
//# sourceMappingURL=data.js.map
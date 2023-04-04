function calculate() {
    let cash = parseFloat(document.getElementById('input-1').value);
    let gold = document.getElementById('input-2').value;
    let silver = document.getElementById('input-3').value;
    let gold_amount = parseFloat((gold * 190392).toFixed(0));
    let silver_amount = parseFloat((silver * 2466).toFixed(0));
    let totle_amount = parseFloat(gold_amount + silver_amount + cash);
    let zakat_amount = (totle_amount * 0.025).toFixed(0);

    document.getElementById('totle-g').innerHTML = "Rs " + gold_amount;
    document.getElementById('totle-s').innerHTML = "Rs " + silver_amount;
    document.getElementById('totle-c').innerHTML = "Rs " + cash;
    document.getElementById('totle-a').innerHTML = "Rs " + totle_amount;
    document.getElementById('totle-z').innerHTML = "Rs " + zakat_amount;
}
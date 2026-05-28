const billScreen = document.getElementById('bill');
const tipScreen = document.getElementById('tip');
const tipAmountScreen = document.getElementById('tip-amount');
const totalScreen = document.getElementById('total')

let bill = 0;
let tipPercent = 0;
let tipAmount = 0;
let total = 0;

function updateTip(){
    bill = Number(billScreen.value);
    tipPercent = Number(tipScreen.value);

    tipAmount = tipPercent/100 * bill;
    let totalAmount = tipAmount + bill;

    tipAmountScreen.value = `$${tipAmount.toFixed(2)}`;
    totalScreen.value = `$${totalAmount.toFixed(2)}`;
}

billScreen.addEventListener('input', updateTip)
tipScreen.addEventListener('input', updateTip)
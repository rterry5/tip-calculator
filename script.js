const tipTotal = document.getElementById('tip-amount');
const billTotal = document.getElementById('bill-total');
const tipForm = document.querySelector('#tip-form');

tipForm.onchange = function() {
    const bill = document.getElementById('bill').value;
    const tip = document.getElementById('tip').value;
    const tipAmount = ((tip/100) * bill).toFixed(2);
    const finalBill = (+bill + +tipAmount).toFixed(2);
    
    billTotal.innerText = `$${finalBill}`;
    tipTotal.innerText = `$${tipAmount}`
}

const tipTotal = document.getElementById('tip-amount');
const tipForm = document.getElementById('tip-form');
const splitBill = document.getElementById('split-bill');
const people = document.getElementById('people');
const billTotal = document.getElementById('bill-total');


function calculateBill() {
    const bill = document.getElementById('bill').value;
    const tip = document.getElementById('tip').value;
    const tipAmount = ((tip/100) * bill).toFixed(2);
    const finalBill = (+bill + +tipAmount).toFixed(2);
    
    billTotal.innerText = `$${finalBill}`;
    tipTotal.innerText = `$${tipAmount}`;

    function calculateSplit() {
        const numberOfPeople = document.getElementById('people').value;
        const splitPerPerson = document.getElementById('split-cost');
        const splitCost = (+finalBill/+numberOfPeople).toFixed(2);
    
        if (numberOfPeople > 0) {
            splitPerPerson.innerText = `$${splitCost}`;
        } else {
            splitPerPerson.innerText = `$${finalBill}`;
        }
    }
    calculateSplit();
}


splitBill.onchange = function() {
    const hideSplit = document.getElementById('hide-split');

    if (splitBill.value === 'yes') {
        hideSplit.style.display = 'block';
    } else {
        hideSplit.style.display = 'none';
    }

    const splitTotal = document.getElementById('split-total');
    if (splitBill.value === 'yes') {
        splitTotal.style.display = 'block';
    } else {
        splitTotal.style.display = 'none';
    }
}


// Event Listener
tipForm.addEventListener('input', calculateBill, true);
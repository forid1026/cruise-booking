//first class handler increase
document.getElementById('f-class-increase').addEventListener('click', function () {
    handleChange('f-class', true);
});

//first class handler decrease
document.getElementById('f-class-decrease').addEventListener('click', function () {
    handleChange('f-class', false);
})

//economic handler increase
document.getElementById('economic-increase').addEventListener('click', function () {
    handleChange('economic', true);
});

//economic handler decrease
document.getElementById('economic-decrease').addEventListener('click', function () {
    handleChange('economic', false);
});


//booking info handler
document.getElementById('book-now').addEventListener('click', function () {
    bookingInfo();


})

//get input value
function getInput(id){
    const getValue = document.getElementById(id).value;
    return getValue;

}

//ticket change handler
function handleChange(ticket, isIncrease) {
    const firstClassCount = document.getElementById(ticket + '-count').value;
    let firstClassCountNumber = parseInt(firstClassCount);
    if (isIncrease == true) {
        firstClassCountNumber = parseInt(firstClassCount) + 1;

    }
    if (isIncrease == false && firstClassCountNumber
        > 0) {
        firstClassCountNumber = parseInt(firstClassCount) - 1;

    }
    document.getElementById(ticket + '-count').value = firstClassCountNumber;
    updatePrice();
}

//update price 
function updatePrice() {
    const firstClassCount = getInput('f-class-count');
    const economicCount = getInput('economic-count'); 
    const firstClassPrice = parseInt(firstClassCount) * 150;
    const economicPrice = parseInt(economicCount) * 100;
    const subTotal = firstClassPrice + economicPrice;
    console.log('subtotal', subTotal);
    document.getElementById('subtotal').innerText = subTotal;
    const vat = (subTotal / 100 * 10).toFixed(2);
    document.getElementById('vat').innerHTML = vat;
    const total = subTotal + parseFloat(vat);
    document.getElementById('total').innerHTML = total;
    return total;

}

//booking info
function bookingInfo(){
    document.getElementById('main-section').style.display = 'none';
    document.getElementById('book-info').style.display = 'block';
    const firstClassCount = getInput('f-class-count');
    const economicCount = getInput('economic-count');
    document.getElementById('economic-seat').innerText = firstClassCount;
    document.getElementById('f-class-seat').innerText = economicCount;
    const totalTicketPrice = updatePrice();
    document.getElementById('total-ticket-amount').innerText = totalTicketPrice;
}

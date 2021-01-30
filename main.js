function handleTicketChange(ticket, isIncrease) {
    const ticketCount = getInputValue(ticket);

    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }

    document.getElementById(ticket + '-count').value = ticketNewCount;
   

    let ticketTotal = 0;
    if (ticket == 'firstClass') {
        ticketTotal = ticketNewCount * 150;
    }
    if (ticket == 'economyClass') {
        ticketTotal = ticketNewCount * 100;
    }
   

    calculateTotal();
}


function calculateTotal() {
    const firstClassCount = getInputValue('firstClass');
    const economyClassCount = getInputValue('economyClass');

    const subTotalPrice = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('sub-total').innerText = subTotalPrice;

    const vat = Math.round(subTotalPrice * 0.1);
    document.getElementById('vat').innerText = vat;
    

    const total = subTotalPrice + vat;
    document.getElementById('total').innerText = total;
   
}


function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}
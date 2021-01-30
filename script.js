// First class section
const firstClassIncrement = document.getElementById('first_increment_btn');
firstClassIncrement.addEventListener('click', function () {
    ticketCountUpdate('first_class', true);  // call ticketCountUpdate function
    ticketFareCalculate();                // call ticketFareCalculate function    
});

const firstClassDecrement = document.getElementById('first_decrement_btn');
firstClassDecrement.addEventListener('click', function () {
    ticketCountUpdate('first_class', false);  // call ticketCountUpdate function
    ticketFareCalculate();                // call ticketFareCalculate function    
});

// economy class section
const economyClassIncrement = document.getElementById('economy_increment_btn');
economyClassIncrement.addEventListener('click', function () {
    ticketCountUpdate('economy_class', true);  // call ticketCountUpdate function
    ticketFareCalculate();
});

const economyClassDecrement = document.getElementById('economy_decrement_btn');
economyClassDecrement.addEventListener('click', function () {
    ticketCountUpdate('economy_class', false);  // call ticketCountUpdate function
    ticketFareCalculate();
});

// function for ticket count update
function ticketCountUpdate(id, isIncrease) {
    const inputTicket = document.getElementById(id);
    const ticketCount = parseInt(inputTicket.value); 
    let newTicketCount = ticketCount;
    if (isIncrease == true) {
        newTicketCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        newTicketCount = ticketCount - 1;
    }
    inputTicket.value = newTicketCount;
};

// ticket fare calculate function
function ticketFareCalculate() {
    const firstClassTicketCount = getTicketInput('first_class');
    const economyClassTicketCount = getTicketInput('economy_class');
    // calculate ticket fare
    let firstClassFare = 150;
    let economyClassFare = 100;
    const totalTicketFare = (firstClassTicketCount * firstClassFare) + (economyClassTicketCount * economyClassFare);
    document.getElementById('ticket_fare').innerText = totalTicketFare;
    // calculate tax amount
    const taxAmount = Math.round(totalTicketFare * .1);
    document.getElementById('tax_amount').innerText = taxAmount;
    // calculate total fare
    const grandTotal = totalTicketFare + taxAmount;
    document.getElementById('total_amount').innerText = grandTotal;
};

// ticket input function
function getTicketInput(id) {
    const inputTicket = document.getElementById(id);
    const ticketCount = parseInt(inputTicket.value);

    return ticketCount;
};

//  greetings for booking
const booking = document.getElementById('booking').addEventListener('click', function () {
    const subTotal = document.getElementById('ticket_fare');
    const subTotalCount = parseInt(subTotal.innerText);
    
    if (subTotalCount == 0) {
        alert('Please add atleast one ticket.')
    } else {
        const greetings = document.getElementById('greetings');
        greetings.style.display = 'block';
    }    
});

// remove greetings message
document.getElementById('close_btn').addEventListener('click', function () {
    const removeMessage = document.getElementById('greetings');
    removeMessage.remove();
})



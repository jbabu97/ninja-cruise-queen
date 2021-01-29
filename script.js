// First class section
const firstClassIncrement = document.getElementById('first_increment_btn');
firstClassIncrement.addEventListener('click', function () {
    ticketCountUpdate('first_class', true);  // call ticketCountUpdate function
    ticketFareCalculate()
    // const inputTicket = document.getElementById('first_class');
    // const ticketCount = parseInt(inputTicket.value);
    // const newTicketCount = ticketCount + 1;
    // inputTicket.value = newTicketCount;
    // console.log('increment btn clicked');
    // console.log(inputTicket.value);
});

const firstClassDecrement = document.getElementById('first_decrement_btn');
firstClassDecrement.addEventListener('click', function () {
    ticketCountUpdate('first_class', false);  // call ticketCountUpdate function
    ticketFareCalculate()
    // const inputTicket = document.getElementById('first_class');
    // const ticketCount = parseInt(inputTicket.value);
    // const newTicketCount = ticketCount - 1;
    // inputTicket.value = newTicketCount;
    // console.log('decrement btn clicked');
    // console.log(inputTicket.value);
});

const economyClassIncrement = document.getElementById('economy_increment_btn');
economyClassIncrement.addEventListener('click', function () {
    ticketCountUpdate('economy_class', true);  // call ticketCountUpdate function
    ticketFareCalculate()
});

const economyClassDecrement = document.getElementById('economy_decrement_btn');
economyClassDecrement.addEventListener('click', function () {
    ticketCountUpdate('economy_class', false);  // call ticketCountUpdate function
    ticketFareCalculate()
});

// function for ticket count update

function ticketCountUpdate(id, isIncrease) {
    const inputTicket = document.getElementById(id); // have to call ticketFareUpdate() function
    const ticketCount = parseInt(inputTicket.value); // have to call ticketFareUpdate() function
    let newTicketCount = ticketCount;
    if (isIncrease == true) {
        newTicketCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        newTicketCount = ticketCount - 1;
    }
    inputTicket.value = newTicketCount;
    console.log('decrement btn clicked');
    console.log(inputTicket.value);
};

// ticket fare update

function ticketFareCalculate() {
    const firstClassTicketCount = getTicketInput('first_class');
    const economyClassTicketCount = getTicketInput('economy_class');

    // const inputTicket = document.getElementById('first_class');
    // const firstClassTicketCount = parseInt(inputTicket.value);

    // const inputTicket = document.getElementById('economy_class');
    // const economyClassTicketCount = parseInt(inputTicket.value);

    let firstClassFare = 150;
    let economyClassFare = 100;
    const totalTicketFare = firstClassTicketCount * firstClassFare + economyClassTicketCount * economyClassFare;
    document.getElementById('ticket_fare').innerText = totalTicketFare;
    // calculate tax amount
    const taxAmount = totalTicketFare * .1;
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
}



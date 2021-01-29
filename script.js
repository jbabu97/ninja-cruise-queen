// First class section
const firstClassIncrement = document.getElementById('first_increment_btn');
firstClassIncrement.addEventListener('click', function () {
    ticketCountUpdate('first_class', true);  // call ticketCountUpdate function
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
});

const economyClassDecrement = document.getElementById('economy_decrement_btn');
economyClassDecrement.addEventListener('click', function () {
    ticketCountUpdate('economy_class', false);  // call ticketCountUpdate function
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
    console.log('decrement btn clicked');
    console.log(inputTicket.value);
}

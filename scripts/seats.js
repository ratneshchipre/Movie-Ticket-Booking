const seats = document.querySelector('.all-seats');
const ticketNum = document.querySelector('#ticket-num');
const ticketPrice = document.querySelector('#ticket-price');
const totalDiv = document.querySelector('.total');
const proceedBtn = document.querySelector('.proceed');
const msgContainer = document.querySelector('.ticket-confirm-msg');
const msgTicket = document.querySelector('.msg-1');
const msgAmount = document.querySelector('.msg-2');
const layoutFootBox = document.querySelector('.layout-footer');
const cancelBtn = document.querySelector('.cancel');
const bookBtn = document.querySelector('.book');

let ticketCount = 0;
let ticketAmount = 0;
let clearMsg;

function displayTicketDetails(ticket) {
    if (ticket.checked) {
        ticketCount += 1;
        ticketAmount += 200;
    } else {
        ticketCount -= 1;
        ticketAmount -= 200;
    }

    ticketNum.innerText = ticketCount;
    ticketPrice.innerText = ticketAmount;

    if (ticketCount > 0) {
        totalDiv.style.display = "flex";
    } else {
        totalDiv.style.display = "none";
    }

    updateMsgContainer();
}

function generateSeats() {
    for (let i = 0; i < 119; i++) {
        let selectRandomSeat = Math.floor(Math.random() * 2);
        let booked = selectRandomSeat === 1 ? "booked" : "";

        seats.insertAdjacentHTML("beforeend", `
            <input type="checkbox" name="tickets" id="s${i + 2}" ${selectRandomSeat ? "disabled" : ""}>
            <label for="s${i + 2}" class="seat ${booked}"></label>
        `);
    }

    const tickets = seats.querySelectorAll('input');
    tickets.forEach((ticket) => {
        if (!ticket.hasAttribute("disabled")) {
            ticket.addEventListener('click', () => displayTicketDetails(ticket));
        }
    });
}

generateSeats();

function displayConfirmation() {
    proceedBtn.addEventListener('click', () => {
        layoutFootBox.classList.add('inActiveLayFoot');
        msgContainer.classList.add('activeMsg');
    });
}

displayConfirmation();

function updateMsgContainer() {
    msgTicket.innerText = `Tickets: ${ticketCount}`;
    msgAmount.innerText = `Amount(in rupees): ${ticketAmount}`;
}

function cancelConfirmation() {
    cancelBtn.addEventListener('click', () => {
        msgContainer.classList.remove('activeMsg');
        layoutFootBox.classList.remove('inActiveLayFoot');
    });
}

cancelConfirmation();

function bookTicket() {
    bookBtn.addEventListener('click', () => {
        let bookIcon = `<img src="./assets/check.png">`;
        let isBooked = '<p>Ticket Booked Successfully!</p>';
        let bookedMsg = `
        <div class="book-icon">
            ${bookIcon}
        </div>
        <div class="isBooked-msg">
            ${isBooked}
        </div>
        `

        msgContainer.style.alignItems = 'center';
        msgContainer.innerHTML = bookedMsg;

        clearMsg = setInterval(timer, 2000);
        function timer() {
            setInterval(() => {
                msgContainer.classList.remove('activeMsg');
                layoutFootBox.classList.remove('inActiveLayFoot');

                window.location.reload();
            }, 1000)
        }
    });
}

bookTicket();
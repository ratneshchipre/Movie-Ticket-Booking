const dateOptions = document.querySelector('.show-dates');

function generateFiveDates() {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 5; i++) {
        const newDate = new Date(today);
        newDate.setDate(today.getDate() + i);

        const formattedDate = newDate.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });
        dates.push(formattedDate);
    }

    return dates;
}

const nextFiveDates = generateFiveDates();

export function displayDates() {
    nextFiveDates.forEach((date, index) => {
        dateOptions.insertAdjacentHTML('beforeend', `
        <button class="date-box-${index + 1}">
        ${date}
        </button>    
        `)
    });

    const dateBtns = document.querySelectorAll('.show-dates button');

    dateBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            dateSelected(event);
        });
    });
}

displayDates();
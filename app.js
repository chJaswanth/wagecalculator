// to hold salaries
let yearlySalary;
let hourlyWage;
// button events
let submitYearly = document.querySelector('#submitYearly');
let submitHourly = document.querySelector('#submitHourly');

// objects to show the wages
let salaryInHours = document.querySelector('#salaryPerHour');
let salaryInYears = document.querySelector('#salaryPerYear');


perYear.addEventListener('change', () => {
    yearlySalary = document.querySelector('#perYear').value;
    salaryInHours.innerText = Math.round(yearlySalary/2080);
});

perHour.addEventListener('change', () => {
    hourlyWage = document.querySelector('#perHour').value;
    salaryPerYear.innerText = `$${Math.round(hourlyWage*2080)}`;
});
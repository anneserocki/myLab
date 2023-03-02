// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER 
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
// VERIFY IF THE NUMBER IS VALID 
while (isNaN(investment)) {
    window.alert("The number you entered is wrong! Please re-enter.");
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
    if ((!isNaN(investment))) {
        break
    } else {
        continue
    };
};

rate = parseFloat(prompt('Enter interest rate as xx.x'));
// VERIFY IF THE NUMBER IS VALID 
while ((isNaN(rate)) || rate/100 < 0 || rate/100 >1 ) {
    window.alert("The number you entered is wrong! It  should be between 0 and a realistic rate like 6% after the number you entered divides 100. Please re-enter.");
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
    if ((!isNaN(rate)) && rate/100 > 0 && rate/100 < 1) {
        break
    } else {
        continue
    };
};

years = parseInt(prompt('Enter the number of years you want to invest for'));
// VERIFY IF THE NUMBER IS VALID 
while ((isNaN(years)) || years < 1 || years > 30 ) {
    window.alert("The number you entered is wrong! It should be between 1 and 30, please re-enter.");
    years = parseInt(prompt('Enter the number of years you want to invest for'));
    if ((!isNaN(years)) && years > 1 && years < 30) {
        break
    } else {
        continue
    };
};

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
};

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);







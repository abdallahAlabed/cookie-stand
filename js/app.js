'use strict';

let operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


const Seattle = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  avgCustPerHr: [],
  cookPurchEachHr: [],

  avgCust: function () {
    for (let i = 0; i < 14; i++) {

      this.avgCustPerHr[i] = randomValue(this.minCust, this.maxCust);

      this.cookPurchEachHr[i] = Math.floor(this.avgCustPerHr[i] * this.avgCookie);

    }
  },
};


Seattle.avgCust();

let containerSeattle = document.getElementById('Seattle');

let locationNameSeattle = document.createElement('h2');

containerSeattle.appendChild(locationNameSeattle);

locationNameSeattle.textContent = 'Seattle';

let unorderedList = document.createElement('ul');

containerSeattle.appendChild(unorderedList);

let amPm = '';

let list = '';

let total = 0;

let clock = 5;

for (let i = 0; i < 15; i++) {
  
  list = document.createElement('li');
  unorderedList.appendChild(list);
  if (clock < 12) {
    clock++;
  } else {
    clock = 1;
  }
  if (clock < 12 && i < 6) {
    amPm = 'am';
  }
  if (i >= 6) {
    amPm = 'pm';
  }
  if (i < 14) {
    list.textContent = `${clock} ${amPm}: ${Seattle.cookPurchEachHr[i]}`;
    total = total + Seattle.cookPurchEachHr[i];
  } else {
    list.textContent = `total: ${total}`;
  }
}





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


const Tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  avgCustPerHr: [],
  cookPurchEachHr: [],

  avgCust: function () {
    for (let i = 0; i < 14; i++) {

      this.avgCustPerHr[i] = randomValue(this.minCust, this.maxCust);

      this.cookPurchEachHr[i] = Math.floor(this.avgCustPerHr[i] * this.avgCookie);

    }
  },
};


const Dubai = {
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  avgCustPerHr: [],
  cookPurchEachHr: [],

  avgCust: function () {
    for (let i = 0; i < 14; i++) {

      this.avgCustPerHr[i] = randomValue(this.minCust, this.maxCust);

      this.cookPurchEachHr[i] = Math.floor(this.avgCustPerHr[i] * this.avgCookie);

    }
  },
};


const Paris = {
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  avgCustPerHr: [],
  cookPurchEachHr: [],

  avgCust: function () {
    for (let i = 0; i < 14; i++) {

      this.avgCustPerHr[i] = randomValue(this.minCust, this.maxCust);

      this.cookPurchEachHr[i] = Math.floor(this.avgCustPerHr[i] * this.avgCookie);

    }
  },
};


const Lima = {
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  avgCustPerHr: [],
  cookPurchEachHr: [],

  avgCust: function () {
    for (let i = 0; i < 14; i++) {

      this.avgCustPerHr[i] = randomValue(this.minCust, this.maxCust);

      this.cookPurchEachHr[i] = Math.floor(this.avgCustPerHr[i] * this.avgCookie);

    }
  },
};

function render(city,o) {
  let container = document.getElementById(city);
  
  let locationName = document.createElement('h2');
  
  container.appendChild(locationName);
  
  locationName.textContent = city;
  
  let unorderedList = document.createElement('ul');
  
  container.appendChild(unorderedList);
  
  
  let amPm = '';
  
   let list = '';
  
  let  total = 0;
  
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
      list.textContent = `${clock} ${amPm}: ${o.cookPurchEachHr[i]}`;
      total = total + o.cookPurchEachHr[i];
    } else {
      list.textContent = `total: ${total}`;
    }
  }
  }



 
Tokyo.avgCust();

Seattle.avgCust();

Dubai.avgCust();

Paris.avgCust();

Lima.avgCust();

render('Seattle',Seattle);
  
render('Tokyo',Tokyo);

render('Dubai',Dubai);

render('Paris',Paris);

render('Lima',Lima);




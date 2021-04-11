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






Tokyo.avgCust();

Seattle.avgCust();

Dubai.avgCust();

Paris.avgCust();

Lima.avgCust();


let containerSeattle = document.getElementById('Seattle');

let locationNameSeattle = document.createElement('h2');

containerSeattle.appendChild(locationNameSeattle);

locationNameSeattle.textContent = 'Seattle';

let unorderedListSeattle = document.createElement('ul');

containerSeattle.appendChild(unorderedListSeattle);

let amPm = '';

let list = '';

let total = 0;

let clock = 5;

for (let i = 0; i < 15; i++) {

  list = document.createElement('li');
  unorderedListSeattle.appendChild(list);
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


let containerTokyo = document.getElementById('Tokyo');

let locationNameTokyo = document.createElement('h2');

containerTokyo.appendChild(locationNameTokyo);

locationNameTokyo.textContent = 'Tokyo';

let unorderedListTokyo = document.createElement('ul');

containerTokyo.appendChild(unorderedListTokyo);


 amPm = '';

 list = '';

 total = 0;

 clock = 5;


for (let i = 0; i < 15; i++) {
  list = document.createElement('li');
  unorderedListTokyo.appendChild(list);
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
    list.textContent = `${clock} ${amPm}: ${Tokyo.cookPurchEachHr[i]}`;
    total = total + Tokyo.cookPurchEachHr[i];
  } else {
    list.textContent = `total: ${total}`;
  }
}

let containerDubai = document.getElementById('Dubai');

let locationNameDubai = document.createElement('h2');

containerDubai.appendChild(locationNameDubai);

locationNameDubai.textContent = 'Dubai';

let unorderedListDubai = document.createElement('ul');

containerDubai.appendChild(unorderedListDubai);

amPm = '';

 list = '';

 total = 0;

 clock = 5;

for (let i = 0; i < 15; i++) {
  list = document.createElement('li');
  unorderedListDubai.appendChild(list);
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
    list.textContent = `${clock} ${amPm}: ${Dubai.cookPurchEachHr[i]}`;
    total = total + Dubai.cookPurchEachHr[i];
  } else {
    list.textContent = `total: ${total}`;
  }
}


let containerParis = document.getElementById('Paris');

let locationNameParis = document.createElement('h2');

containerParis.appendChild(locationNameParis);

locationNameParis.textContent = 'Paris';

let unorderedListParis = document.createElement('ul');

containerParis.appendChild(unorderedListParis);

amPm = '';

 list = '';

 total = 0;

 clock = 5;

for (let i = 0; i < 15; i++) {
  list = document.createElement('li');
  unorderedListParis.appendChild(list);
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
    list.textContent = `${clock} ${amPm}: ${Paris.cookPurchEachHr[i]}`;
    total = total + Paris.cookPurchEachHr[i];
  } else {
    list.textContent = `total: ${total}`;
  }
}


let containerLima = document.getElementById('Lima');

let locationNameLima = document.createElement('h2');

containerLima.appendChild(locationNameLima);

locationNameLima.textContent = 'Lima';

let unorderedListLima = document.createElement('ul');

containerLima.appendChild(unorderedListLima);

amPm = '';

 list = '';

 total = 0;

 clock = 5;
for (let i = 0; i < 15; i++) {
  list = document.createElement('li');
  unorderedListLima.appendChild(list);
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
    list.textContent = `${clock} ${amPm}: ${Lima.cookPurchEachHr[i]}`;
    total = total + Lima.cookPurchEachHr[i];
  } else {
    list.textContent = `total: ${total}`;
  }
}


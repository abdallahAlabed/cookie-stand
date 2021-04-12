'use strict';

let operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let sum = new Array();
let container = document.getElementById('tableContainer');
let tabel = document.createElement('table');
container.appendChild(tabel);


function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function heder() {

  let tr = document.createElement('tr');
  tabel.appendChild(tr);
  for (let i = 0; i < operationHour.length; i++) {
    let th = document.createElement("th");
    tr.appendChild(th);
    th.textContent = operationHour[i];
  }

}

function footr() {
  let tr = document.createElement('tr');
  tabel.appendChild(tr);
  let x = 0;
  for (let i = 0; i < sum.length; i++) {
    let td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = sum[i];
    x += sum[i];
  }
  let td = document.createElement("td");
    tr.appendChild(td);
    td.textContent =x;

}



function City(name, minCust, maxCus, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCus = maxCus;
  this.avgCookie = avgCookie;
  this.avgCustPerHr = [];
  this.cookPurchEachHr = [];
  this.sum = 0;
  console.log(this);
}
City.prototype.avgCust = function () {
  for (let i = 0; i < 14; i++) {

    this.avgCustPerHr[i] = randomValue(this.minCust, this.maxCus);

    this.cookPurchEachHr[i] = Math.floor(this.avgCustPerHr[i] * this.avgCookie);
    this.sum += this.cookPurchEachHr[i];
  }
  sum.push(this.sum);
}

City.prototype.render = function () {
  let row = document.createElement('tr');
  tabel.appendChild(row);

  let storeName = document.createElement('td');

  row.appendChild(storeName);

  storeName.textContent = this.name;
  for (let i = 0; i < operationHour.length; i++) {
    let td = document.createElement("td");
    row.appendChild(td);
    td.textContent = this.avgCustPerHr[i];
    
  }
  let td = document.createElement("td");
  row.appendChild(td);  
  td.textContent = this.sum;


}

let seattel = new City('seattel', 23, 65, 6.3);
let Tokyo = new City('Tokyo', 3, 24, 1.2);
let Dubai = new City('Dubai', 11, 38, 3.7);
let Paris = new City('Paris', 20, 38, 2.3);
let Lima = new City('Lima', 2, 16, 4.6);


heder();
seattel.avgCust()

seattel.render();

Tokyo.avgCust();

Tokyo.render();

Dubai.avgCust();

Dubai.render();

Paris.avgCust();

Paris.render();

Lima.avgCust();

Lima.render();

console.log(sum);

footr();

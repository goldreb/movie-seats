const container = document.querySelector(".container");
// this will only grab the row of seats that are not occupied
const seats = document.querySelectorAll(".row .seat:not(.occupied");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

// the plus+ sign will turn the string into a whole number, another ways to do a string into number is parseInt
let ticketPrice = +movieSelect.value;

// Save selected movie index and price

function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selecteMoviePrice", moviePrice);
}

// update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  // Copy selected seats into array
  // Map through array

  // return a new arrau indexes

  // use spread operater [... ]
  // with implicit return
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  // use localStorage to store. localStorage is built in.
  // seatsIndex is an array, need to make it string so use JSON.stringify

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  //   console.log(selectedSeats);
  const selectedSeatsCount = selectedSeats.length;
  //   console.log(selectedSeatsCount);

  // this will add the total of the seats by adding an event listener to the container
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// console.log(typeof ticketPrice);

// Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;

  setMovieData(e.target.selectedIndex, e.target.value);

  updateSelectedCount();
});

// this will check if the clicked on has a class of seat but not a class of occupied, if so then add a class of selected, which makes the selected seats blue
// seat click event
container.addEventListener("click", (e) => {
  // this will target the seat except the occupied seat
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

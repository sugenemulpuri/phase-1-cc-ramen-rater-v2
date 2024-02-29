// // index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
    const ramenName = document.getElementById('ramen-name');
    const ramenRating = document.getElementById('ramen-rating');
    ramenName.textContent = ramen.name;
    ramenRating.textContent = ramen.rating;
 
};


const addSubmitListener = () => {
  // Add code
  const ramenForm = document.getElementById("new-ramen");

  ramenForm.addEventListener("submit", (e) => {
      e.preventDefault();
      addNewRamen();
      ramenForm.reset();
  })
}


const displayRamens = () => {
  // Add code
      // fetch ramens from database
      fetch("http://localhost:3000/ramens")
      .then(res => res.json())
      // once fetched, render each ramen with renderOneRamen()
      .then(ramens => {
        const image = document.createElement('img')
          ramens.forEach(ramen => addNewRamen(ramen))
          // also, show the details of the first ramen in the array
          showRamenDetails(ramens[0]);
      })
};


function main() {
  // Invoke displayRamens here
  displayRamens();
  // Invoke addSubmitListener here
  addSubmitListener();
}

function postJSON(url, data) {
  return fetch(`${url}`), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};



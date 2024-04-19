
function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
  }

  function processRequest() {
  
    for (let i = 0; i < 10; i++) {
      const n = getRandomNumber();
      if (n == 1) {
        getDog();
      } else if (n == 2) {
        getCat();
      } else {
         getFox();
      }
    }
  }
  
  function getDog() {
    const tbody = document.getElementById('animals');
    
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {

        const newHtml = `
       
        <div class="col mb-5">
          <div class="card h-100">
            <img class="card-img-top" src="${data.message}" alt="Random Dog Image"  width="500" height="300"/>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <a class="btn btn-outline-dark mt-auto" href="#">Adoptar</a>
              </div></div></div></div>`;
     
        tbody.innerHTML += newHtml;
      })
      .catch(error => console.error(error));
  }

  function getCat() {
    const tbody = document.getElementById('animals');
    fetch('https://cataas.com/cat')
      .then(response => response.blob())
      .then(data => {
      

        const newHtml = `
        <div class="col mb-5">
          <div class="card h-100">
            <img class="card-img-top" src="${URL.createObjectURL(data)}" alt="Random Cat Image" width="500" height="300"/>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <a class="btn btn-outline-dark mt-auto" href="#">Adoptar</a>
                </div>
                </div>
              </div>
  
        `;
  

        tbody.innerHTML += newHtml;
      }).catch(error => console.error(error));
  }
  function getFox() {
    const tbody = document.getElementById('animals');
    
    fetch('https://randomfox.ca/floof/')
      .then(response => response.json())
      .then(data => {
        const newHtml = `
          <div class="col mb-5">
            <div class="card h-100">
              <img class="card-img-top" src="${data.image}" alt="Random Fox Image"  width="500" height="300"/>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">Adoptar</a>
                </div>
              </div>
            </div>
          </div>`;
        
        tbody.innerHTML += newHtml;
      })
      .catch(error => console.error(error));
  }
  const generateKeyBtn = document.getElementById("more")
generateKeyBtn.addEventListener('click', () => processRequest() )
var username;
document.addEventListener("DOMContentLoaded", function() {
  username = sessionStorage.getItem('username');
  if(username) {
  
      document.getElementById("welcome-message").textContent = "Welcome, " + username + "!";
  } else {
    
      window.location.href = "login.html";
  }
});
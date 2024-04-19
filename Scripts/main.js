document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch("./Database/User.json")
      .then(response => response.json())
      .then(users => {
        var authenticatedUser = users.find(user => user.username === username && user.password === password);
        if (authenticatedUser) {
          alert("Login successful!");
        sessionStorage.setItem('username', username);
         window.location.href = "dashboard.html";
        } else {
          document.getElementById("error-message").textContent = "Invalid username or password";
        }
      })
      .catch(error => console.error("Error fetching users:", error));
  });
  
  function redirectToAnotherPage() {
  
    window.location.href = 'Inscrever.html';
}


document.getElementById('inscreverBtn').addEventListener('click', redirectToAnotherPage);
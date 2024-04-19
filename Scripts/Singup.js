
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var newUsername = document.getElementById("new-username").value;
    var newPassword = document.getElementById("new-password").value;
    var newEmail = document.getElementById("new-email").value;
  
    fetch("./Database/User.json")
    .then(response => response.json())
    .then(users => {
      // Check for existing user
      var existingUser = users.find(user => user.username === newUsername || user.email === newEmail);
      if (existingUser) {
        document.getElementById("signup-error").textContent = "Username or email already exists";
        return; // Exit if user already exists
      }
  
      // Create new user object
      var newUser = {
        username: newUsername,
        password: newPassword,
        email: newEmail,
        id: users.length,
        type: "normal"
      };
  
      // Add new user to the array
      users.push(newUser);
  
      // Save the updated users array (assuming a proper implementation of saveUsers)
      return saveUsers(users);
    })
    .then(() => {
      // Redirect to dashboard after successful save
   //   window.location.href = "dashboard.html";
    })
    .catch(error => console.error("Error fetching/saving users:", error));
  });
  
  function saveUsers(users) {
    console.log(users);
  }
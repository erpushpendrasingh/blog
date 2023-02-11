let submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", formData);
console.log("submitBtn:", submitBtn);
function formData(event) {
     event.preventDefault();
     let username = document.querySelector("#username").value;
     let avtar = document.querySelector("#avatar").value;
     let email = document.querySelector("#email").value;
     let password = document.querySelector("#password").value;
     let details = {
          username: username,
          avtar: avtar,
          email: email,
          password: password,
     };
     fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
               "Content-Type": "application/json",
          },
          body: JSON.stringify(details),
     })
          .then((res) => res.json())
          .then((detail) => {
               alert("You are Sign-up successfully");
               window.location.href = "signin.html";
          });
}

// function detailsEntry(username, avtar, email, password) {
//      this.username = username;
//      this.avtar = avtar;
//      this.email = email;
//      this.password = password;
// }

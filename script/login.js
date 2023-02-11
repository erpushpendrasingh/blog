let form = document.querySelector("#signin");
form.addEventListener("submit", userSignin);
function userSignin(event) {
     event.preventDefault();
     let email = form.email.value;
     let password = form.password.value;
     fetch(`http://localhost:3000/users?email=${email}&password=${password}`)
          .then((res) => res.json())
          .then((res) =>
               res.length > 0
                    ? (localStorage.setItem("userdata", JSON.stringify(res)),
                      console.log(res.length),
                      alert("login successful"),
                      (window.location.href = "./addBlog.html"))
                    : alert("Login failed")
          )
          .catch((err) => console.log(err));
}

let userData = JSON.parse(localStorage.getItem("userdata")) || [];
console.log("userData:", userData);

if (userData.length === 0) {
     alert("You are not loged in login first");
     window.location.href = "./signin.html";
} else {
     const form = document.querySelector("#add-blog-form");
     console.log("form:", form);
     function blogsEntry(username, title, content, category, date) {
          this.username = username;
          this.title = title;
          this.content = content;
          this.category = category;
          this.date = date;
     }
     form.addEventListener("submit", (event) => {
          event.preventDefault();
          //  let username = document.querySelector("#username").value;
          let title = document.querySelector("#title").value;
          let content = document.querySelector("#content").value;
          let category = document.querySelector("#category").value;
          let date = document.querySelector("#date").value;
          let blog = {
               title: title,
               content: content,
               category: category,
               date: date,
          };
          console.log("blog:", blog);
          fetch(`http://localhost:3000/blogs`, {
               method: "POST",
               body: JSON.stringify(blog),
               headers: {
                    "Content-Type": "application/json",
               },
          }).then((res) => res.json());
     });
}

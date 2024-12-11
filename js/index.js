var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");

var bookmarks = [];


if (localStorage.getItem("bookmarks") !== null) {
  bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  display(); 
}

function addBookmark() {
  if (siteName.value == "" || siteURL.value == "") {
    alert("Please fill in both fields");
    return;
  }

  var newBookmark = {
    name: siteName.value,
    url: siteURL.value,
  };

  bookmarks.push(newBookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  display();
  clear();
}

function display() {
  var cartoona = "";
  for (var i = 0; i < bookmarks.length; i++) {
    cartoona += `
      <tr>
        <td>${i + 1}</td>
        <td>${bookmarks[i].name}</td>
        <td><a href="${bookmarks[i].url}" class="btn btn-success btn-sm">Visit</a></td>
        <td><button class="btn btn-danger btn-sm" onclick="deleteBookmark(${i})">Delete</button></td>
      </tr>
    `;
  }

  document.getElementById("bookmarkTable").innerHTML = cartoona;
}

function clear() {
  siteName.value = null;
  siteURL.value = null;
}

function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  display();
}























































































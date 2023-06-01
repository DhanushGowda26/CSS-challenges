var a=document.getElementById("lists");
var b=a.getElementsByTagName("a");
function dis() {
    // Show the dropdown content div.
    a.style.display = "block";
  }
  function suggest(input) {
    // Get the input value and convert it to uppercase.
    var filter = input.toUpperCase();
    // Iterate over all the links in the dropdown content div.
    for (var i = 0; i < b.length; i++) {
      // Get the text content of each link.
      var data = b[i].innerText || b[i].textContent;
      // Check if the text content of the link starts with the filter value.
      if (data.toUpperCase().startsWith(filter)) {
        // If it does, show the link and set the overflow of the dropdown content div to auto.
        b[i].style.display = "block";
        a.style.overflow = "auto";
      } else {
        // If it doesn't, hide the link.
        b[i].style.display = "none";
      }
    }
  }
function suggest(input) {
    // Get the input value and convert it to uppercase.
    var filter = input.toUpperCase();
    // Iterate over all the links in the dropdown content div.
    for (var i = 0; i < b.length; i++) {
      // Get the text content of each link.
      var data = b[i].innerText || b[i].textContent;
      // Check if the text content of the link starts with the filter value.
      if (data.toUpperCase().startsWith(filter)) {
        // If it does, show the link and set the overflow of the dropdown content div to auto.
        b[i].style.display = "block";
        a.style.overflow = "auto";
      } else {
        // If it doesn't, hide the link.
        b[i].style.display = "none";
      }
    }
  }
  function arrangeAlphabetically() {
    // Get all the links in the dropdown content div.
    var links = Array.from(b);
    // Sort the links alphabetically.
    links.sort(function(a,b) {
      // Get the text content of each link.
      var textA = a.textContent.toUpperCase();
      var textB = b.textContent.toUpperCase();
      // Compare the text content of the links and return -1, 0, or 1 depending on which link comes first alphabetically.
      if (textA < textB) {
        return -1;
      } else if (textA > textB) {
        return 1;
      } else {
        return 0;
      }
    });
    // Append the links to the dropdown content div in the sorted order.
    for (var i = 0; i < links.length; i++) {
      a.appendChild(links[i]);
    }
  }
  // When the document is loaded, call the arrangeAlphabetically() function.
  // window is the global object of the browser
  // var a=10;
  // console.log(window.a); you can access the variable 'a' using the window object 
  // addevetlistener is a method of the window object it takes two arguments the event and the function to be executed 
  window.addEventListener("DOMContentLoaded", arrangeAlphabetically);
// For each anchor tag
for (var i = 0; i < b.length; i++) {
    // Add an onclick event listener,on clicking the anchor tag the value of the input field changes
    b[i].addEventListener("click", function() {
        // Get the text of the anchor tag
        var text = this.textContent;
        // Set the value of the input field to the text of the anchor tag
        document.getElementById("in").value = text;
    });
}
// Add an onclick event listener to each anchor tag
for (var i = 0; i < b.length; i++) {
    anchors[i].addEventListener("click", function() {
        // Get the text of the anchor tag
        var text = this.textContent;
        // Set the value of the input field to the text of the anchor tag
        document.getElementById("in").value = text;
    });
}
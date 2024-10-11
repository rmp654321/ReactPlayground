/*
1. Setup react in project
2. Try basic dom element maniulation with vanila js & react
*/

document.addEventListener("DOMContentLoaded", function () {
  console.clear(); // clean the console
  //createElement(); //creating elem using vanilla js
  reactElement(); //creating elem using react
});

function userInput() {
  const userInput = prompt("Please Enter Heading Text");
  return userInput;
}

function createElement() {
  const elem = document.createElement("H1");
  const msg = document.createElement("p");
  elem.textContent = userInput();
  if (elem.textContent) {
    document.body.appendChild(elem);
    console.log("User's Input is: ", elem.textContent);
  } else {
    msg.textContent =
      "You haven't entered anytging. Reload the page & try again.";
    document.body.appendChild(msg);
    console.log(msg.textContent);
  }
}

function reactElement() {
  const userIP = userInput();
  const elem = React.createElement(
    "ho",
    { id: "heading", style: { color: "red" } },
    userIP
  ); //heading element can be custom aswell like hr/ui/9h.. anything
  if (userIP != "") {
    const root2 = ReactDOM.createRoot(document.getElementById("root1")); //root element can have any custom id name
    root2.render(elem);
    console.log("User Input:", userIP); //react created VIRTUAL DOM so it doesnt support function like textContent like js
  } else {
    const errorMsg =
      "You haven't typed anything , reload the page and try again.";
    const errorElem = React.createElement(
      "span",
      { class: "error-msg" },
      errorMsg
    );
    const errorContainer = React.createElement(
      "div",
      { class: "error-msg__holder" },
      [errorElem]
    ); // [] suggests that errorElem is child of errorContainer

    const root2 = ReactDOM.createRoot(document.getElementById("root1"));
    root2.render(errorContainer);
    console.log(errorMsg);
  }
}

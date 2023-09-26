// 5.Given the following HTML:
//
// Write the code necessary to do the following:
// 1. Select the section with an id of container without using querySelector.

document.getElementById("container");

//  2. Select the section with an id of container using querySelector.

document.querySelector(("#container"));

// 3. Select all of the list items with a class of "second".

const secondListItems = document.querySelectorAll(".second");

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.

const thirdListItems = document.querySelectorAll("ol>.third");

// 5. Give the section with an id of container the text "Hello!".

// document.querySelector("#container").textContent = "Hello!";

// 6. Add the class main to the div with a class of footer.

document.querySelector(".footer").classList.add("main");

// 7. Remove the class main on the div with a class of footer.

document.querySelector(".footer").classList.remove("main");

// 8. Create a new li element.

const listItem = document.createElement("li");

// 9. Give the li the text "four".

listItem.textContent = "four";

// 10.Append the li to the ul element.

const UList = document.querySelector("ul");
UList.appendChild(listItem);

// 11.Loop over all of the lis inside the ol tag and give them a background color of "green".

const OListItems = document.querySelectorAll("ol>li");
OListItems.forEach((item)=>{
    item.style.backgroundColor = "green";
});

// 12.Remove the div with a class of footer.

const footerDiv = document.querySelector(".footer");
footerDiv.remove();
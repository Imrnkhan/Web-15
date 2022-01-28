// Javascript Basic DOM Manipulation

// What is JavaScript?
// JavaScript is a scripting or programming language that allows you to implement complex things on web pages —

// every time a web page does more than just sit there and display static information for you to look at
// displaying timely content updates
// interactive maps,
// animated 2D/3D graphics,
// scrolling video jukeboxes, etc.
// you can bet that JavaScript is probably involved.

// How to write Javascript

// <script type="text/javascript">
// function doSomething(){
//  // Your Code Goes Here
// }
// </script>
// HTML Events
// HTML events (Links to an external site.) allow JavaScript to register different event handlers on elements in an HTML document.

// click

// Execute a JavaScript when the element is clicked:

// <button onclick="function1()">MASAI Button</button>
// alert()

// Display an alert box:

// alert("Hello! I am an alert box!!");
// https://codepen.io/nrupuld/pen/gNMKWm (Links to an external site.)

// DOM
// The DOM is one of the most-used APIs on the Web because it allows code running in a browser to access and interact with every element in the document. Elements can be created, moved and changed. Event listeners can be added to elments and triggered on occurrence of a given event.
// Represented by a tree structure of all the elements created by the browser
// We can use javascript to manipulate/read/write the DOM
// https://i.imgur.com/OK78Vah.png

// Write the following out in any page and see what the response is

// // URL of a page
// document.URL
// // title of a page
// document.title
// // domain
// document.domain
// // doctype
// document.doctype
// // head
// document.head
// // body
// document.body
// // all elements
// document.all
// // forms
// document.forms
// // links
// document.links
// // images
// document.images

// // there are many more of these

// // Some of the responses will contain a list of all nodes
// // Even though this may look like an array
// // It is not
// // You can confirm this by doing Array.isArray( document.images )
// // But you can still use a for loop and access the elements via a bracket notation
// Selecting an Element
// getElementById()
// The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.
// document.getElementById() (Links to an external site.)

// Change the content inside a particular HTML ELEMENT (Links to an external site.)

// querySelectorAll
// The querySelectorAll() returns all elements that match the specified CSS selector.

// The return type is an list of elements. Note: all array methods will not work

// var elems = document.querySelectorAll(selector);

// for(var i=0; i<elems.length; i++){
//     console.log( elems[i].textContent )
// }
// Using Element Selector
// https://codepen.io/nrupuld/pen/QXMzOa (Links to an external site.)

// Using Class Selectors
// https://codepen.io/nrupuld/pen/xoLmNx (Links to an external site.)

// Element.innerHTML
//     Element.innerHTML
//     Is a DOMString representing the markup of the element's content.
// document.getElementById("id").innerHTML = "New Value"
// https://codepen.io/nrupuld/pen/qzNyYP (Links to an external site.)

// innerhtml (Links to an external site.)

// Element.textContent
//     Element.textContent
// textContent (Links to an external site.)

// document.getElementById("id").textContent = "New Value"
// value
// Get the value (Links to an external site.) of an input element

// document.getElementById("id").value
// https://codepen.io/nrupuld/pen/zVBJaa (Links to an external site.)

// Value of a select element
// https://codepen.io/nrupuld/pen/NZrOVL (Links to an external site.)

// Values and Setting Values and HTML
// https://codepen.io/nrupuld/pen/pXbOee (Links to an external site.)

// Attributes and Styling
// setAttribute

// The setAttribute() method adds the specified attribute to an element, and gives it the specified value.

// If the specified attribute already exists, only the value is set/changed.

// element.setAttribute(attributename, attributevalue)
// Adding Classes & IDs

// https://codepen.io/nrupuld/pen/VJMNBwLinks to an external site.

// Other Attributes

// https://codepen.io/albseb511/pen/OJVbJwQ (Links to an external site.)

// Using loops & conditional operators

// https://codepen.io/nrupuld/pen/KjXLpe (Links to an external site.)

// Using setAttribute() to modify certain attributes, most notably value in XUL, works inconsistently, as the attribute specifies the default value. To access or modify the current values, you should use the properties. For example, use Element.value instead of Element.setAttribute().
// getAttribute

// The getAttribute() method gets the specified attribute of an element.

// https://codepen.io/albseb511/pen/mddvErX (Links to an external site.)

// removeAttribute

// The removeAttribute() method removes a given attribute of a specific HTML element.

// ele.removeAttribute(name);
// https://codepen.io/nrupuld/pen/gNXYOg (Links to an external site.)

// style

// The HTMLElement.style property is used to get as well as set the inline style of an element.

// The style property has the same (and highest) priority in the CSS cascade as an inline style declaration set via the style attribute.

// ele.style.property = value
// https://codepen.io/nrupuld/pen/BgmBGV (Links to an external site.)

// Using loops

// https://codepen.io/nrupuld/pen/OeOJyB (Links to an external site.)

// CSS Properties DOM Notation accessed from JS

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference

// The Element.hasAttribute() method returns a Boolean value indicating whether the specified element has the specified attribute or not.

// The hasAttributes() method of the Element interface returns a Boolean indicating whether the current element has any attributes or not.

// See the Element documentation to see all the other properties and methods that can be accessed from Element:

// https://developer.mozilla.org/en-US/docs/Web/API/Element
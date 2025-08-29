### 6. I gave clear answers to the following questions:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans:- 01

i. getElementById ("id") = Selects an element by its id. Always returns a single element, because id is unique . Returns null if not found.

ii. getElementByClassName ("class") = Selects all element with the given class name. Returns an HTMLCollection, that's array like object. This is live, meaning it updates automatically if the DOM changes.

iii. querySelector ("CSS selector") = Can use any CSS selector these are id, class, tag, attribute, etc. Returns only the first matching element. This is static because dose not update automatically if DOM changes.

iv. querySelectorAll ("CSS selector") = Select All elements that match the CSS selector. Returns a NodeList. It is static and does not auto-update, and easy to loop with forEach.



2. How do you **create and insert a new element into the DOM**?

Ans:- 02

To create and insert a new element into the DOM in JavaScript, we usually follow these steps:

i. Create the element using document.createElement().

ii. Set its content or attributes (innerText, id, class).

iii. Insert it into the DOM using methods like appendChild(), prepend(), insertBefore(), etc.



3. What is **Event Bubbling** and how does it work?

Ans- 03

Event bubbling is a process in which an element, after being triggered on a specific element, propagates or "bubbles up" through its ancestors in the DOM tree. it starts from the target element and moves up to the document object.

How it works:

i. Suppose you click a <button> inside a <div>.

ii. First, the event triggers on the <button> .

iii. Then, the same event bubbles up to the parent <div>.

iv. After that, it bubbles up to <body>, and finally to <html> and document.



4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans- 04

Event Delegation is a JavaScript technique where instead of attaching event listeners to multiple child elements, we attach a single event listener to a parent element and use event bubbling to handle events from the children.

How it works:

i. Events bubble up from the target element to the parent.

ii. The parent's event listener can check which child triggered the event using event.target



5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans- 05



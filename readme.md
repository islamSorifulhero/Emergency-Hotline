### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans:- 01

i. getElementById ("id") = Selects an element by its id. Always returns a single element, because id is unique . Returns null if not found.

ii. getElementByClassName ("class") = Selects all element with the given class name. Returns an HTMLCollection, that's array like object. This is live, meaning it updates automatically if the DOM changes.

iii. querySelector ("CSS selector") = Can use any CSS selector these are id, class, tag, attribute, etc. Returns only the first matching element. This is static because dose not update automatically if DOM changes.

iv. querySelectorAll ("CSS selector") = Select All elements that match the CSS selector. Returns a NodeList. It is static and does not auto-update, and easy to loop with forEach.

2. How do you **create and insert a new element into the DOM**?
Ans:



3. What is **Event Bubbling** and how does it work?


4. What is **Event Delegation** in JavaScript? Why is it useful?


5. What is the difference between **preventDefault() and stopPropagation()** methods?

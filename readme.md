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

i. Suppose you click a <button> inside a <div>

ii. First, the event triggers on the <button>

iii. Then, the same event bubbles up to the parent <div>

iv. After that, it bubbles up to <body>, and finally to <html> and document.



4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans- 04

Event Delegation is a JavaScript technique where instead of attaching event listeners to multiple child elements, we attach a single event listener to a parent element and use event bubbling to handle events from the children.

How it works:

i. Events bubble up from the target element to the parent.

ii. The parent's event listener can check which child triggered the event using event.target



5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans- 05

preventDefault() and stopPropagation() are two different methods used in event handling to control how an event behaves.

i. event.preventDefault()

This method stops the default browser action for a given event. The default action is the natural behavior the browser performs when an event occurs. To prevent a browser's built-in action. Click a <button type = "submit"> will submit a form. Clicking an <a> tag will navigate to the URL in its href attribute. Pressing a key in a <input> field will display the character.

ii. event.stopPropagation()

This method stops the propagation or "bubbling up" of an event through the DOM tree. To prevent the event from reaching parent elements. When an event is triggered on an element it normally bubble up to all its ancestors. stopPropagation() ensures that the event listener on the current element is the last one to process it. No parent elements will be notified of the event.



## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-005

### 📅 Deadline For 60 marks: 29th August, 2025 (11:59 pm ⏱️)

### 📅 No Deadline For 50 marks

### 📅 Deadline For 30 marks: Any time after 29th August.

---

## ✅ Main Requirements (50 Marks)

### 1. Navbar

- **Website name & logo** on the left as Figma
- **Heart icon, coin count (default-100), and Copy Count** on the right as Figma

---

### 2. Hero Section

- **Background Gradient** in the Whole Section
- **A Relevant Logo** at the top-center
- **Section Title** in the center
- **A Relevant Slogan** in the bottom Center

---

### 2. Main Section

This Section will have layout as figma

<table border=1 width="100%" cellpadding="50">
<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
 </tr>
 <tr>
    <td colspan=9 >Card Section</td>
    <td colspan=3>History Section</td>
 </tr>
</table>

### Emergency Hotline Section

- **Show Minimum 6 cards**. Each card will contain:
  - Icon or Image
  - Relevant Name
  - Relevant Name in English
  - Hotline number for calling
  - Category Badge
  - 💗 icon at left
  - **2 buttons** at the bottom: Copy and Call with icons as Figma

### History Section

- **A white Background** in the whole section
- **History Title with icon** at the top-left as Figma
- **Clear History Button** at the top-right as Figma

---

### 3. Responsiveness (5 Marks)

- Website should be fully **responsive for mobile devices** (implementation up to you)

---

## Functionalities

### 4. Heart Icons

- Clicking on the 💗 **heart icon** of any card will increase the count in the Navbar

---

### 5. Call Buttons

- On clicking a card's **Call Button**, following actions will happen:
  - Show an **alert** with a message including the service name and number
  - Each call will **cut 20 coins**. Reduce Coin after each click.
  - If coins are less than 20, show a relevant alert and terminate the process.
  - Add this service into the **Call History section** with:
    - Service name
    - Service number

---

### 5. Call History Section

- Show all called services with name & number. This will empty initially. when call button clicked it will filled dynamically.
- A **Clear History button** on the right
- Clicking this button will remove all data from call history

---

## Create Readme

You have to create a `Readme.md` file. and write down following questions. Dont Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.



## 🧪 Challenges Part (10 Marks)

- On clicking the **Copy button**, show an alert and **increase the copy count** (3 Marks)

- Hotline number will be **copied on click** so it can be pasted anywhere (4 Marks)

💡Hint: You can ask for Help from `ChatGPT` Mamma . Just copy the below prompt , generate answer. use it with your own way.

```bash
I have a card with some text and a button inside it. I want that when a user clicks the button, some specific text from the card is copied to the clipboard using JavaScript. Please provide the code and explain it step by step.
```

- After clicking on the **Call button**, the **exact time of the call** will be shown in the Call History section (3 Marks)

💡Hint: Search Google with that below question

```bash
How to get current local time in js
```

---

## ⚙️ Technology Stack

- HTML
- CSS ( Vanilla , Tailwind CSS , DaisyUI , Others - wheatever you like )
- JavaScript ( Vanilla only. No Framework / Library Allowed )

---

## 📌 Rules

- ✅ Minimum **5 meaningful commits** required
- ❌ No Lorem Ipsum or dummy placeholder text. Use **relevant content only**

---

## 🔗 What to Submit

- 📂 **GitHub Repository**
- 🌐 **Live Link**

---

# Let's Code and Achieve your Dream 🎯
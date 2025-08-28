<h2> 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? </h2>
<p>Ans: getElementById:-  I can work with any of my HTML elements or trigger events on them using a specific ID. 
Getting an element by ID makes it unique, so this method returns only one element and returns a single element object. We use this when we need a specific element. For example:- <p>
<h5>const paragraph = document.getElementById('myParagraph');</h5>
<p>Above I have an HTML p tag, in which I was able to get an ID using document.getElementById</p>

<h4>getElementsByClassName:-</h4>  
<p>This method can retrieve all elements based on a specific class name. It returns an HTML Collection. Although it looks like an array, it is an array like object. 
In this method, if we add or remove new elements in an HTML, it is automatically updated. We use it when we need all elements of a particular class.
For example: <p>
<h5>const myHeading= document.getElementsByClassName('heading');</h5>
<p>Above I have 2 HTML tags, through which I was able to capture both of them with a single class using document.getElementsBClassName.</p>

<h4>querySelector:- </h4> 
<p>This is a modern and powerful method that selects an element using a CSS selector. It returns only the first element that matches the selector. With it you can select elements using id, class, tag, or any complex CSS selector. It returns a single Element Object.
For Example:-</p>
<h5>const myParagraph = document.querySelector('#myParagraph'); </h5>
<h5>const myDiv = document.querySelector('.myClass'); </h5>
<p>If the querySelector has an ID like CSS, it needs to be preceded by a hash tag and if it has a class, it needs to be preceded by a dot.</P>
<h4>querySelectoAll():-</h4> 
<p> Like querySelector(), it also uses CSS selectors. However, it selects all elements that match the selector. It returns a NodeList

If the querySelectorAll has an ID like CSS, it needs to be preceded by a hash tag and if it has a class, it needs to be preceded by a dot.

 
Javascript:</p>
<h5>const allDivs = document.querySelectorAll('.myClass'); </h5>

<h2>2. How do you create and insert a new element into the DOM?</h2>
<p>Ans: When we want to create and add a new element in the DOM, we first get the section in which we want to add the element using getElementById. Then we create a new element using document.creteElement. Then, using innerHTML, we add elements to the new div and append/appenChild to the parent to add the new div. 
For example: 
We first created a p tag.</p>
<h5>const newParagraph = document.createElement('p');</h5>

<p>Then I put some inner text in it.
newParagraph.innerText = 'This is a paragraph';
There is a div in HTML:

We took the getElementById of the div into which we will add the tag we created.const container = document.getElementById('container'); 
Finally, we append our tag to the parent div.</p>
<h5>container.appendChild(newParagraph); </h5>

<h2>3.What is Event Bubbling and how does it work?</h2>
<p>Event Bubbling is a method of event handling in JavaScript, where when an event (such as a click) is triggered, it is first executed on the innermost or child element, Then it slowly spreads upward through its parent elements. This process of rising upward like a bubble is called "bubbling."
For example:- I have a p tag inside a div and a span tag inside that p. If I click on the span tag element, the event bubbling will first fire the event handler of the span tag element. Then, The event will go to its parent p tag element and if there is an event handler there, it will be executed. Finally, the event will go to its parent div element and if there is a handler there, it will be executed.</p>

<p>This process continues until it reaches the top level of the document (e.g. body, html). It first captures the target element through event bubbling and then continues upwards through event bubbling. For example:-<p>


<div id="grandparent">
    <div id="parent">
        <button id="child">This is my button</button>
    </div>
</div>


<p>I have an HTML. I have given three elements three IDs. Now if I click on the button where id="child" above, the event will be executed in this order: #child (the event starts here first), then #parent, then #grandparent, then body, then html, Document. If the code has event listeners for the click event in all three #child, #parent, and #grandparent, then clicking the button will execute all three listeners in sequence.</p>

<h2>4. What is Event Delegation in JavaScript? Why is it useful?</h2>
<p>A:- Event delegation is a platforming system in Javascript, where you don't need to add alternative event listeners for multiple elements, but only add a single event listener to their parent element. It works based on event bubbling.
When an event (such as a click) occurs on a child element, that event propagates upward, to its parent element, due to event bubbling. We take advantage of this opportunity in event delegation. The event listener added to the parent element catches the event that is emitted. 
Then, using the event.target property, we can identify which child element was actually clicked. Element delegation is a very important method for making code more efficient and dynamic. It makes the code easier to understand and increases the beauty of the code.</p>

<h2>5. What is the difference between preventDefault() and stopPropagation() methods?</h2>
<p>Ans:- preventDefault() and stopPropagation() are two important event handling methods in JavaScript, but they do different things. preventDefault() stops the default behavior of an event, while stopPropagation() stops the propagation or bubbling of an event.</p>
<h4>==> preventDefault()</h4>
<p>This method overrides the normal or default behavior of an event. When an event occurs on a browser element, that event has a normal behavior.
Example:- Clicking the submit button on a form tag just reloads the page. To stop this reloading, we use preventDefault().</p>
<h4>==> stopPropagation()</h4>
<p>This method stops the bubbling of events. We know that when an event is clicked on a child element, it gradually propagates upward through its parent elements.
You can stop this propagation using stopPropagation(). It will stop at the first element clicked. It will not go any further.</p>

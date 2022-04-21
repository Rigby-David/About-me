## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
HTML elements which need Ids/Classes for JavaScript
    button, section, div
All other HTML elements (will need ids/classes for CSS styling)
    p, h1, h2, img, 
1. **For each HTML element ask: Why do I need this?**
    Why?
        button - reveal hidden image
        section/p - place for about me bio
        div - place for img
        h1 - about me
        h2 - 'hi my name is david'
        img - need hidden image to be revealed
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
    How?
        button - with .addEventListener('click', () => {)};
        section/p- make section in main and p in section for bio
        div - make div in second section with image
        img - put in own section with div and h2 'favorite animal'
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
    Events
        button on click will reveal hidden image
1. **Think about how to validate each of your features according to a Definition of Done**
    Check by viewing live page and confirming actions work. Or check in console.
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**
    button "display-animal-name" will depend on event listener
        

## HTML Setup
- section
    - Why do I need a section? I need somewhere to display my about me
    - How do I implement this? const sectionName = document.getElementById(), section element
- button 
    - Why? Need to display hidden image
    - How? const buttonName = document.getElementById()
    - myButton.addEventListener('click', () => {}
- 
Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)

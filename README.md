# learning-react-and-next
Following a tutorial to learn React for UI and Next.js as a framework

---------------------

There are a few things you need to consider when building modern applications. Such as:

- User Interface - how users will consume and interact with your application.
- Routing - how users navigate between different parts of your application.
- Data Fetching - where your data lives and how to get it.
- Rendering - when and where you render static or dynamic content.
- Integrations - what third-party services you use (CMS, auth, payments, etc) and how - you connect to them.
- Infrastructure - where you deploy, store, and run your application code (Serverless, CDN, Edge, etc).
- Performance - how to optimize your application for end-users.
- Scalability - how your application adapts as your team, data, and traffic grow.
- Developer Experience - your team’s experience building and maintaining your application.

Reach = UI
Next.js = framework for things like routing, data fetching, integrations


DOM MANIPULATION:

To create a new element and add content to it: 
createElement --> createTextNode --> appendChild (append content/textnode to the element) --> appendChild (append new element to whereever in the doc you want it)
        
        // Select the div element with 'app' id
        const app = document.querySelector('#app')

        // Create a new H1 element
        const header = document.createElement('h1');

        // Create a new text node for the H1 element
        const headerContent = document.createTextNode(
            'Develop. Preview. Ship. 🚀',
        );

        // Append the text to the H1 element
        header.appendChild(headerContent);

        // Place the H1 element inside the div
        app.appendChild(header);


imperative writing = step-by-step
delcarative writing = ordering the pizza --> react = declarative UI lib


USING REACT (Use the CDN scripts):

    const app = document.querySelector('#app')
    ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app);

Three core concepts of React:
- Components (= building blocks; = function that returns UI elements)
- Props
- State


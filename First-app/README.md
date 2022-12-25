# learning-react-and-next

Things to consider when building modern applications:
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


## Vanilla Javascript DOM manipulation:

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


## USING REACT

Use the CDN scripts (see index.js)

imperative writing = step-by-step
delcarative writing = ordering the pizza --> react = declarative UI lib

    const app = document.querySelector('#app')
    ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app);

Three core concepts of React:
- Components (= building blocks; = function that returns UI elements)
- Props (= you can design components that accept custom arguments (or props) that change the component’s behavior or what is visibly shown when it’s rendered to the screen. Then, you can pass down these props from parent components to child components.)
- State (e.g. a toggle button that shows on or off; e.g. use state to store and increment the number of times a user has clicked the like button)


## USING NEXT.JS (a lot of the above becomes unnecessary as Next.js handles it)

no need for CDN scripts - use npm instead:
    
    npm install react react-dom next

- no more need for an index.html file as Next.js creates html and body tags
- no more need for Babel script because Next.js has a compiler that transforms JSX into valid JavaScript browsers can understand.
- move the new index.js file into a 'pages' folder
- Add default export to your main React component to help Next.js distinguish which component to render as the main component of this page.
- Add a script to your package.json file to run the Next.js development server while you develop.
    {
    "scripts": {
        "dev": "next dev"
    },
- next has fast refresh so that you dont need to run 'npm run dev' when you make a change and save a file

In sum:
1. create index.js
2. npm install react react-dom next
3. Include the following code to index.js as a skeleton:
    
    export default function HomePage() {
        return (
            <div></div>
        );
    }




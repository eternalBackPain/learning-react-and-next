1. npm start
2. index.js references App.js which renders the single page app
3. create a folder for components and import those components into App.js or other components
4. props are the parameters to each component (pass them into the const and 'construct' the component in App.js as you would an xml tag)
5. for routing: npm i react-router-dom
- wrap whole return in <Router>
- wrap routes in <Router>
- instead of using the <a> tag and having the page reload, we can use the Link component

5. got lazy writing these notes - refer to src files for comments

To build for production:
1. npm run build
2. deploy the new 'build' folder
- To download the node package for a http server: sudo npm i -g serve
- To then serve on our prod server local host 8000: serve -s build -p 8000
1. npx create-react-app <Project-Name>
2. npm run dev
3. No need to define routes (as you would in traditional React) --> put pages into pages folder
4. create components folder for any components that are not pages (use lowerCase for pages and UpperCase for components)
5. Make a Layout component to wrap around the _app.js return and reference it's children (= all the pages you create) in the parameter of the component in order to apply the styles once you've imported them into Layout.js
6. For routing: create a nav bar component with its own styling file, and import this into Layout.js as we want the nav to be in every page
7. To use getStaticProps (for fetching data), pass the response as a prop (an object) into the main function
8. Note how we include each article as its own page - we have a articles folder in the pages folder, with an index.js file as a React component using the getServerSideProps func to call the response data of the fetch (can also use getStaticPaths for more stuff)
9. APIs: You can use the api folder to make your own APIs, and have the app call to that api (instead of calling to an external API as we've done). This is done by setting up functions that take in a request and a response. 
10. Consider making a default meta component so that you dont need to import the Head every time and add it to Layout.js

X. Build then deploy on Vercel

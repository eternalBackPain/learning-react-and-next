// const app = document.querySelector('#app')

// function Header() {
//     return ( < h1 > Develop.Preview.Ship.🚀 < /h1>)
//     }

//     ReactDOM.render(Header(), app);

function Header() {
    return <h1> Develop.Preview.Ship.🚀 </h1>;
}
function HomePage() {
    return (<div>
        <Header/>
        </div>
    );
}

ReactDOM.render(<HomePage/>, app);
import React, { Component } from 'react';

// class App extends Component {
//     render() {
//         return <h1>helloWorld</h1>;
//     }
// }

const App = () => {
    return (
        <div>
            <Cat />
            <Cat />
            <Cat />
            <Cat />
        </div>
    )
}

const Cat = () => {
    return <div>Meow!</div>
}

export default App;
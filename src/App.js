import React from "react";

function Potato({fav}) {
    return (
        <div>
            <h3>TEST {fav}</h3>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Potato
                fav="kimchi"
                something={["hello", 1, 2, true]}
            />
            <Potato fav="san"/>
            <Potato fav="mov"/>
        </div>
    );
}

export default App;
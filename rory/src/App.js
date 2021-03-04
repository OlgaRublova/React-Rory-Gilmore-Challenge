import './App.css';
import Bookshelf from "./components/Bookshelf"
import React, {useState, useEffect} from 'react';
import Title from "./components/Title";
import Gallery from "./components/Header/Gallery/Gallery";
import Header from "./components/Header/Header";


function App() {
    const [loading, setLoading] = useState(false);

    const loadAnswerLayout = () => {
        setLoading(true);
        console.log("click");
    }


    return (
        <main>
            <Title title="Rory Gilmore Reading Challenge"/>
            <Header loadAnswerLayout={loadAnswerLayout}/>
            <Bookshelf/>

        </main>
    );
}

export default App;

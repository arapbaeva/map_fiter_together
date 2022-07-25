import React, {useState} from 'react';
import './App.css';
import NewComponent from "./NewComponent";

export type FilterType = 'All' | 'Dollar' | 'Ruble'

function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollar', value: 100, number: ' a1234567890'},
        {banknots: 'Dollar', value: 50, number: ' z1234567890'},
        {banknots: 'Ruble', value: 100, number: ' w1234567890'},
        {banknots: 'Dollar', value: 100, number: ' e1234567890'},
        {banknots: 'Dollar', value: 50, number: ' c1234567890'},
        {banknots: 'Ruble', value: 100, number: ' r1234567890'},
        {banknots: 'Dollar', value: 50, number: ' x1234567890'},
        {banknots: 'Ruble', value: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<FilterType>('All')
    let currentMoney = money;
    if (filter === 'Ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Ruble')
    }
    if (filter === "Dollar") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollar')
    }
    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }


    return (
        <div className="App">

            <NewComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>

        </div>
    );
}

export default App;

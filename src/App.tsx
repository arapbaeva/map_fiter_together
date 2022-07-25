import React, {useState} from 'react';
import './App.css';


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
const [filter, setFilter] = useState('All')
    let currentMoney = money;
    if (filter === 'Ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Ruble')
    }
    if (filter === "Dollar") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollar')
    }
    const onClickFilterHandler = (nameButton: string) => {
        setFilter(nameButton)
    }

    return (
        <div className="App">
            <ul> {currentMoney.map((el, index) => {
                return (
                    <li key={index}>
                        <span>{el.banknots}</span>
                        <span>{el.value}</span>
                        <span>{el.number}</span>
                    </li>
                )
            })}
            </ul>
            <button onClick={() => onClickFilterHandler('All')}>All</button>
            <button onClick={() => onClickFilterHandler('Dollar')}>Dollar</button>
            <button onClick={() => onClickFilterHandler('Ruble')}>Ruble</button>


        </div>
    );
}

export default App;

import React from 'react'
import {FilterType} from "./App";


type NewComponentPropsType = {
    currentMoney: Array<MoneyType>
    onClickFilterHandler: (nameButton: FilterType) => void
}

type MoneyType = {
    banknots: string
    value: number
    number: string
}
function NewComponent(props: NewComponentPropsType) {
    return (
        <div>
            <ul> {props.currentMoney.map((el, index) => {
                return (
                    <li key={index}>
                        <span>{el.banknots}</span>
                        <span>{el.value}</span>
                        <span>{el.number}</span>
                    </li>
                )
            })}
            </ul>

            <button onClick={() => props.onClickFilterHandler('All')}>All</button>
            <button onClick={()=>props.onClickFilterHandler('Dollar')}>Dollar</button>
            <button onClick={()=>props.onClickFilterHandler('Ruble')}>Ruble</button>

        </div>
    );
};

export default NewComponent

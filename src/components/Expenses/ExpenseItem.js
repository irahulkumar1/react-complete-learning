import React from 'react';
import "../../style/ExpenseItem.css"
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Cards'

function ExpenseItem(props) {

    const clickHandler = () => {
        { console.log('clicked') }
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description" >
                <h2>{props.title}</h2>
                <div className="expense-item__price">$ {props.amount}</div>
                <button onClick={clickHandler}>change title</button>
            </div>
        </Card>
    )
}
export default ExpenseItem;
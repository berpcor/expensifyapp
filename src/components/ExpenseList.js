import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export default ExpenseList = (props) => {
    return (
        <div>
            <h1>Expense List</h1>
            
            {
                props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense}/>)
            }


        </div>
    );
};

// Привязка к Storeв части, которая необходима для данного компонента.
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);

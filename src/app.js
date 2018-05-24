// import validator from 'validator';

// console.log(validator.isEmail('mail@mail.ru'));
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {addExpense, editExpense, removeExpense} from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import filtersReducer from './reducers/filters';
import expensesReducer from './reducers/filters';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Инициализация хранилища состояний.
const store = configureStore();
// Добавление первой траты.
// store.dispatch(addExpense({description: "Water bill", amount: 4500}));
// // Добавление второй траты.
// store.dispatch(addExpense({ description: "Gas bill", createdAt: 1000 }));

// store.dispatch(addExpense({ description: "Rent", amount: 109500 }));


// // Применение фильтра
// store.dispatch(setTextFilter("water"));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);



const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));








 
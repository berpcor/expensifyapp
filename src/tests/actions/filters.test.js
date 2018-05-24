import moment from 'moment';
import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters';

test('Генерация обхекта для экшена задания начальной даты выборки', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Генерация объекта для экшена задания конечной даты выборки', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('Создание объекта для экшена сортировки по дате', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE",
        sortBy: "date"
    });
});

test('Создание объекта для экшена сортировки по дате', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT",
        sortBy: "amount"
    });
});

test('Создание объекта для задания текстового фильтра', () => {
    const str = '123';
    const action = setTextFilter(str);
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "123"
    });
});

test('Создание объекта для задания текстового фильтра - defaults', () => {

    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    });
});
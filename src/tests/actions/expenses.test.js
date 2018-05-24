import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('Должен создаться объект для экшена УДАЛЕНИЯ траты', 
    () => {
        const action = removeExpense({id: '123abc'});
        expect(action).toEqual({
            type: "REMOVE_EXPENSE",
            id: '123abc'
        });
    }
)

test('Должен создаться объект для экшена РЕДАКТИРОВАНИЯ траты',
    () => {
        const action = editExpense('123abc', {note: 'New'});
        expect(action).toEqual({
            type: "EDIT_EXPENSE",
            id: '123abc',
            updates: {
                note: 'New'
            }
        });
    }
)

test('Должен создаться объект для экшена ДОБАВЛЕНИЯ траты',
    () => {
        const expenseData = 
            {
                description: '111',
                note: '222',
                amount: '333',
                createdAt: 444
            }
        ;
        const action = addExpense(expenseData);
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: { 
                ...expenseData,
                id: expect.any(String)
            }
            
        });
    }
)


test('Должен создаться объект для экшена ДОБАВЛЕНИЯ траты со значениями по умолчанию',
    () => {
        const action = addExpense();
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {

                id: expect.any(String),
                description:'',
                note:'',
                amount:0,
                createdAt:0
            }

        });
    }
)

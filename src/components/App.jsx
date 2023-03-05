import { createStore } from 'redux';
import REDUX from 'redux';

// 1. зробили action
const deposit = (amount) => {
	// повертаємо action
	return {
		type: 'deposit',
		payload: { amount },
	};
};
// 2. зробили reducer для обробки action
function fundsReducer(state = 0, action) {
	switch (action.type) {
		case 'deposit':
			return state - action.payload.amount;
		default:
			return state;
	}
}
// 3. зробиди store для реєстрації і ініціалізації
const store = createStore(fundsReducer);

// 4. прив'язали до компонента і віправляємо action
<button onClick={REDUX.dispatch(deposit(100))}></button>;

import { combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import CalculatorReducer from './Calculator/Calculator.reducer';

const rootReduce = combineReducers({
    calculator: CalculatorReducer
})

const store = configureStore(rootReduce)

export default store
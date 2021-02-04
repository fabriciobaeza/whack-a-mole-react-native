import { createStore } from 'redux';
import scoreReducer from './reducer';

const score = createStore(scoreReducer)

export default score;
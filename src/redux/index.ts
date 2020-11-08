import { createStore , combineReducers , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//Reducers
import authReducer from './reducers/Auth';
import userReducer from './reducers/User';
import workerReducer from './reducers/Worker';
import specialtyReducer from './reducers/Specialty';
import curriculumReducer from './reducers/Curriculum';

const reducers = combineReducers({
  auth : authReducer,
  user : userReducer,
  worker : workerReducer,
  specialty: specialtyReducer,
  curriculum : curriculumReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
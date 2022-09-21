import { configureStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'

const store =  configureStore(rootReducer, composeWithDevTools())

export default store
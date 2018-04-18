import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import global from './global'
import user from './user'


const rootReducer = combineReducers({
    global,
    user,
    router: routerReducer
})

export default rootReducer

import {configureStore} from '@reduxjs/toolkit'
import robotsReducer from '../features/robots/robotsSlice'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from '../saga/saga'

const saga = createSagaMiddleware()

export const store = configureStore({
    reducer:{
        robots:robotsReducer
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(saga)
})

saga.run(rootSaga)

export type rootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch
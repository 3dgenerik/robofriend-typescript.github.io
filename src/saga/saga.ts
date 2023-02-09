import {takeEvery, call, all, put} from 'redux-saga/effects'
import { fetchUsersPending, fetchUsersFullfiled, fetchUsersFailure } from '../features/robots/robotsSlice'
import { IRobotInfo } from '../features/robots/robotsSlice'
import axios from 'axios'

interface ResponseGenerator{
    config?:string,
    data:IRobotInfo[],
    headers?:string,
    request?:string,
    status?:string,
    statusText?:string
}

const fetchRobots = (url:string) => {
    return axios.get(url)
}

function* workerGetFetchRobots(action:{type:string, payload:string}){
    try{
        const response: ResponseGenerator = yield call(fetchRobots, action.payload)
        yield put(fetchUsersFullfiled(response.data))
    }catch(err){
        yield put(fetchUsersFailure('Something went wrong'))
    }
}

function* getFetchRobots(){
    yield takeEvery(fetchUsersPending.type, workerGetFetchRobots)
}

export default function* rootSaga(){
    yield all([
        call(getFetchRobots)
    ])
}
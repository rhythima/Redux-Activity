import {takeEvery,put} from 'redux-saga/effects'
import { SET_USER_DATA, USER_LIST } from './constants'

function* userList(){
    const url='https://dummyjson.com/products'
    let data= yield fetch(url)
    data= yield data.json()
    yield put({type:SET_USER_DATA,data})
}

function*  SagaData(){
yield takeEvery(USER_LIST,userList)
}
export default SagaData
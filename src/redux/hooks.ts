import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux'
import { rootState, appDispatch } from './store'

export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector
export const useAppDispatch = () => useDispatch<appDispatch>()
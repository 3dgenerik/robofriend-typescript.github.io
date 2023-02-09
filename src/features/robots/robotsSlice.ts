import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IRobotInfo{
    id: number,
    name: string,
    username: string,
    email: string,
    adress: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: number,
            lng: number
            }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }  
}

interface IInitialState{
    isLoaded: boolean,
    robots:IRobotInfo[],
    error:string
}

const initialState:IInitialState = {
    isLoaded: false,
    robots:[],
    error:''
}

const robotsSlice = createSlice({
    name:'robots',
    initialState,
    reducers:{
        fetchUsersPending:((state:IInitialState, action:PayloadAction<string>) => {
            state.isLoaded = true
        }),

        fetchUsersFullfiled:((state:IInitialState, action:PayloadAction<IRobotInfo[]>)=>{
            state.isLoaded = false
            state.robots = action.payload
        }),

        fetchUsersFailure:((state:IInitialState, action:PayloadAction<string>) => {
            state.isLoaded = false
            state.robots = []
            state.error = action.payload
        })
    }
})

export default robotsSlice.reducer
export const {fetchUsersPending, fetchUsersFullfiled, fetchUsersFailure} = robotsSlice.actions
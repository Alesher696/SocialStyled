import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {setIsLoggedInAC, setUserDataAC} from "features/login/auth-reducer";
import {createAppAsyncThunk} from "common/utils";
import {authAPI} from "features/login/auth-api";


const initializedApp = createAppAsyncThunk(
    'app/initialized',
    async (_, thunkAPI) => {
        const {dispatch, rejectWithValue} = thunkAPI

        try {
            const result = await authAPI.authMe()
            if (result.data.resultCode === 0) {
                dispatch(setUserDataAC(result.data.data))
                dispatch(setIsLoggedInAC(true))
                // dispatch(setIsInitializedAC(true))
            }
            return {isInitialized: true}
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

const slice = createSlice({
    name: 'app',
    initialState: {isInitialized: false},
    reducers: {
        setIsInitialized: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
            // return {...state, isInitialized: action.isInitialized}
            state.isInitialized = action.payload.isInitialized
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(initializedApp.fulfilled,(state,action)=>{
            state.isInitialized = action.payload.isInitialized
        })
    }
})

export const appReducer = slice.reducer
export const appActions = slice.actions
export const tasksThunks = {initializedApp}



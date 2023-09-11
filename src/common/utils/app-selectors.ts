import {RootState} from "app/store";


export const selectIsInitialized = (state: RootState) => state.app.isInitialized




//
// export const selectApp = () => {
//     const isInitialized = (state: RootState) => state.app.isInitialized
//     return {isInitialized}
// }
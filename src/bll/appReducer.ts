import {AppActionsType} from "./store";

const initialState: InitialStateType = {
    isOpenDiologs: 'close',
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-IS-DIOLOGS':
            return {...state, isOpenDiologs: action.diologs}
        default:
            return {...state}
    }
}

// actions
export const setAppOpenDiologsAC = (diologs: string) => ({type: 'APP/SET-IS-DIOLOGS', diologs} as const)


// types
export type InitialStateType = {
    isOpenDiologs: string
}

export type SetAppOpenDiologsActionType = ReturnType<typeof setAppOpenDiologsAC>
export type ActionsTypeApp = | SetAppOpenDiologsActionType


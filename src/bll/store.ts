import {combineReducers, legacy_createStore as createStore } from 'redux'
import {ProfileActionsType, profileReducer} from "./profileReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {ActionsTypeApp, appReducer} from "./appReducer";
import {NewsActionsType, newsReducer} from "./newsReducer";


export const rootReducer = combineReducers({
    profile: profileReducer,
    app: appReducer,
    news: newsReducer,
})

export const store = createStore(rootReducer);


export type RootStateType = ReturnType<typeof store.getState>
export type AppActionsType = | ProfileActionsType | ActionsTypeApp | NewsActionsType
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

// @ts-ignore
window.store = store
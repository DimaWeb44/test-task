import {AppActionsType} from "./store";
import uuid from 'react-uuid';
import {formatDate} from "../utils/formatDate";

const initialState: InitialStateType = {
    profile: {
        name: 'User Name',
        avatar: '',
        email: 'enter  email',
        phone: 'enter phone',
    },
    posts: [{
        id: '1',
        text: 'First post',
        date: '8 сентября 2022 в 17:38',
    }],
    post: {
        id: '',
        text: ''
    }
}

export const profileReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'profile/SET-NEW-NAME':
            return {...state, profile: {...state.profile, name: action.value}}
        case 'profile/SET-NEW-AVATAR':
            return {...state, profile: {...state.profile, avatar: action.avatar}}
        case 'profile/SET-NEW-EMAIL':
            return {...state, profile: {...state.profile, email: action.email}}
        case 'profile/SET-NEW-PHONE':
            return {...state, profile: {...state.profile, phone: action.phone}}
        case 'profile/ADD-NEW-POST':
            return {...state, posts: [{id: uuid(), text: action.text, date: formatDate()}, ...state.posts]}
        case 'profile/REMOVE-POST':
            return {...state, posts: [...state.posts].filter(p => p.id !== action.idPost)}
        case 'profile/SET-TEXT-ID-POST':
            return {...state, post: {...state.post, id: action.idPost, text: action.text}}
        case 'profile/CHANGE-POST-TEXT':
            return {
                ...state, posts: [...state.posts].map(p => p.id === action.idPost
                    ? {...p, text: action.newText, date: `Updated ${formatDate()}`}
                    : p)
            }
        default:
            return state
    }
}

// actions
export const setNewNameAC = (value: string) =>
    ({type: 'profile/SET-NEW-NAME', value} as const)
export const setNewEmailAC = (email: string) =>
    ({type: 'profile/SET-NEW-EMAIL', email} as const)
export const setNewPhoneAC = (phone: string) =>
    ({type: 'profile/SET-NEW-PHONE', phone} as const)
export const setNewAvatarAC = (avatar: string | unknown) =>
    ({type: 'profile/SET-NEW-AVATAR', avatar} as const)
export const addNewPostAC = (text: string) =>
    ({type: 'profile/ADD-NEW-POST', text} as const)
export const removePostAC = (idPost: string) =>
    ({type: 'profile/REMOVE-POST', idPost} as const)
export const changePostAC = (idPost: string, newText: string) =>
    ({type: 'profile/CHANGE-POST-TEXT', idPost, newText} as const)
export const setTextIdPostAC = (idPost: string, text: string) =>
    ({type: 'profile/SET-TEXT-ID-POST', idPost, text} as const)

//types
export type SetNewNameACType = ReturnType<typeof setNewNameAC>
export type SetNewAvatarACType = ReturnType<typeof setNewAvatarAC>
export type setNewEmailACType = ReturnType<typeof setNewEmailAC>
export type setNewPhoneACType = ReturnType<typeof setNewPhoneAC>
export type addNewPostACType = ReturnType<typeof addNewPostAC>
export type removePostACType = ReturnType<typeof removePostAC>
export type changePostACType = ReturnType<typeof changePostAC>
export type setTextIdPostACType = ReturnType<typeof setTextIdPostAC>
export type ProfileActionsType =
    | SetNewNameACType
    | SetNewAvatarACType
    | setNewEmailACType
    | setNewPhoneACType
    | addNewPostACType
    | removePostACType
    | changePostACType
    | setTextIdPostACType
export type PostType = {
    id: string
    text: string
    date: string
}
type InitialStateType = {
    profile: {
        name: string
        avatar: string | unknown
        email: string
        phone: string
    }
    posts: Array<PostType>
    post: {
        id: string
        text: string
    }
}
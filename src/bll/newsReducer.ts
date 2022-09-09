import {AppActionsType} from "./store";
import uuid from 'react-uuid';

const initialState: InitialStateType = {
    news: [
        {
            id: uuid(),
            img: 'https://hdwallsbox.com/wallpapers/m/1/cars-maserati-m624.jpg',
            title: 'Title 1',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            category: 'Cars'
        },
        {
            id: uuid(),
            img: 'https://bingo.co.id/wp-content/uploads/2020/02/pengertian-ekonomi.jpg',
            title: 'Title 2',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            category: 'Economy'
        },
        {
            id: uuid(),
            img: 'https://coinspot.io/wp-content/uploads/2020/06/2139-400x267.jpg',
            title: 'Title 3',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            category: 'Economy'
        },
        {
            id: uuid(),
            img: 'https://mama-creative.com/wp-content/uploads/2021/08/head_0.jpg',
            title: 'Title 4',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            category: 'IT'
        },
        {
            id: uuid(),
            img: 'https://million-wallpapers.ru/wallpapers/4/63/small/14548744763004356938.jpg',
            title: 'Title 5',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            category: 'Cars'
        },
        {
            id: uuid(),
            img: 'https://colorlava.com/wp-content/uploads/2013/11/1.jpg',
            title: 'Title 6',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            category: 'IT'
        },
        {
            id: uuid(),
            img: 'https://t3.ftcdn.net/jpg/02/67/08/32/240_F_267083242_UlUthF5N8t7IVURz8T33VCr0Rg8CAwnU.jpg',
            title: 'Title 7',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            category: 'IT'
        },
        {
            id: uuid(),
            img: 'https://sbordeneg.com/images/foto/1594733849-na-pereezd.jpg',
            title: 'Title 8',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            category: 'IT'
        },
        {
            id: uuid(),
            img: 'https://hdwallsbox.com/wallpapers/m/66/lamborghini-aventador-black-cars-m65435.jpg',
            title: 'Title 9',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            category: 'Cars'
        },
        {
            id: uuid(),
            img: 'https://zastavok.net/ts/auto/1425315421.jpg',
            title: 'Title 10',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            category: 'Cars'
        },
        {
            id: uuid(),
            img: 'https://2.bp.blogspot.com/-g0YVITUSzL0/WlOg2Pqh_pI/AAAAAAAAB_4/rNd8gTHbw_E7otSor1h9mY8zRqAlUGDggCLcBGAs/s1600/adm.PNG',
            title: 'Title 11',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            category: 'IT'
        },
        {
            id: uuid(),
            img: 'https://creditchik.ru/wp-content/uploads/042c61a51b981d9c9f89e2ae5f44f9b8.jpg',
            title: 'Title 12',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            category: 'Economy'
        },
        {
            id: uuid(),
            img: 'https://printcarposter.com/images/1247873-big.jpg',
            title: 'Title 13',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            category: 'Cars'
        },
        {
            id: uuid(),
            img: 'https://pbs.twimg.com/media/DXrd88ZW4AAccwa.jpg',
            title: 'Title 14',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            category: 'Economy'
        }],
    category: 'All'
}

export const newsReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'news/SET-NEW-CATEGORY':
            return {
                ...state, category: action.category
            }
        default:
            return state
    }
}

// actions
export const setNewCategoryAC = (category: string) => ({type: 'news/SET-NEW-CATEGORY', category} as const)

//types
export type setNewPhoneACType = ReturnType<typeof setNewCategoryAC>
export type NewsActionsType = setNewPhoneACType
export type ArticleType = {
    id: string
    img: string
    title: string
    text: string
    category: string
}
type InitialStateType = {
    news: Array<ArticleType>
    category: string
}

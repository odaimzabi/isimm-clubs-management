
import {atom,selector} from 'recoil'


export const User=atom({
    key:'User',
    default:null
})

export const UserSelector = selector({
    key: 'UserSelector',
    get: ({get}) =>{
        return get(User)
    },
    set: ({set}, user) => set(User, user),
  });
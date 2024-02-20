/*

import {atom, selector} from 'recoil'

export const networkAtom = atom ({
    key: "networkAtom",
    default: 104
})

export const jobsAtom = atom ({
    key: "jobsAtom",
    default: 10
})

export const notificationsAtom = atom ({
    key: "notificationsAtom",
    default: 92
})

export const messagingAtom = atom ({
    key: "messagingAtom",
    default: 10
})


// export const notifictions = atom ({
//     key: "networkAtom",
//     default: selector({
//         key: "networkAtomSelector",
//         get: async() => {
//             const res = await axios.get("https://")
//             return res.data
//         }
//     })
// })


export const totalNotficationSelector = selector({
    key: "totalNotficationSelector",
    get: ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationsAtomCount = get(notificationsAtom);
        const messagingAtomCount = get(messagingAtom);

        return (networkAtomCount + jobsAtomCount + messagingAtomCount + notificationsAtomCount);
    },
})

*/

import {atom, atomFamily} from 'recoil'
import {TODOS} from "./todos"

export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: id => {

        // const foundTodo = null;
        // for(let i=0; i<TODOS.length; i++){
        //     if(TODOS[i].id === id){
        //         foundTodo = TODOS[i]
        //     }
        // }
        // return foundTodo

        return TODOS.find(x => x.id === id) // === checks without performing type conversion 
    },
});

const todoAtom = atom({
    key: "todoAtom",
    default: 1
})
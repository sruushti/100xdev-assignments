//LinkedIn topbar

/*
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotficationSelector } from './atoms'
import {useMemo} from 'react'

function App() {

  return (
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const notificationsCount = useRecoilValue(notificationsAtom)
  const messagingCount = useRecoilValue(messagingAtom)
  const totalNotificationCount =  useRecoilValue(totalNotficationSelector)

  // const totalNotificationCount = useMemo(() => {
  //   return networkNotificationCount + jobsCount + notificationsCount + messagingCount;
  // }, [networkNotificationCount, jobsCount, notificationsCount, messagingCount]) 

  return (
    <>
      <button>Home</button>
      <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsCount >= 100 ? "99+" : jobsCount})</button>
      <button>Notifications ({notificationsCount >= 100 ? "99+" : notificationsCount})</button>
      <button>Messaging ({messagingCount >= 100 ? "99+" : messagingCount})</button>
      <button>Me {totalNotificationCount}</button>
    </>
  )
}

// function ButtonUpdater() {
//   const setMessagingAtomCount = useSetRecoilState(messagingAtom)
//   return (
//     <button onClick = {() => {setMessagingAtomCount((c) => c + 1)}}>
//       Me
//     </button>
//   )
// }


export default App
*/

import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil'
import {todosAtomFamily} from './atoms'

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2}/>
  </RecoilRoot>
}

function Todo ({id}) {
  const currenntTodo = useRecoilValue(todosAtomFamily(id));
  return (
    <>
      {currenntTodo.title}
      {currenntTodo.description}
      <br/>
    </>
  )
}

export default App
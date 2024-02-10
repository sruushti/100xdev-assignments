//LinkedIn topbar
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from './atoms'

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
  return (
    <>
      <button>Home</button>
      <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsCount >= 100 ? "99+" : jobsCount})</button>
      <button>Notifications ({notificationsCount >= 100 ? "99+" : notificationsCount})</button>
      <button>Messaging ({messagingCount >= 100 ? "99+" : messagingCount})</button>
      <ButtonUpdater />
    </>
  )
}

function ButtonUpdater() {
  const setMessagingAtomCount = useSetRecoilState(messagingAtom)
  return (
    <button onClick = {() => {setMessagingAtomCount((c) => c + 1)}}>
      Me
    </button>
  )
}

export default App

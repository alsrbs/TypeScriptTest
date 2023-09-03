import './App.css'
import { RecoilRoot } from 'recoil';
import AppRouter from './Router/AppRouter'
function App() {

  return (
    <>
    <RecoilRoot>
      <AppRouter/>
    </RecoilRoot>
    </>
  )
}

export default App

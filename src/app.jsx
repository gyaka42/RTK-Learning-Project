



import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/main-page'
import CounterPage from './pages/counter-page'
import TodoPage from './pages/todo-page'
import Header from './components/header'

function App() {
  

  return (
    <BrowserRouter>
    <div className='container py-3'>
    <Header />    

    <Routes>
      <Route index element={<MainPage/>} />
      <Route path='counter' element={<CounterPage/>} />
      <Route path='todo' element={<TodoPage />} />
    </Routes>
    
     
     
      
    </div>
    </BrowserRouter>
  )
}

export default App

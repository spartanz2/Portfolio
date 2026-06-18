import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import Protfolio from './Protfolio'

function Layout({children}){
    return(
      <div>
        {children}
      </div>
    )
}

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
        <Layout>
            <Routes>
              <Route path='/' element={<Navigate to="/protfolio" />} />
              <Route path='/Protfolio' element={<Protfolio />}></Route>
            </Routes>
        </Layout>
      </BrowserRouter>
  )
}

export default App

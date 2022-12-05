import { Route, Routes } from 'react-router-dom'
import Update from './component/pages/Update/Update'
import PageNotFound from './component/pages/PageNotFound/PageNotFound'
import SignIn from './component/pages/SignIn/SignIn'
import SignUp from './component/pages/SignUp/SignUp'

import Chart from './component/pages/Chart/Chart'

export default function Routing() {

    return (
        <div className='main'>
        <Routes>
            <Route path='update' element={<Update/>}/>
            <Route path='Chart' element={<Chart/>}/>
            <Route path='/' element={<SignIn/>}/>
            <Route path='SignUp' element={<SignUp/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        </div>
    )
}
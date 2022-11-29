import { Route, Routes } from 'react-router-dom'
import Home from './component/pages/Home/Home'
import PageNotFound from './component/pages/PageNotFound/PageNotFound'
import SignIn from './component/pages/SignIn/SignIn'
import SignUp from './component/pages/SignUp/SignUp'
import Shoes from './component/pages/Shoes/Shoes'

export default function Routing() {

    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='SignIn' element={<SignIn/>}/>
            <Route path='SignUp' element={<SignUp/>}/>
            <Route path='Shoes' element={<Shoes/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    )
}
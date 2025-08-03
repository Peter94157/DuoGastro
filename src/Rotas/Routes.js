import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../componentes/Home'
import MenuDetalhado from '../componentes/MenuDetalhado'

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/detalhes/:dia' element={<MenuDetalhado />} />
            </Routes>
        </BrowserRouter>

    )

}

export default RoutesApp;
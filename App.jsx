import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/vans/Vans"
import VanDetail from "./pages/vans/VanDetail"
import Layout from './components/Layout'
import Dashboard from "./pages/host/Dashboard";
import Reviews from "./pages/host/Reviews";
import Income from "./pages/host/Income";
import HostLayout from "./components/HostLayout";

import './server'

export default function App() {       
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/vans" element={<Vans />} />
                    <Route path="/vans/:id" element={<VanDetail />} />

                    <Route path="host" element={<HostLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}
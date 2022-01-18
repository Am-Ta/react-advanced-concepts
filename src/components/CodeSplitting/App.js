import React,  { Fragment, lazy, Suspense } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import '../../App.css';

// import { math } from "./components/CodeSplitting"
// import("./components/CodeSplitting").then(data => console.log(data.math.add(10, 20)));

let OtherComponent = lazy(() => import("./Other"))
let AnotherComponent = lazy(() => import("./Another"))

let AboutPage = lazy(() => import("./About")) ;
let HomePage = lazy(() => import("./Home")) ;

export default function App() {
    return (
        <Fragment>
            {/* <h1>Hello World!</h1> */}
            <Suspense fallback={<div>Loading ...</div>}>
                <OtherComponent />
                <AnotherComponent />
            </Suspense>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/about">about</Link>
            </div>
            <Router>
                <Suspense fallback={<h1>Loading ...</h1>}>
                    <Routes>
                        <Route path={"/"} element={<HomePage />} />
                        <Route path={"about"} element={<AboutPage />} />
                    </Routes>
                </Suspense>
            </Router>
        </Fragment>
    )
}
import React from "react";

import "./assets/css/bootstrap.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/animate.css";
import "./assets/css/main.css"; 
import "./assets/css/responsive.css";
import "./assets/css/renderPage.css";

import Footer from "./components/includes/Footer.js";


import AppRouter from "./config/Router.js"
const App = () => {
 
    return (
        <>   
<AppRouter />
<Footer />

        </>
    )
}

export default App;
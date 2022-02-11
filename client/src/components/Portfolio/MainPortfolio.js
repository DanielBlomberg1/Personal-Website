import React,{Fragment} from "react";
import PortfolioHeader from "./PortfolioHeader"
import PortfolioBody from "./PortfolioBody";

import '../../index.css';
const Portfolio = () =>{
    return(
        <Fragment>
            <PortfolioHeader/>
            <PortfolioBody/>
        </Fragment>
    )
}

export default Portfolio;
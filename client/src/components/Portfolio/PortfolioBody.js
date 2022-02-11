import React,{Fragment} from "react";
import "../../index.css"

const PortfolioBody = () =>{
    return(
        <Fragment>
            <section className="relative">
                <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h2 className="text-black font-bold text-4xl text-center lg:text-left mb-6">This is my life</h2>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default PortfolioBody;
import React,{Fragment} from "react";
import "../../index.css"

const PortfolioBody = () =>{
    const d = new Date();
    const years = d.getFullYear() - 2001;

    return(
        <Fragment>
            <section className="relative">
                <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h2 className="text-black font-bold text-4xl text-center lg:text-left mb-6">This is my life</h2>
                        <p className="text-slate-600 text-2xl text-left mb-6"> I am {years} years of age. And software development is my passion</p>
                        <button className="shadows-md btn btn-primary bg-violet-500 hover:bg-violet-400 border-0"> Check out my github</button>
                    </div>
                </div>
            </section>

            <section className="bg-bookmark-white py-20 mt-20 lg:mt-60 relative">
                <div className="grid grid-cols-6 grid-rows-2">
                    
                </div>
            </section>
        </Fragment>
    )
}
export default PortfolioBody;
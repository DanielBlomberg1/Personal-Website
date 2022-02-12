import React,{Fragment} from "react";
import "../../index.css"
import cpp from 'programming-languages-logos/src/cpp/cpp.svg';
import csharp from 'programming-languages-logos/src/csharp/csharp.svg';
import js from 'programming-languages-logos/src/javascript/javascript.svg';
import python from 'programming-languages-logos/src/python/python.svg';
import php from 'programming-languages-logos/src/php/php.svg';

const PortfolioBody = () =>{
    const d = new Date();
    const years = d.getFullYear() - 2001;
    
    return(
        <Fragment>
            <section className="relative">
                <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h2 className="text-black font-bold text-4xl text-center lg:text-left mb-6">This is my life</h2>
                        <p className="text-slate-600 text-2xl text-left mb-6"> I am {years} years old statistics student from Tampere Finland<br></br> with a passion for software development.</p>
                        <a target="_blank" href="https://github.com/DanielBlomberg1" rel="noopener noreferrer" className="btn bg-violet-500 text-white hover:bg-violet-400">  Check out my Github</a>
                    </div>
                    <div
                        className="hidden md:block overflow-hidden bg-violet-400 rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36"
                    ></div>
                </div>
                <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-28 lg:mt-80 ">
                    <h2 className="text-black font-bold text-4xl text-center lg:text-left mb-6">Languages that I know: </h2>
                </div>
                <div className="grid grid-cols-5 grid-rows-2 justify-items-center container w-1/2">
                    <img src={cpp} className="w-10/12 "></img>
                    <img src={js} className="w-10/12"></img>
                    <img src={csharp} className="w-10/12"></img>
                    <img src={python} className="w-10/12"></img>
                    <img src={php} className="w-10/12"></img>
                </div>
            </section>
        </Fragment>
    )
}
export default PortfolioBody;
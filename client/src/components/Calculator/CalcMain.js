import React, { Fragment, useState } from "react";
import {Link} from 'react-router-dom';
import "../../App.css";

const CalcMain = () =>{
    return(
        <Fragment>

        <div className="bg-slate-900 h-screen">
            <div className="flex">
                <h1 className="text-4xl text-white font-mono mb-5 bg-slate-500 align-text-right text-center	justify-center w-screen h-12">Calculator </h1>
                <div className="bg-slate-500 h-12">
                    <Link to="/" className="flex bg-slate-500 h-12 text-white items-center text-right w-20 hover:bg-slate-600 rounded-2xl">
                        <p className="ml-3 text-xl text-transparent bg-clip-text bg-gradient-to-br from-black  to-cyan-500 via-yellow-600 animate-gradient-x">Home</p>
                    </Link>
                </div>

            </div>
            <div className="ml-3">
                <div>
                    <h3 className="text-3xl text-slate-300 font-mono">Input here:</h3>
                    <textarea placeholder="input mathematical expression..." className="border-3 w-2/6 h-1/6 bg-slate-700 border-slate-500 p-2 align-text-top"></textarea>
                </div>
            </div>
        </div>
 
        </Fragment>
    )
};

export default CalcMain;
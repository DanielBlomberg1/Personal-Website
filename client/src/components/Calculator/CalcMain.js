import React, { Fragment, useState } from "react";
import {Link} from 'react-router-dom';
import "../../App.css";

const CalcMain = () =>{
    const operatorList = ['+','-', '/', '*'];
    const specialChars = new Map;
    specialChars.set('π', 3.14);
    specialChars.set('e', 2.7);
    

    function evaluatePart(s){
        console.log(s);
        let multipli = s.indexOf('*');
        let s1 = s.substring(0, multipli);
        let s2 = s.substring(s.length() - multipli);
    }


    function handleChange(){
        var text1 = document.getElementById('input-main').value; 
        var raturnval=0;
        text1 = text1.replace(/\s+/g, '')
        console.log(text1);

        if(text1.indexOf('(') != -1){
            if(text1.indexOf(')') != -1 ||  text1.indexOf(')') > text1.indexOf('(')){
                let partresult = text1.substring(text1.indexOf('(') + 1, text1.indexOf(')'));
                evaluatePart(partresult);
            }
        }


    };

    return(
        <Fragment>

        <div className="bg-slate-900 h-screen">
            <div className="flex">
                <h1 className="text-4xl text-violet-300 font-mono mb-5 bg-slate-500 align-text-right text-center justify-center w-screen h-12 ">Calculator </h1>
                <div className="bg-slate-500 h-12">
                    <Link to="/" className="flex bg-slate-500 h-12 items-center text-right w-20 hover:bg-slate-600 rounded-2xl">
                        <p className="ml-3 text-xl text-transparent bg-clip-text bg-gradient-to-br from-black  to-cyan-500 via-yellow-600 animate-gradient-x">Home</p>
                    </Link>
                </div>
            </div>
            <div className="ml-3">
                <div>
                    <h3 className="text-3xl text-slate-300 font-mono" >Input here:</h3>
                    <textarea id="input-main" onChange={()=>handleChange()} placeholder="input mathematical expression..." className="border-3 w-2/6 h-1/6 bg-slate-700 text-violet-100 border-slate-500 p-2 align-text-top"></textarea>
                </div>
                <div className="grid gap-4 grid-cols-6 grid-rows-6 w-2/6 h-1/6 aspect-square m-12">
                    <button className="text-4xl rounded-xl pt-1 mt-2 bg-slate-500">
                        +
                    </button>
                    <button className="text-4xl rounded-xl pt-1 mt-2 bg-slate-500">
                        -
                    </button>
                    <button className="text-4xl rounded-xl pt-1 mt-2 bg-slate-500">
                        /
                    </button>
                    <button className="text-4xl rounded-xl pt-1 mt-2 bg-slate-500">
                        *
                    </button>
                    <button className="text-4xl rounded-xl pt-1 mt-2 bg-slate-500">
                        π
                    </button>
                </div>
            </div>
        </div>
 
        </Fragment>
    )
};

export default CalcMain;
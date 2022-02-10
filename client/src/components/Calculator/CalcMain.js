import React, { Fragment, useState } from "react";
import {Link} from 'react-router-dom';
import "../../App.css";

const CalcMain = () =>{
    

    const operatorList = ['+','-', '/', '*'];
    /*
    const operatorfuncs = {
        '+': function(a, b) {return a+b},
        '-': function(a, b) {return a-b},
        '*': function(a, b) {return a*b},
        '/': function(a, b) {return a/b},
    }
    */
    const specialChars = new Map;
    specialChars.set('π', 3.14);
    specialChars.set('e', 2.7);
    

    function splitAtOperator(string){
        var smallest = 9999;
        operatorList.forEach(e=> {
            var index = string.indexOf(e);
            if(index != -1 && index < smallest){
                smallest = index;
            }
        });
        string = string.substring(0, smallest);

        return string;
    }


    function isNumber(char) {
        if (typeof char !== 'string') {
          return false;
        }
      
        if (char.trim() === '') {
          return false;
        }
      
        return !isNaN(char);
      }


    function handleChange(){
        let text1 = document.getElementById('input-main').value; 
        text1 = text1.replace(/\s+/g, '');

        let indeces = [...text1.matchAll(new RegExp("[+]", 'gi'))].map(a => a.index);
        
        while (indeces.length != 0 && indeces[0]+1 != text1.length && indeces[0] != "+"){

            let part1 = text1.substring(0, indeces[0]);
            let part2 = text1.substring(indeces[0]+1);
            part2 = splitAtOperator(part2);
            let together =part1+"+"+part2;
            if(part1.length > 0 && part2.length > 0){
                //var eval = part1 + part2;
                text1 = text1.replace(together, (parseFloat(part1)+parseFloat(part2)));
                //console.log("result = " + text1 + " part 1 = " + part1+" part2 = "+ part2);
            }
            indeces = indeces = [...text1.matchAll(new RegExp("[+]", 'gi'))].map(a => a.index);
        }
        var res = document.getElementById('result').innerHTML = text1;
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
            <div className="ml-5">
                <div>
                    <h3 className="text-3xl text-slate-300 font-mono" >Input here:</h3>
                    <div className="flex flex-row">
                        <textarea id="input-main" onChange={()=>handleChange()} placeholder="input mathematical expression..." className="border-3 w-2/6 h-1/6 bg-slate-700 text-violet-100 border-slate-500 p-2 align-text-top"></textarea>
                        <p  className="text-white font-mono text-3xl p-4 text-center">Evaluation = <span id="result"></span></p>
                    </div>

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
import React, { Fragment, useState } from "react";
import {Link} from 'react-router-dom';

import "../../App.css";

const CalcMain = () =>{
    var steps=[];
    const operatorList = ['+','-', '/', '*'];
    
    const operatorfuncs = {
        '+': function(a, b) {return a+b},
        '-': function(a, b) {return a-b},
        '*': function(a, b) {return a*b},
        '/': function(a, b) {return a/b},
    }
    
    const specialChars = new Map;
    specialChars.set('π', 3.14);
    specialChars.set('e', 2.7);
    

    function splitAtOperatorBigger(string){
        var smallest = 9999;
        operatorList.forEach(e=> {
            var index = string.indexOf(e);
            if(index != -1 && index != 0 &&  index < smallest){
                smallest = index;
            }
        });
        if(smallest!=9999){string = string.substring(0, smallest);}

        return string;
    }


    function splitAtOperatorSmaller(string){
        var smallest = 9999;
        operatorList.forEach(e=> {
            var index = string.indexOf(e);
            if(index != -1 &&  index != 0 && index < smallest){
                smallest = index;
            }
        });
        if(smallest!=9999){string = string.substring(smallest + 1);}

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


    function calculateOperation(s, operators){
        let indeces =[];

        if(operators.length > 1){
            for(let i = 0; i < operators.length; i++){
                let temmp = [...s.matchAll(new RegExp("["+operators[i]+"]", 'gi'))].map(a => a.index);
                for(let j = 0; j < temmp.length; j++){
                    indeces.push(temmp[j]);
                }
            }

            if(indeces.length > 1){indeces.sort(function(a, b){return a - b});}
        }else{
            indeces = [...s.matchAll(new RegExp("[" + operators[0] + "]", 'gi'))].map(a => a.index);
        }

        while (indeces.length != 0 && indeces[0]+1 != s.length){
            let part1 = s.substring(0, indeces[0]);
            let part2 = s.substring(indeces[0]+1);

            part1 = splitAtOperatorSmaller(part1)
            part2 = splitAtOperatorBigger(part2);

            if(!isNumber(part1) || !isNumber(part2)){
                return s;
            }

            let together = part1 + s.charAt(indeces[0]) + part2;

            steps.push(together +" = "+ (operatorfuncs[s.charAt(indeces[0])](parseFloat(part1), parseFloat(part2))).toString());

            if(part1.length > 0 && part2.length > 0){
                s = s.replace(together, (operatorfuncs[s.charAt(indeces[0])](parseFloat(part1), parseFloat(part2))));
            }

            indeces = [];
            for(let i = 0; i < operators.length; i++){
                let temmp = [...s.matchAll(new RegExp("["+operators[i]+"]", 'gi'))].map(a => a.index);
                for(let j = 0; j < temmp.length; j++){
                    indeces.push(temmp[j]);
                }
            }
            if(indeces.length > 1){indeces.sort(function(a, b){return a - b});}
        }
        return s;
    }

    function handleChange(){

        let text1 = document.getElementById('input-main').value; 
        text1 = text1.replace(/\s+/g, '');
        document.getElementById('result').innerHTML = "";

        steps = [];

        if(!isNumber(text1.charAt(0)) || !isNumber(text1.charAt(text1.length-1))){
            return;
        }

        text1 = calculateOperation(text1, ['*', '/']);
        text1 = calculateOperation(text1, ['+', '-']);
        console.log("steps: " + steps);

        let divThings = document.getElementById("steps");
        let elem = document.getElementById("tempdiv");
        if(typeof elem !== 'undefined' && elem !== null){
            elem.remove();
            
        }

        let tempdiv = document.createElement('div');
        tempdiv.id="tempdiv";

        for(let i =0; i< steps.length;i++){
            let temp = document.createElement('textare');
            temp.innerHTML = steps[i];
            temp.className = "text-white font-mono text-3xl bg-slate-900 border-1 w-1/6 flex-wrap truncate" 
            let temp2 = document.createElement('br');
            tempdiv.appendChild(temp);
            tempdiv.appendChild(temp2);
        }

        divThings.appendChild(tempdiv);
        document.getElementById('result').innerHTML = parseFloat(text1).toFixed(4);
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
            <div className="flex flex-row">
                <div className="ml-5 w-4/5">
                    <div>
                        <h3 className="text-3xl text-slate-300 font-mono" >Input here:</h3>
                        <div className="flex flex-row">
                            <textarea id="input-main" onChange={()=>handleChange()} placeholder="input mathematical expression..." className="border-3 w-2/6 h-1/6 bg-slate-700 text-violet-100 border-slate-500 p-2 align-text-top"></textarea>
                            <p  className="text-white font-mono text-3xl p-4 text-center">Evaluation = <span id="result"></span></p>
                        </div>
                    </div>
                </div>
                <div id="steps" className="w-1/4">
                    <h1 className="text-4xl text-white font-mono">Steps:</h1>
                    <br></br>
                </div>
            </div>
        </div>
        </Fragment>
    )
};

export default CalcMain;
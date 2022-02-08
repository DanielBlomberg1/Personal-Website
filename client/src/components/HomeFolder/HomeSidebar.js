import React, {useState, Fragment} from "react";
import {Link} from 'react-router-dom';

const HomeSideBar = () =>{

    return(
        <Fragment>
                <div className=" rounded-3xl bg-gray-900 w-1/4 p-6 items-center shadow-xl animate-fade-in-down flex-shrink max-w-screen-lg ">
                    <Link to="/todo" className="btn sidebar-btn-def hover:text-yellow-400">
                        <img src="https://img.icons8.com/ios-filled/100/000000/inspection.png"/>
                        <button ><span></span></button>
                        Todo application
                    </Link>
                    <hr className="h-20"></hr>
                    <Link to ="/photos" className="btn sidebar-btn-def hover:text-green-400">
                        <img src="https://img.icons8.com/ios/100/000000/apple-camera.png"/>
                        <button></button>
                        Photo collection
                    </Link>
                    <hr className="h-20"></hr>
                    <Link to ="/calc" className="btn sidebar-btn-def hover:text-green-400">
                        <img src="https://img.icons8.com/ios/100/000000/apple-calculator.png"/>
                        <button></button>
                        calculator app
                    </Link>
                </div>
                 <div class="w-1/2"></div>
        </Fragment>
    )
};

export default HomeSideBar;
import React, { Fragment, useState } from "react";
import "../../App.css";
const MainHome = () =>{
    const clickedAmount= 0
    return(
        <Fragment>
            <div className=" bg-black h-screen">
                <h1 class="font-mono text-white text-4xl text-center">My Website</h1>
                <p class="animate-wiggle font-mono text-white mb-5 text-2xl max-w-screen-lg" >this is a collection of several pages</p>
                <div class="mt-6 ml-2 flex flex-row">
                    <div class="rounded-3xl bg-gray-900 w-1/4 p-6 items-center shadow-xl animate-fade-in-down flex-shrink max-w-screen-lg">
                        <div class="flex justify-center items-center space-x-3 mt-3 mb-3">
                            <img src="https://img.icons8.com/ios-filled/100/000000/inspection.png"/>
                            <h3 class="text-3xl text-white font-mono shadow-2xl">Todo application</h3>
                        </div>
                        <hr></hr>
                        <div class="flex justify-center items-center space-x-3 mt-3 mb-3">
                            <img src="https://img.icons8.com/ios/100/000000/apple-camera.png"/>
                            <h3 class="text-3xl text-white font-mono shadow-2xl">Photo collection</h3>
                        </div>
                    </div>
                    <div class="w-1/2">

                    </div>
                    <div class="mx-20 mt-20">
                        <h3 class="text-white text-sm font-mono">This button has been clicked {clickedAmount} times</h3>
                        <button class="btn btn-danger w-fit">
                            Click me
                        </button>
                    </div>
                </div>




            </div>
        </Fragment>
    )
};

export default MainHome;
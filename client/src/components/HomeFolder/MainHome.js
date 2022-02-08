import React, { Fragment, useState } from "react";
import HomeSideBar from "./HomeSidebar";
import "../../App.css";
const MainHome = () =>{
    const [count, setCount] = useState(0);

    return(
        <Fragment>
            <div className=" bg-black h-screen">
                <h1 class="font-mono text-white text-4xl text-center ml-2">My Website</h1>
                <p class="animate-wiggle font-mono text-white mb-5 text-2xl max-w-screen-lg ml-40" >My web apps</p>
                <div class="mt-6 ml-2 flex flex-row">

                    <HomeSideBar/>

                    <div class="mx-20  bg-gray-900 rounded-3xl p-6 ">
                        <h3 class="text-white text-2xl font-mono text-center btn-text-1">This button has been clicked {count} times</h3>
                        <div class= " mt-4 content-center justify-center items-center flex ">
                            <button class="btn btn-danger  text-5xl flex " onClick={() => setCount(count + 1)}>
                                click this
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default MainHome;
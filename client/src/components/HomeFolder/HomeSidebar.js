import React, {useState, Fragment} from "react";

const HomeSideBar = () =>{
    const [cls, setCls] = useState("text-white");

    return(
        <Fragment>
                <div class="rounded-3xl bg-gray-900 w-1/4 p-6 items-center shadow-xl animate-fade-in-down flex-shrink max-w-screen-lg">
                    <div class="sidebar-btn-def">
                        <img src="https://img.icons8.com/ios-filled/100/000000/inspection.png"/>
                        <button class="text-3xl text-white font-mono shadow-2xl"><span>Todo application</span></button>
                    </div>
                    <hr></hr>
                    <div class="sidebar-btn-def">
                        <img src="https://img.icons8.com/ios/100/000000/apple-camera.png"/>
                        <button class="text-3xl font-mono shadow-2xl text-white hover:text-green-600"><span>Photo collection</span></button>
                    </div>
                </div>
                 <div class="w-1/2"></div>

        </Fragment>
    )
};

export default HomeSideBar;
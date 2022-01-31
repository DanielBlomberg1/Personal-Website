import React, {Fragment} from "react";

const HomeSideBar = () =>{
    return(
        <Fragment>
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
                 <div class="w-1/2"></div>

        </Fragment>
    )
};

export default HomeSideBar;
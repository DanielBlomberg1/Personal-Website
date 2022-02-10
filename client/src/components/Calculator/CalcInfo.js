import {React,Fragment} from "react"
import "../../App.css";
const CalcInfo = () =>{
    return(
        <Fragment>
            <div className="ml-5 mt-20">
                <h1 className="">Whats this?</h1>
                <h2> * This is an calculator app that shows the steps it takes it solve problems</h2>
                <br></br>
                <h1>How to use it</h1>
                <h2> * Type a math problem into the textbox above. </h2>
                <h2> &#9; If you use illegal characters the program will not make any output</h2>
                <br></br>
                <h1>What kind of problems does it solve?</h1>
                <h2> * Currently usable operators are ( +, -, *, / )</h2>
                <h2> * Solve for x kind of operations are not currently possible.</h2>
            </div>
        </Fragment>
    )
}
export default CalcInfo;
import React, {Fragment} from 'react';
import BackHome from './BackHome';
import InputTodo from './InputTodo';
import ListTodos from './ListTodos';

const FullTodo = () => {
    return( 
    <Fragment>
        <BackHome/>
        <div className="bg-todobg bg-[length:200px_100px]">
            <div className="container bg-slate-200 shadow-xl">
                <InputTodo/>
                <ListTodos/>
            </div>
        </div>
    </Fragment>
       
    );
};

export default FullTodo;

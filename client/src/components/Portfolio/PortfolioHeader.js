import React, {Fragment} from "react";
import {Link} from 'react-router-dom';

const PortfolioHeader = () => {
    return(
    <Fragment>
        <header className="border">
            <nav class="container flex items-center py-2 mt-4 sm:mt-12">
                <ul class="hidden sm:flex flex-1 justify-end items-center gap-8  uppercase text-xs">
                    <Link to="/" class="cursor-pointer hover:text-violet-400">Homepage</Link>
                    <Link to="/contact" class="cursor-pointer hover:text-violet-400">Contact</Link>
                    <a target="_blank" href="https://github.com/DanielBlomberg1" rel="noopener noreferrer">Github</a>
                </ul>
                <div class="flex sm:hidden flex-1 justify-end">
                    <i class="text-2xl fas fa-bars"></i>
                </div>
            </nav>
        </header>
    </Fragment>
    )
}

export default PortfolioHeader;
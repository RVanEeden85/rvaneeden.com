"use client"

const CopyrightBar = () => {

    const year = new Date().getFullYear();

    return ( 

        <div className="h-18 w-full bg-black/50 text-white text-sm flex items-center justify-center border-t-1  border-gray-500 ">
            <span className="">© {year} All rights reserved. Created by <a href="https://www.codestudioworks.com" className="hover:text-blue-300 hover:tracking-widest transition-all duration-500" target="_blank">CodeStudioWorks.com</a> </span>
        </div>

     );
}
 
export default CopyrightBar;
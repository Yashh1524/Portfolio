import React from "react";

const MyCustomComponent = () => {
    return (
        <div className="grid p-2 bg-white border-2 border-black 
                        md:grid-cols-1 md:grid-rows-4 
                        lg:grid-cols-3 lg:grid-rows-2 gap-2 w-full h-full">
            
            {/* Red Box - Full width on sm/md, 1 col on lg */}
            <div className="bg-red-500 border border-black 
                            md:col-span-1 md:row-span-1 
                            lg:col-span-1 lg:row-span-1">
            </div>

            {/* Other Boxes */}
            <div className="bg-yellow-400 border border-black 
                            md:col-span-1 md:row-span-1 
                            lg:col-span-2 lg:row-span-1">
            </div>

            <div className="bg-blue-600 border border-black 
                            md:col-span-1 md:row-span-1 
                            lg:col-span-1 lg:row-span-1">
            </div>

            <div className="bg-sky-300 border border-black 
                            md:col-span-1 md:row-span-1 
                            lg:col-span-1 lg:row-span-1">
            </div>
        </div>
    );
};

export default MyCustomComponent;
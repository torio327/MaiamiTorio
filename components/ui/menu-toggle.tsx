import React from 'react';
const Path=(props:any)=>(
    <path fill={"transparent"} strokeWidth={3} stroke={"var(--background)"} strokeLinecap={"round"} {...props}/>
)
type Props={
    isOpen:boolean,
    toggle:any
}
const MenuToggle = ({isOpen,toggle}:Props) => {

    return (
        <>
            <button onClick={toggle} className={"bg-accent rounded-full flex flex-col gap-y-2 "}>
                       <span
                           className={`bg-blue-500 text-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-90 translate-x-1 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span
                    className={`bg-blue-500 text-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-90 translate-x-1 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span
                    className={`bg-blue-500 text-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-90 translate-x-1 translate-y-1' : '-translate-y-0.5'}`}></span>
            </button>
        </>
    );
};

export default MenuToggle;
import { useEffect, useState } from "react"

export default function Drawer({ children, open, toggle }) {

    return (
        <>
            <aside className={`transform top-0 left-0 w-64 fixed bg-white h-full overflow-auto ease-in-out transition-all druation-300 z-30 ${open ? 'translate-x-0' : '-translate-x-full' }`}>
                {children}
            </aside>
            <div onClick={toggle} className={`inset-0 bg-black z-20 opacity-50 ${open ? 'fixed' : 'hidden'}`}></div>
        </>
    )
}
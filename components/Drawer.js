import { useEffect, useState } from "react"

export default function Drawer({ children, open, toggle, position }) {

    const [init_class,init] = useState('hidden');
    const drawer_class = position == 'right' ? {start:'left-full', open:'-translate-x-full',close:'translate-x-0'} : {start:'left-0',open:'translate-x-0',close:'-translate-x-full'};

    useEffect(() => {
        init('fixed');
    },[open]);

    return (
        <>
            <aside className={`transform shadow-sm top-0 w-64 ${init_class} bg-white h-full overflow-auto duration-300 ease-in-out transition-all ${drawer_class.start} z-30 ${open ? drawer_class.open : drawer_class.close }`}>
                {children}
            </aside>
            <div onClick={toggle} className={`inset-0 bg-black z-20 opacity-50 ${open ? 'fixed' : 'hidden'}`}></div>
        </>
    )
}
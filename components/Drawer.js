import { useEffect, useState } from "react"

export default function Drawer({ children, open, toggle, position }) {

    // hack to fix transition flash on first render
    const [init_class,init] = useState('hidden');
    useEffect(() => {
        init('fixed');
    },[open]);

    const drawer_class = position == 'right' ? {start:'left-full', open:'-translate-x-full',close:'translate-x-0'} : {start:'left-0',open:'translate-x-0',close:'-translate-x-full'};

    return (
        <>
            <aside className={`transform shadow-sm top-0 w-72 ${init_class} bg-white h-full overflow-auto duration-300 ease-in-out transition-all ${drawer_class.start} z-30 ${open ? drawer_class.open : drawer_class.close }`}>
                {children}
            </aside>
            <div onClick={toggle} className={`inset-0 bg-black z-20 opacity-50 ${open ? 'fixed' : 'hidden'}`}></div>
        </>
    )
}
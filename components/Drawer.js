import { useEffect, useState } from "react"

export default function Drawer({ children, open, toggle, position, full }) {

    // hack to fix transition flash on first render
    const [init_class,init] = useState('hidden');
    useEffect(() => {
        init('fixed');
        document.body.style.overflow = (open) ? 'hidden' : ''
    },[open]);

    // styling the drawer
    const width_class = !!full ? 'w-full sm:w-80' : 'w-80';
    const drawer_class = position == 'right' ? {start:'left-full', open:'-translate-x-full',close:'translate-x-0'} : {start:'left-0',open:'translate-x-0',close:'-translate-x-full'};

    return (
        <>
            <aside className={`transform shadow-sm h-screen top-0 ${width_class} ${init_class} bg-white h-full overflow-auto duration-300 ease-in-out transition-all ${drawer_class.start} z-40 ${open ? drawer_class.open : drawer_class.close }`}>
                {children}
            </aside>
            <div onClick={toggle} className={`inset-0 h-screen w-screen overscroll-contain overflow-y-scroll bg-black z-30 opacity-50 ${open ? 'fixed' : 'hidden'}`}></div>
        </>
    )
}
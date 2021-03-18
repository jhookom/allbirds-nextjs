import Head from 'next/head'
import { useState } from 'react'
import { useToggle } from '../utils/hooks'
import Drawer from '../components/Drawer'
import products from '../utils/products'

export default function Home() {
    const categories = [
        `Women's Running Shoes`,
        `Everday Sneakers`,
        `Slip-Ons`,
        `High Tops`,
        `Boat Shoes`,
        `Flats`,
        `All Weather`
    ]

    const [menuOpen,menuToggle] = useToggle(false);
    const [cartOpen,cartToggle] = useToggle(false);
    const [filterOpen,filterToggle] = useToggle(false);

    return (
        <>
            <Head>
                <title>Rebuilding Allbirds</title>
            </Head>
            <div className="bg-primary-800 text-white text-xs text-center px-4 py-2">
                <p>We're raising prices on all products by $1 today in support of the planet.  <a href="#">Learn More.</a></p>
            </div>
            <header className="sticky top-0 z-10 px-4 py-4 flex items-center justify-between bg-white shadow-lg">
                <div className="flex">
                    <button className="h-8 w-8" onClick={menuToggle}>
                        <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div className="flex">
                    <img className="h-10" src="/allbirds-logo.svg" alt="Allbirds"/>
                </div>
                <div className="flex relative">
                    <button className="h-8 w-8 relative" onClick={cartToggle}>
                        <span className="absolute bottom-0 right-0 -mr-1 -mb-1 shadow-sm bg-primary-800 rounded-full text-white text-xxs font-semibold border-primary-800 border-2 w-4">3</span>
                        <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </button>
                </div>

            </header>

            {/* Menu Drawer */}
            <Drawer open={menuOpen} toggle={menuToggle} position='left'>
                <div className="px-4 py-4">Site Menu <a onClick={menuToggle}>Close</a></div>
            </Drawer>

            {/* Cart Drawer */}
            <Drawer open={cartOpen} toggle={cartToggle} position='right' full={true}>
                <div className="px-2 py-4">
                    <div className="space-y-2">
                        <button onClick={cartToggle} className="btn w-full">
                            <svg className="h-5 w-5 animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span className="pl-2">Keep Shopping</span>
                        </button>
                        <button className="btn solid-primary w-full">Checkout</button>
                    </div>
                </div>
                <div className="px-4 py-4 bg-gray-200 shadow-inner flex justify-between text-center">
                    <h4>3 Items</h4>
                    <h4 className="text-left">$103.03</h4>
                </div>
            </Drawer>

            {/* Filter Drawer */}
            <Drawer open={filterOpen} toggle={filterToggle} position='right'>
                <div className="px-4 py-4">Search Filter</div>
            </Drawer>

            <main>
                {/* breadcrumb */}
                <div className="flex items-center justify-between px-4 py-3">
                    <div>
                        <div className="text-xs font-semibold space-x-1">
                            <a href="#" className="underline">Home</a>
                            <span>/</span>
                        </div>
                        <h3>Women's Shoes</h3>
                    </div>
                    <div className="flex">
                        <button className="h-8 w-8" onClick={filterToggle}>
                            <svg className="transform rotate-90" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Categories */}
                <div className="bg-gray-200 py-2 overflow-x-auto shadow-inner">
                    <div className="inline-flex px-4 text-sm space-x-5">
                        {categories.map(c => (
                            <a href="#" key={c} className="whitespace-nowrap text-semibold">{c}</a>
                        ))}
                    </div>
                </div>

                {/* Banner Bar */}
                <div className="py-4">
                    <div className="bg-primary-700 bg-opacity-30 px-4 py-3">
                        <div className="max-w-lg mx-auto flex space-x-4 items-center">
                            <div>
                                <svg className="h-14 w-14 text-primary-900 transform rotate-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h5>Pay It To the Planet</h5>
                                <div className="text-sm">Every Black Friday purchase supports Fridays for the Future</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products */}
                <div className="py-4 px-4 grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((p,i) => (
                        <div className="mb-8 md:h-full flex flex-col" key={i}>
                            <h3>{p.name}</h3>
                            <div className="text-sm flex-1">{p.description}</div>
                            <div className="shadow-xl bg-white my-2 rounded-md">
                                <a href="#">
                                    <div>
                                        <img className="w-full rounded-t-md object-center object-cover sm:h-64 h-40" src={`\\images\\${p.variants[0].image}`}/>
                                    </div>
                                    <div className="px-4 py-4">
                                        <h5>{p.variants[0].name}</h5>
                                        <div className="">{p.variants[0].price}</div>
                                    </div>
                                </a>
                                <div className="px-4 pb-4 flex space-x-4">
                                    {p.variants.map((v,i) => (
                                        <div key={i} className="ring-gray-300 ring-2 ring-offset-1 hover:ring-gray-500">
                                            <img className="w-10 h-10" src={`\\images\\${v.image}`} alt={v.name}/>
                                        </div>
                                    ))}
                                </div>
                                <a href="#">
                                    <div className="border-t-2 px-4 py-2 flex items-center justify-between">
                                        <div className="font-bold">Quick Add</div>
                                        <div>
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="bg-gray-800 py-8 pb-72 mt-12">
                <div className="px-6">
                    <form action="#" method="POST">
                        <div>
                            <label className="text-white text-sm block mb-1" htmlFor="email_address">
                                Enter your email to stay in touch!
                            </label>
                            <input className="block w-full rounded bg-gray-200 border-none focus:ring-0 focus:outline-none" type="text" id="email_address" placeholder="your_email@gmail.com"></input>
                        </div>
                        <div>
                            <button className="text-white mt-2 px-4 py-2 rounded uppercase font-semibold bg-gray-500 w-full block" type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
            </footer>
        </>
    )

}
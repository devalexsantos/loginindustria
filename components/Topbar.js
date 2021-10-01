import Image from 'next/image';
import { useState } from 'react';

export default function Topbar() {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div className="container flex items-center mx-auto justify-between p-3">
            <nav className="container relative flex flex-wrap items-center justify-between">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                            href="#pablo"
                        >
                            <Image
                src="/logo_top.jpg"
                alt="Picture of the author"
                width={'342px'}
                height={'68px'}
            />
                        </a>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto m-auto text-center">
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center uppercase hover:bg-primary hover:text-white rounded mx-2"
                                    href="#pablo"
                                >
                                    INÍCIO
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center uppercase hover:bg-primary hover:text-white rounded mx-2"
                                    href="#pablo"
                                >
                                    COMPUTADORES
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center uppercase hover:bg-primary hover:text-white rounded mx-2"
                                    href="#pablo"
                                >
                                    CENTRAL DE DOWNLOADS
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center uppercase hover:bg-primary hover:text-white rounded border mx-2"
                                    href="#pablo"
                                >
                                    SUPORTE
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
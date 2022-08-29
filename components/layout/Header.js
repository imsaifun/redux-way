import Link from 'next/link';
import React from 'react';
import Search from '../elements/Search';

const Header = () => {
    return (
        <>
            <nav className="bg-slate-100 shadow-md">
                <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
                    <Link href="/">
                    <a>
                        <img className="h-10" src="/lws.svg" alt="Learn with Sumit" />
                    </a>
                    </Link>

                    <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
                        <Search/>
                        <img className="inline h-4 cursor-pointer" src="/search.svg" alt="Search" />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
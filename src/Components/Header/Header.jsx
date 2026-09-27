// import React from 'react';

const Header = () => {
    return (
        <div>

<div className="navbar bg-primary text-primary-content">
  <button className="btn text-xl">daisyUI</button>
</div>

           <nav className="flex justify-between gap-4 bg-slate-400 p-4 text-white">
            <a className="btn btn-primary" href="/">Home</a>
            <a className="btn btn-primary" href="/mobiles">Mobiles</a>
            <a className="btn btn-primary" href="/laptops">Laptops</a>
            <a className="btn btn-primary" href="/about">About</a>
            </nav> 
        </div>
    );
};

export default Header;
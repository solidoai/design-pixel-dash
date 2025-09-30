import React from 'react';

const Header = () => {
  return (
    <header className="bg-[rgba(45,181,179,1)] flex w-full items-stretch gap-5 text-lg text-white font-normal flex-wrap justify-between px-[74px] py-[30px] max-md:max-w-full max-md:px-5">
      <div className="flex items-stretch gap-[40px_41px] flex-wrap max-md:max-w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/da52f61b1af1903eb988bf388b28b9143a588566?placeholderIfAbsent=true"
          className="aspect-[3.65] object-contain w-[190px] shrink-0 max-w-full"
          alt="VegaPay Logo"
        />
        <nav className="flex items-center gap-8 justify-between flex-wrap grow shrink basis-auto my-auto max-md:max-w-full">
          <a href="#inicio" className="self-stretch my-auto hover:opacity-80 transition-opacity">
            Ínicio
          </a>
          <div className="self-stretch flex items-center gap-0.5 whitespace-nowrap my-auto hover:opacity-80 transition-opacity cursor-pointer">
            <span className="self-stretch my-auto">Produtos</span>
            <img
              src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/7faab98288910c8846934dadc4e73485f14648ee?placeholderIfAbsent=true"
              className="aspect-[1.85] object-contain w-6 self-stretch shrink-0 my-auto"
              alt="Dropdown arrow"
            />
          </div>
          <a href="#quem-somos" className="self-stretch my-auto hover:opacity-80 transition-opacity">
            Quem Somos
          </a>
          <div className="self-stretch flex items-center gap-0.5 whitespace-nowrap my-auto hover:opacity-80 transition-opacity cursor-pointer">
            <span className="self-stretch my-auto">Blog</span>
            <img
              src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/cb70aeec93d6ac92cb3048c8db7e9d7566defbc5?placeholderIfAbsent=true"
              className="aspect-[1.85] object-contain w-6 self-stretch shrink-0 my-auto"
              alt="Dropdown arrow"
            />
          </div>
          <a href="#contato" className="self-stretch my-auto hover:opacity-80 transition-opacity">
            Contato
          </a>
        </nav>
      </div>
      <button className="bg-[rgba(42,42,42,1)] flex min-h-[42px] items-center gap-2.5 justify-center my-auto pl-9 py-[11px] rounded-[25px] hover:bg-[rgba(32,32,32,1)] transition-colors">
        <span className="self-stretch w-[157px] my-auto">Simule Agora</span>
      </button>
    </header>
  );
};

export default Header;

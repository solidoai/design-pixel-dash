import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[rgba(61,61,61,1)] flex w-full flex-col items-stretch font-normal py-[125px] max-md:max-w-full max-md:py-[100px]">
      <div className="self-center flex min-h-[299px] w-full max-w-[1368px] items-stretch gap-8 justify-center flex-wrap max-md:max-w-full">
        <div className="min-w-60 text-base grow shrink w-[395px] max-md:max-w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/e976b023c6ae659f911afdfacf88ae13dc73e05c?placeholderIfAbsent=true"
            className="aspect-[3.48] object-contain w-[108px] max-w-full"
            alt="VegaPay Logo"
          />
          
          <div className="w-full text-white leading-[26px] mt-6 max-md:max-w-full">
            <p className="max-md:max-w-full">
              A VegaPay é líder em empréstimos na conta de luz,<br />
              oferecendo soluções financeiras rápidas, seguras e <br />
              sem burocracia para milhares de brasileiros.
            </p>
          </div>
          
          <div className="w-full text-white mt-6 max-md:max-w-full">
            <div className="flex w-full items-center max-md:max-w-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/a6e92c5e7565ddbda980be327098c76004a3340a?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                alt="Phone icon"
              />
              <div className="self-stretch my-auto pl-3">
                <a href="tel:1199999999" className="hover:text-gray-300 transition-colors">(11) 9999-9999</a>
              </div>
            </div>
            
            <div className="flex w-full items-center whitespace-nowrap leading-loose mt-3 max-md:max-w-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/faebdcee1e5d5f03dfd774f9af1253c65fa98c2b?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                alt="Email icon"
              />
              <div className="self-stretch my-auto pl-3">
                <a href="mailto:contato@vegapay.com.br" className="hover:text-gray-300 transition-colors">contato@vegapay.com.br</a>
              </div>
            </div>
            
            <div className="flex w-full items-center mt-3 max-md:max-w-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/033791b9cb25cb67fcf38290d7826b8c6cdab994?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                alt="Location icon"
              />
              <div className="self-stretch my-auto pl-3">
                Porto Alegre, RS - Brasil
              </div>
            </div>
            
            <div className="flex w-full items-center text-[15px] leading-loose mt-3 max-md:max-w-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/9c73956fde850f06dc3456fe532198e9020a519c?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                alt="Support icon"
              />
              <div className="self-stretch my-auto pl-3">
                Atendimento 24/7
              </div>
            </div>
          </div>
        </div>
        
        <div className="grow shrink w-[161px]">
          <div className="w-full text-lg text-white whitespace-nowrap tracking-[-0.45px] leading-loose">
            <h3>Produtos</h3>
          </div>
          <nav className="w-full text-base text-white mt-4">
            <div className="flex w-full flex-col">
              <a href="#emprestimo" className="hover:text-gray-300 transition-colors">Empréstimo Conta de Luz</a>
            </div>
            <div className="flex w-full flex-col whitespace-nowrap mt-2">
              <a href="#simulador" className="hover:text-gray-300 transition-colors">Simulador</a>
            </div>
            <div className="flex w-full flex-col whitespace-nowrap mt-2">
              <a href="#calculadora" className="hover:text-gray-300 transition-colors">Calculadora</a>
            </div>
            <div className="flex w-full flex-col mt-2">
              <a href="#estados" className="hover:text-gray-300 transition-colors">Estados Atendidos</a>
            </div>
          </nav>
        </div>
        
        <div className="grow shrink w-[161px]">
          <div className="w-full text-lg text-white whitespace-nowrap tracking-[-0.45px] leading-loose">
            <h3>Empresa</h3>
          </div>
          <nav className="w-full text-base text-white mt-4">
            <div className="flex w-full flex-col">
              <a href="#quem-somos" className="hover:text-gray-300 transition-colors">Quem Somos</a>
            </div>
            <div className="flex w-full flex-col mt-2">
              <a href="#historia" className="hover:text-gray-300 transition-colors">Nossa História</a>
            </div>
            <div className="flex w-full flex-col mt-2">
              <a href="#trabalhe-conosco" className="hover:text-gray-300 transition-colors">Trabalhe Conosco</a>
            </div>
            <div className="flex w-full flex-col whitespace-nowrap mt-2">
              <a href="#imprensa" className="hover:text-gray-300 transition-colors">Imprensa</a>
            </div>
          </nav>
        </div>
        
        <div className="grow shrink w-[162px]">
          <div className="w-full text-lg text-white whitespace-nowrap tracking-[-0.45px] leading-loose">
            <h3>Suporte</h3>
          </div>
          <nav className="w-full text-base text-white mt-4">
            <div className="flex w-full flex-col">
              <a href="#ajuda" className="hover:text-gray-300 transition-colors">Central de Ajuda</a>
            </div>
            <div className="flex w-full flex-col whitespace-nowrap mt-2">
              <a href="#faq" className="hover:text-gray-300 transition-colors">FAQ</a>
            </div>
            <div className="flex w-full flex-col whitespace-nowrap leading-loose mt-2">
              <a href="#contato" className="hover:text-gray-300 transition-colors">Contato</a>
            </div>
            <div className="flex w-full flex-col whitespace-nowrap mt-2">
              <a href="#blog" className="hover:text-gray-300 transition-colors">Blog</a>
            </div>
          </nav>
        </div>
        
        <div className="grow shrink w-[161px]">
          <div className="w-full text-lg text-white whitespace-nowrap tracking-[-0.45px] leading-loose">
            <h3>Legal</h3>
          </div>
          <nav className="w-full text-base text-white mt-4">
            <div className="flex w-full flex-col">
              <a href="#privacidade" className="hover:text-gray-300 transition-colors">Política de Privacidade</a>
            </div>
            <div className="flex w-full flex-col mt-2">
              <a href="#termos" className="hover:text-gray-300 transition-colors">Termos de Uso</a>
            </div>
            <div className="flex w-full flex-col mt-2">
              <a href="#cookies" className="hover:text-gray-300 transition-colors">Política de Cookies</a>
            </div>
            <div className="flex w-full flex-col whitespace-nowrap mt-2">
              <a href="#lgpd" className="hover:text-gray-300 transition-colors">LGPD</a>
            </div>
          </nav>
        </div>
      </div>
      
      <div className="flex min-h-[82px] w-full flex-col items-stretch text-sm text-white leading-none justify-center pl-16 pr-20 py-7 border-[rgba(255,255,255,0.1)] border-t max-md:max-w-full max-md:px-5">
        <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
          <div className="self-stretch flex min-w-60 min-h-[26px] justify-center flex-wrap w-[563px] my-auto max-md:max-w-full">
            <div>Certificações e Segurança:</div>
            <div className="flex flex-col pl-6">
              <div className="flex items-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/291cd5d5f71896d5c3a6950063e96ed0f00ab061?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                  alt="SSL icon"
                />
                <div className="self-stretch my-auto pl-2">SSL 256-bit</div>
              </div>
            </div>
            <div className="flex flex-col pl-6">
              <div className="flex items-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/291cd5d5f71896d5c3a6950063e96ed0f00ab061?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                  alt="LGPD icon"
                />
                <div className="self-stretch my-auto pl-2">LGPD Compliant</div>
              </div>
            </div>
            <div className="flex flex-col pl-6">
              <div className="flex items-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/63f9b0343c20e4120b0a4299903ab61578d7a335?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                  alt="Central Bank icon"
                />
                <div className="self-stretch my-auto pl-2">Banco Central</div>
              </div>
            </div>
          </div>
          <div className="self-stretch min-w-60 my-auto">
            Regulamentado pelo Banco Central do Brasil
          </div>
        </div>
      </div>
      
      <div className="mb-[-26px] min-h-[59px] w-full text-sm text-white leading-none pl-16 pr-20 pt-[25px] pb-3.5 border-[rgba(255,255,255,0.1)] border-t max-md:max-w-full max-md:mb-2.5 max-md:px-5">
        <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
          <div className="self-stretch min-w-60 my-auto">
            © 2025 VegaPay. Todos os direitos reservados.
          </div>
          <div className="self-stretch flex min-w-60 items-center my-auto max-md:max-w-full">
            <div className="self-stretch my-auto">
              CNPJ: 12.345.678/0001-90
            </div>
            <div className="self-stretch whitespace-nowrap my-auto pl-6">|</div>
            <div className="self-stretch my-auto pl-6">
              Autorização Banco Central: 12345
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

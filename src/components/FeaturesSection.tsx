import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="bg-[rgba(217,217,217,0.2)] z-10 flex w-full flex-col items-center pt-[11px] max-md:max-w-full">
      <div className="w-full max-w-[1225px] ml-[33px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[55%] max-md:w-full max-md:ml-0">
            <div className="z-10 flex mr-[-219px] w-full flex-col items-stretch font-normal mt-[170px] max-md:max-w-full max-md:mt-10">
              <h2 className="text-black text-[80px] leading-[88px] max-md:max-w-full max-md:text-[40px] max-md:leading-[49px]">
                <span className="text-[rgba(61,61,61,1)]">Empréstimo direto </span>
                <br />
                <span className="text-[rgba(61,61,61,1)]">na </span>
                <span className="text-[rgba(10,189,180,1)]">Conta de Luz</span>
              </h2>
              <p className="text-[rgba(61,61,61,1)] text-[40px] leading-[48px] mt-12 max-md:max-w-full max-md:mt-10">
                O único que você paga junto com a<br />
                energia elétrica
              </p>
              <div className="flex items-center gap-[15px] text-lg mt-12 max-md:max-w-full max-md:mt-10">
                <button className="bg-[rgba(42,42,42,1)] self-stretch flex min-h-[42px] items-center gap-4 text-white justify-center w-[182px] my-auto pl-9 py-[11px] rounded-[25px] hover:bg-[rgba(32,32,32,1)] transition-colors">
                  <span className="self-stretch w-[157px] my-auto">Simule Agora</span>
                </button>
                <div className="border self-stretch flex min-w-60 min-h-[42px] items-center gap-4 text-[rgba(42,42,42,1)] justify-center w-[275px] my-auto pl-[23px] py-[11px] rounded-[25px] border-black border-solid">
                  <span className="self-stretch w-[275px] my-auto">Aprovação em até 3 horas</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[45%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col relative min-h-[591px] grow pt-[344px] pb-[221px] px-20 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/b036c24e037f7cf566d059f70052383d8a289e09?placeholderIfAbsent=true"
                className="absolute h-full w-full object-cover inset-0"
                alt="Features background"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/7e7699ff14618a753798397d7f3e044f9c609c42?placeholderIfAbsent=true"
                className="aspect-[1.27] object-contain w-[33px]"
                alt="Feature icon"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-[rgba(61,61,61,1)] text-[28px] font-normal leading-none ml-[238px] mt-[26px]">
        Sem burocracia
      </div>
      
      <div className="z-10 flex mt-[-31px] w-full max-w-[1140px] flex-col pb-6 max-md:max-w-full">
        <div className="bg-[rgba(10,189,180,0.3)] flex items-stretch gap-[26px] font-normal flex-wrap pl-[38px] pr-20 py-3.5 rounded-[15px] border-[rgba(61,61,61,1)] border-solid border-2 max-md:px-5">
          <img
            src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/2804a7c0ee7033a71db9bf2c6228b0476e75fb27?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[51px] shrink-0"
            alt="Money icon"
          />
          <div className="flex flex-col items-stretch">
            <div className="text-[rgba(61,61,61,1)] text-[28px] leading-none">
              Até R$ 3.500
            </div>
            <div className="text-neutral-500 text-xl leading-loose z-10">
              Em até 24 horas
            </div>
          </div>
        </div>
        
        <div className="bg-[rgba(10,189,180,0.3)] z-10 flex mt-[-79px] min-h-[79px] w-[562px] max-w-full flex-col justify-center px-[57px] py-[15px] rounded-[15px] border-[rgba(61,61,61,1)] border-solid border-2 max-md:px-5">
          <img
            src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/e5f1cb85db515f6f0f544d26551d4d22b8649dbf?placeholderIfAbsent=true"
            className="aspect-[1.14] object-contain w-[57px]"
            alt="No income proof icon"
          />
        </div>
        
        <div className="text-neutral-500 text-xl font-normal leading-loose mt-[-43px] mr-[117px] max-md:mr-2.5">
          Aprovado sem comprovar renda
        </div>
      </div>
      
      <div className="self-stretch flex w-full flex-col items-stretch mt-4 max-md:max-w-full">
        <div className="self-center flex w-full max-w-[1140px] items-stretch gap-4 flex-wrap max-md:max-w-full">
          <div className="bg-[rgba(10,189,180,0.3)] flex items-stretch gap-[19px] font-normal flex-wrap flex-1 grow shrink basis-auto pl-8 pr-20 py-2 rounded-[15px] border-[rgba(61,61,61,1)] border-solid border-2 max-md:px-5">
            <img
              src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/41d4f0c7b728b717094f4ac4263cad521cf9570e?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-16 shrink-0"
              alt="Automatic payments icon"
            />
            <div className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit mt-1.5">
              <div className="text-[rgba(61,61,61,1)] text-[28px] leading-none">
                Parcelas automáticas
              </div>
              <div className="text-neutral-500 text-xl leading-loose mt-[5px]">
                Direto na sua conta de luz
              </div>
            </div>
          </div>
          
          <div className="bg-[rgba(10,189,180,0.3)] flex items-start gap-6 flex-wrap flex-1 grow shrink basis-auto px-[67px] py-px rounded-[15px] border-[rgba(61,61,61,1)] border-solid border-2 max-md:max-w-full max-md:px-5">
            <div className="flex items-center gap-2.5 p-2.5">
              <img
                src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/cf1001513e44b853a084a6d87f242d7c1214b3d8?placeholderIfAbsent=true"
                className="aspect-[0.61] object-contain w-9 self-stretch my-auto"
                alt="Digital icon"
              />
            </div>
            <div className="flex flex-col items-stretch font-normal grow shrink-0 basis-0 w-fit my-auto">
              <div className="text-[rgba(61,61,61,1)] text-[28px] leading-none">
                100% digital
              </div>
              <div className="text-neutral-500 text-xl leading-loose">
                Rápido e direto no seu celular
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

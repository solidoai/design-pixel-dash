import React from 'react';

const ProcessSection = () => {
  return (
    <section className="bg-[rgba(60,60,60,1)] flex w-full flex-col items-center justify-center mt-[73px] px-20 py-[34px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="w-full max-w-[1114px] max-md:max-w-full">
        <div className="flex w-[954px] max-w-full items-start gap-[40px_100px] flex-wrap ml-[37px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/5aa12b8b055fd675a60cb711d8ba23f09baa3fc6?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[62px] shrink-0 mt-[13px]"
            alt="Step 1 icon"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/5445ab8cabb258f426c6043b0be80a7425e22522?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[57px] shrink-0 my-auto"
            alt="Step 2 icon"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/5b4e50eface9ee6e449ff98b75ee63f5bc4674da?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[57px] shrink-0 my-auto"
            alt="Step 3 icon"
          />
          <div className="flex items-center gap-2.5 flex-1 p-2.5">
            <img
              src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/43ca59aa5df35fb131b5e7cfabd4238f6292dea4?placeholderIfAbsent=true"
              className="aspect-[0.91] object-contain w-12 self-stretch my-auto"
              alt="Step 4 icon"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-[40px_80px] text-white font-normal text-center justify-center flex-wrap mt-4 max-md:max-w-full">
          <article className="self-stretch flex min-h-[92px] flex-col items-stretch justify-center grow shrink w-[116px] my-auto">
            <h3 className="text-[32px] leading-none">Cadastro</h3>
            <p className="text-base leading-6 self-center mt-1">
              Preencha seus<br />
              dados básicos
            </p>
          </article>
          
          <article className="self-stretch flex min-h-[92px] flex-col items-stretch justify-center grow shrink w-[161px] my-auto">
            <h3 className="text-[32px] leading-none">Análise</h3>
            <p className="text-base leading-6 mt-1">
              Analisamos seu perfil de<br />
              pagador de conta de luz
            </p>
          </article>
          
          <article className="self-stretch flex min-h-[92px] flex-col items-stretch justify-center grow shrink w-[195px] my-auto">
            <h3 className="text-[32px] leading-none">Aprovação</h3>
            <p className="text-base leading-6 mt-1">
              Receba a confirmação direto<br />
              no seu WhatsApp
            </p>
          </article>
          
          <article className="self-stretch flex min-w-60 min-h-[92px] flex-col items-stretch justify-center grow shrink w-[295px] my-auto">
            <h3 className="text-[32px] leading-none">Liberação de Crédito</h3>
            <p className="text-base leading-6 self-center mt-1">
              Valor liberado via PIX. As parcelas vêm<br />
              na sua conta de luz todo mês.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

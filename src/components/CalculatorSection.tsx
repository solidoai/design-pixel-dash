import React, { useState } from 'react';

const CalculatorSection = () => {
  const [loanAmount, setLoanAmount] = useState(1500);
  const [installments, setInstallments] = useState(21);
  const maxAmount = 3500;
  const maxInstallments = 24;
  const monthlyRate = 0.025; // 2.5% a.m.

  const calculateResults = () => {
    const monthlyPayment = (loanAmount * (1 + monthlyRate * installments)) / installments;
    const totalAmount = monthlyPayment * installments;
    const totalInterest = totalAmount - loanAmount;
    
    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      totalInterest: totalInterest.toFixed(2)
    };
  };

  const results = calculateResults();

  return (
    <section className="flex flex-col relative min-h-[817px] w-full overflow-hidden items-center pt-[148px] px-[70px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <img
        src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/5e994ec261290485dcb48e067a126eb6b6ee1796?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Calculator background"
      />
      
      <div className="relative w-full max-w-[1144px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="relative flex w-full flex-col self-stretch text-[rgba(61,61,61,1)] font-normal my-auto max-md:max-w-full max-md:mt-10">
              <div className="bg-[rgba(10,189,180,0.18)] border flex h-[29px] w-[162px] max-w-full items-center gap-2.5 text-[10px] leading-10 justify-center px-2.5 rounded-[20px] border-[rgba(61,61,61,1)] border-solid">
                <span className="self-stretch my-auto">FAÇA JÁ SUA SIMULAÇÃO</span>
              </div>
              
              <div className="self-stretch h-[285px] w-full mt-[41px] max-md:max-w-full max-md:mt-10">
                <h2 className="text-[64px] leading-[72px] max-md:max-w-full max-md:text-[40px] max-md:leading-[50px]">
                  Calculadora <br />
                  de Empréstimo
                </h2>
                <p className="text-[32px] leading-10 mt-4 max-md:max-w-full">
                  Simule diferentes cenários e <br />
                  encontre a melhor opção <br />
                  para você
                </p>
              </div>
              
              <button className="bg-[rgba(10,189,180,1)] flex min-h-[38px] w-[249px] max-w-full items-center gap-2.5 text-base text-center justify-center mt-[41px] px-[19px] py-[9px] rounded-[20px] max-md:mt-10 hover:bg-[rgba(8,169,160,1)] transition-colors">
                <span className="self-stretch w-[199px] my-auto">Receber minha simulação</span>
              </button>
            </div>
          </div>
          
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="relative grow max-md:max-w-full max-md:mt-10">
              <div className="bg-[rgba(217,217,217,0.3)] w-full px-[34px] py-[29px] rounded-2xl border-[rgba(61,61,61,1)] border-solid border-2 max-md:max-w-full max-md:px-5">
                <div className="max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                    <div className="w-[74%] max-md:w-full max-md:ml-0">
                      <div className="flex w-full flex-col max-md:mt-10">
                        <div className="self-stretch flex items-stretch gap-1.5 text-2xl text-black font-normal text-center leading-none">
                          <img
                            src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/2fb15e296e5f5752e18378c19342cf2cf8a78bc0?placeholderIfAbsent=true"
                            className="aspect-[1] object-contain w-[23px] shrink-0"
                            alt="Calculator icon"
                          />
                          <span className="grow shrink w-60">Monte sua simulação</span>
                        </div>
                        
                        <div className="text-black text-base font-normal mt-8">
                          Valor do Crédito
                        </div>
                        <div className="flex items-stretch">
                          <input
                            type="range"
                            min="0"
                            max={maxAmount}
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(Number(e.target.value))}
                            className="bg-[rgba(10,189,180,1)] flex w-full shrink-0 h-1.5 my-auto rounded-[100px] max-md:-mr-2 appearance-none cursor-pointer"
                            style={{
                              background: `linear-gradient(to right, rgba(10,189,180,1) 0%, rgba(10,189,180,1) ${(loanAmount / maxAmount) * 100}%, #e5e5e5 ${(loanAmount / maxAmount) * 100}%, #e5e5e5 100%)`
                            }}
                          />
                          <div className="bg-white border flex w-4 shrink-0 h-4 rounded-[50%] border-[rgba(10,189,180,1)] border-solid" />
                        </div>
                        <div className="text-black text-xs font-normal leading-6">
                          R$ {loanAmount.toLocaleString('pt-BR')}
                        </div>
                        
                        <div className="text-black text-base font-normal mt-2">
                          Número de Parcelas
                        </div>
                        <div className="flex items-stretch">
                          <input
                            type="range"
                            min="1"
                            max={maxInstallments}
                            value={installments}
                            onChange={(e) => setInstallments(Number(e.target.value))}
                            className="bg-[rgba(10,189,180,1)] flex w-full shrink-0 h-1.5 my-auto rounded-[100px] max-md:-mr-2 appearance-none cursor-pointer"
                            style={{
                              background: `linear-gradient(to right, rgba(10,189,180,1) 0%, rgba(10,189,180,1) ${(installments / maxInstallments) * 100}%, #e5e5e5 ${(installments / maxInstallments) * 100}%, #e5e5e5 100%)`
                            }}
                          />
                          <div className="bg-white border flex w-4 shrink-0 h-4 rounded-[50%] border-[rgba(10,189,180,1)] border-solid" />
                        </div>
                        <div className="text-black text-xs font-normal leading-6">
                          {installments} meses
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-[26%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="grow font-normal text-right mt-[59px] max-md:mt-10">
                        <div className="text-[rgba(10,189,180,1)] text-base">
                          R$ {loanAmount.toLocaleString('pt-BR')}
                        </div>
                        <div className="flex flex-col text-xs text-black mt-[22px] pl-5">
                          <div className="leading-6">R$ {maxAmount.toLocaleString('pt-BR')}</div>
                          <div className="text-[rgba(10,189,180,1)] text-base mt-2">
                            {installments}x
                          </div>
                          <div className="leading-6 mt-[22px]">
                            {maxInstallments} meses
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-[40px_100px] text-base text-black font-normal justify-between mt-[33px] max-md:max-w-full">
                  <span className="self-stretch my-auto">Taxa de Juros Mensal</span>
                  <span className="text-right self-stretch my-auto">2.5% a.m.</span>
                </div>
              </div>
              
              <div className="bg-[rgba(217,217,217,0.3)] flex w-full flex-col font-normal mt-[25px] px-[33px] py-[29px] rounded-2xl border-[rgba(61,61,61,1)] border-solid border-2 max-md:max-w-full max-md:px-5">
                <div className="flex items-stretch gap-[3px] text-2xl text-black leading-none">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/d354197e8e28709ef4b22be223f67fea5bb063e5?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-[27px] shrink-0"
                    alt="Results icon"
                  />
                  <span className="basis-auto grow shrink">Resultado da Simulação</span>
                </div>
                
                <div className="flex w-[358px] max-w-full gap-5 justify-between mt-[31px]">
                  <div>
                    <div className="flex w-full items-center gap-1 text-base text-black">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/fdc9671692bd742cbe1963b248d03e9b3f0ddb77?placeholderIfAbsent=true"
                        className="aspect-[1] object-contain w-[19px] self-stretch shrink-0 my-auto"
                        alt="Monthly payment icon"
                      />
                      <span className="self-stretch w-[119px] my-auto">Parcela Mensal</span>
                    </div>
                    <div className="text-[rgba(10,189,180,1)] text-[26px] leading-none mt-4">
                      R$ {results.monthlyPayment.replace('.', ',')}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-stretch">
                    <div className="flex items-center gap-0.5 text-base text-black">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/f8baba08f4c45ad72b15bfb71efb1d7b39316d3f?placeholderIfAbsent=true"
                        className="aspect-[1] object-contain w-[21px] self-stretch shrink-0 my-auto"
                        alt="Total amount icon"
                      />
                      <span className="self-stretch w-[82px] my-auto">Valor Total</span>
                    </div>
                    <div className="text-[rgba(10,189,180,1)] text-[26px] leading-none mt-4">
                      R$ {results.totalAmount.replace('.', ',')}
                    </div>
                  </div>
                </div>
                
                <div className="flex w-[163px] max-w-full flex-col items-stretch mt-[13px]">
                  <div className="flex items-center gap-[5px] text-base text-black">
                    <span className="self-stretch w-[110px] my-auto">Total de Juros</span>
                  </div>
                  <div className="text-orange-500 text-[26px] leading-none mt-4">
                    R$ {results.totalInterest.replace('.', ',')}
                  </div>
                </div>
                
                <button className="bg-[rgba(10,189,180,1)] self-stretch flex flex-col items-center text-base text-[rgba(61,61,61,1)] text-center mt-[31px] pt-[9px] pb-[17px] px-[70px] rounded-[15px] max-md:max-w-full max-md:px-5 hover:bg-[rgba(8,169,160,1)] transition-colors">
                  Solicitar Crédito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;

import React, { useState } from 'react';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    cpf: '',
    birthDate: '',
    whatsapp: '',
    energyCompany: '',
    billInName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section className="w-full max-w-[1311px] mr-[25px] mt-4 max-md:max-w-full max-md:mr-2.5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col self-stretch items-stretch font-normal -mr-7 my-auto max-md:max-w-full max-md:mt-10">
            <div className="max-md:max-w-full">
              <h1 className="text-black text-[64px] leading-[72px] max-md:max-w-full max-md:text-[40px] max-md:leading-[50px]">
                Crédito rápido, <br />
                seguro e{" "}
                <span className="text-[rgba(10,189,180,1)]">100% digital.</span>
              </h1>
              <p className="text-[rgba(93,93,93,1)] text-lg leading-6 mt-4 max-md:max-w-full">
                Em vez de gerar boletos e preocupação, ele entra como mais uma
                linha na sua conta de luz. Até R$ 3.500 liberados de forma
                rápida e segura, com pagamento automático pela fatura de
                energia.
              </p>
            </div>
            
            <div className="border flex w-[606px] max-w-full flex-col items-stretch justify-center mt-[35px] p-px rounded-[32px] border-[rgba(61,61,61,0.5)] border-solid">
              <div className="bg-[rgba(10,189,180,1)] flex w-full flex-col items-stretch pt-[13px] rounded-[31px] max-md:max-w-full">
                <div className="text-white text-lg leading-none text-center self-center">
                  LIBERAÇÃO EM ATÉ 3 HORAS
                </div>
                <div className="z-10 flex items-center gap-4 flex-wrap ml-[19px] mt-6 max-md:mr-[7px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/b24c6002b63203bb325930bd615df07f74f9d9db?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-9 self-stretch shrink-0 my-auto"
                    alt="Loan icon"
                  />
                  <div className="self-stretch flex min-w-60 min-h-10 flex-col items-stretch justify-center grow shrink w-[519px] my-auto max-md:max-w-full">
                    <div className="text-[rgba(61,61,61,1)] text-lg leading-none max-md:max-w-full">
                      Empréstimo direto na sua conta de Luz
                    </div>
                    <div className="text-[rgba(128,128,128,1)] text-xs leading-6 max-md:max-w-full">
                      Saiba qual valor pode ser liberado pra você em minutos
                    </div>
                  </div>
                </div>
                
                <div className="bg-white flex flex-col items-stretch text-neutral-500 pb-[23px] rounded-[32px] max-md:max-w-full">
                  <form onSubmit={handleSubmit} className="bg-white z-10 flex mt-[-41px] w-full flex-col items-stretch text-xs pt-[62px] pb-[9px] px-[23px] max-md:max-w-full max-md:px-5">
                    <h2 className="text-[rgba(39,39,39,1)] text-2xl leading-none max-md:ml-[9px]">
                      Empréstimo na Conta de Luz
                    </h2>
                    <div className="border z-10 flex shrink-0 h-[27px] rounded-[10px] border-[rgba(61,61,61,0.5)] border-solid max-md:max-w-full" />
                    <p className="text-[rgba(39,39,39,1)] text-base mt-[-9px] max-md:ml-[9px]">
                      Descubra qual valor de crédito você tem direito
                    </p>
                    
                    <div className="border flex flex-col whitespace-nowrap leading-loose pt-1 pb-3.5 px-[13px] rounded-[10px] border-[rgba(61,61,61,0.5)] border-solid max-md:max-w-full max-md:pr-5">
                      <input
                        type="text"
                        name="cpf"
                        placeholder="CPF"
                        value={formData.cpf}
                        onChange={handleInputChange}
                        className="bg-transparent outline-none text-[rgba(61,61,61,1)]"
                        required
                      />
                    </div>
                    
                    <div className="border flex flex-col leading-loose mt-2 pt-1 pb-3.5 px-[13px] rounded-[10px] border-[rgba(61,61,61,0.5)] border-solid max-md:max-w-full max-md:pr-5">
                      <input
                        type="date"
                        name="birthDate"
                        placeholder="Data de Nascimento"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                        className="bg-transparent outline-none text-[rgba(61,61,61,1)]"
                        required
                      />
                    </div>
                    
                    <div className="flex w-full items-stretch gap-2 leading-loose flex-wrap mt-2 max-md:max-w-full">
                      <div className="border flex flex-col whitespace-nowrap grow shrink-0 basis-0 w-fit pt-2 pb-[18px] px-[13px] rounded-[10px] border-[rgba(61,61,61,0.5)] border-solid max-md:pr-5">
                        <input
                          type="tel"
                          name="whatsapp"
                          placeholder="WhatsApp"
                          value={formData.whatsapp}
                          onChange={handleInputChange}
                          className="bg-transparent outline-none text-[rgba(61,61,61,1)]"
                          required
                        />
                      </div>
                      <div className="border flex items-stretch gap-[40px_92px] grow shrink basis-auto px-[11px] py-1.5 rounded-[10px] border-[rgba(61,61,61,0.5)] border-solid">
                        <select
                          name="energyCompany"
                          value={formData.energyCompany}
                          onChange={(e) => setFormData(prev => ({ ...prev, energyCompany: e.target.value }))}
                          className="bg-transparent outline-none text-[rgba(61,61,61,1)] flex-1"
                          required
                        >
                          <option value="">Companhia de Energia</option>
                          <option value="cpfl">CPFL</option>
                          <option value="enel">Enel</option>
                          <option value="cemig">Cemig</option>
                        </select>
                        <img
                          src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/306a9e5b3ee315d77b415682887803abaf21a6da?placeholderIfAbsent=true"
                          className="aspect-[2] object-contain w-5 shrink-0 mt-[5px]"
                          alt="Dropdown arrow"
                        />
                      </div>
                    </div>
                    
                    <div className="border flex items-stretch gap-5 leading-loose flex-wrap justify-between mt-2 pt-[3px] pb-[9px] px-[11px] rounded-[10px] border-[rgba(61,61,61,0.5)] border-solid max-md:max-w-full">
                      <select
                        name="billInName"
                        value={formData.billInName}
                        onChange={(e) => setFormData(prev => ({ ...prev, billInName: e.target.value }))}
                        className="bg-transparent outline-none text-[rgba(61,61,61,1)] flex-1"
                        required
                      >
                        <option value="">A conta de luz está no seu nome?</option>
                        <option value="sim">Sim</option>
                        <option value="nao">Não</option>
                      </select>
                      <img
                        src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/5e584dcf9ded44ba7ba873673761d23e4428238c?placeholderIfAbsent=true"
                        className="aspect-[2] object-contain w-5 shrink-0 mt-[5px]"
                        alt="Dropdown arrow"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="bg-[rgba(10,189,180,1)] flex flex-col items-center text-base text-[rgba(61,61,61,1)] text-center justify-center mt-[7px] mx-[23px] px-[61px] py-3 rounded-[15px] max-md:max-w-full max-md:mr-2.5 max-md:px-5 hover:bg-[rgba(8,169,160,1)] transition-colors"
                    >
                      Receber minha simulação
                    </button>
                    
                    <p className="text-[10px] leading-[2.4] text-center self-center mt-2">
                      Ao me cadastrar concordo com a política de privacidade e o
                      termo de consentimento.
                    </p>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-500 self-center flex min-h-[30px] w-[509px] max-w-full items-center gap-1.5 text-[11px] text-black leading-none justify-center flex-wrap mt-[25px] px-[9px] py-[3px] rounded-[10px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/6662cb6499e6fdbf5416f710412dfc95ba2bd3d7?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                alt="Warning icon"
              />
              <div className="self-stretch grow shrink w-[453px] my-auto max-md:max-w-full">
                <span className="text-white">Fique atento:</span>
                <span className="text-white"> Não solicitamos nenhum tipo de pagamento antecipado para liberação.</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col relative min-h-[817px] w-full items-stretch text-white font-normal justify-center px-[39px] py-[379px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/7982557f1dec44a5c9e4665492db3ac0d07a2669?placeholderIfAbsent=true"
              className="absolute h-full w-full object-cover inset-0"
              alt="Hero background"
            />
            <div className="relative flex gap-5 flex-wrap justify-between max-md:max-w-full">
              <div className="bg-[rgba(0,0,0,0.5)] shadow-[5px_4px_8px_rgba(0,0,0,0.3)] border flex flex-col mt-3 pl-[45px] pr-3 pt-2 pb-[17px] rounded-[10px] border-[rgba(255,255,255,0.47)] border-solid max-md:pl-5">
                <div className="text-[6px]">10min</div>
                <div className="text-[15px] mt-1">Crédito Aprovado!</div>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/45a7fe46e0b3399f2cbf475d194358a434eaf049?placeholderIfAbsent=true"
                className="aspect-[3.88] object-contain w-[132px] shrink-0 max-w-full"
                alt="Approval notification"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

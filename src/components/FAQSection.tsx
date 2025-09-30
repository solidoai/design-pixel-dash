import React, { useState } from 'react';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "Preciso ter renda comprovada?",
      answer: "Não, nosso empréstimo é aprovado sem necessidade de comprovação de renda. Analisamos seu histórico de pagamento da conta de luz."
    },
    {
      question: "Em quanto tempo recebo o dinheiro",
      answer: "O dinheiro é liberado em até 3 horas após a aprovação, diretamente na sua conta via PIX."
    },
    {
      question: "Como funciona o empréstimo na conta de luz?",
      answer: "As parcelas do empréstimo são incluídas automaticamente na sua conta de luz mensal, facilitando o pagamento."
    },
    {
      question: "Quais estados vocês atendem?",
      answer: "Atendemos diversos estados do Brasil. Consulte nossa lista completa de estados atendidos no site."
    },
    {
      question: "Posso antecipar o pagamento?",
      answer: "Sim, você pode antecipar o pagamento das parcelas a qualquer momento, com desconto nos juros."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Sim, utilizamos criptografia SSL 256-bit e somos totalmente compatíveis com a LGPD para proteger seus dados."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="bg-[rgba(217,217,217,0.2)] w-full mt-[101px] px-20 py-[100px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[33%] max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-stretch mt-[15px] max-md:mt-10">
            <h2 className="text-black text-5xl font-normal leading-[56px] ml-2.5 max-md:text-[40px] max-md:leading-[52px]">
              Perguntas<br />
              frequentes
            </h2>
            <div className="flex items-center gap-2.5 mt-[65px] p-2.5 max-md:mt-10">
              <img
                src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/6c3efba5c5fab383c9be9398c1415bf4c7eec23f?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[377px] self-stretch min-w-60 my-auto"
                alt="FAQ illustration"
              />
            </div>
          </div>
        </div>
        
        <div className="w-[67%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex min-h-[653px] w-full flex-col overflow-hidden text-xl text-black font-bold pt-5 max-md:max-w-full max-md:mt-10">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-[15px]">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="bg-white shadow-[0px_0px_0px_rgba(169,212,255,1)] flex min-h-[93px] w-[720px] max-w-full items-center gap-[40px_100px] overflow-hidden justify-between flex-wrap px-2.5 py-[35px] rounded-sm hover:bg-gray-50 transition-colors w-full text-left"
                >
                  <span className="self-stretch w-[442px] my-auto max-md:max-w-full">
                    {faq.question}
                  </span>
                  <img
                    src={openQuestion === index 
                      ? "https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/d8a6c12c85d8c545e94ae3941998c924ac3293b3?placeholderIfAbsent=true"
                      : "https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/826f1b446e9755e2735f95b5438e077e260a16b7?placeholderIfAbsent=true"
                    }
                    className="aspect-[2] object-contain w-2.5 self-stretch shrink-0 my-auto transition-transform"
                    alt={openQuestion === index ? "Collapse" : "Expand"}
                    style={{
                      transform: openQuestion === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  />
                </button>
                
                {openQuestion === index && (
                  <div className="bg-white px-2.5 py-4 text-base font-normal text-gray-700 border-t border-gray-200 max-w-[720px]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

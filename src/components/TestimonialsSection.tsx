import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="w-full">
      <div className="text-black text-base font-normal leading-8 tracking-[5.92px] text-center self-center mt-[154px] max-md:mt-10">
        DEPOIMENTOS
      </div>
      
      <h2 className="text-black text-7xl font-normal leading-[80px] text-center self-center mt-4 max-md:max-w-full max-md:text-[40px] max-md:leading-[49px]">
        O que nossos<br />
        <span className="text-[rgba(10,189,180,1)]">clientes Dizem</span>
      </h2>
      
      <div className="self-center w-full max-w-[1115px] mt-[65px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[56%] max-md:w-full max-md:ml-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/0bdf4c68cec3e8bc59890450ff3931f6da7b55d4?placeholderIfAbsent=true"
              className="aspect-[1.06] object-contain w-full grow rounded-[50%] max-md:max-w-full max-md:mt-10"
              alt="Customer testimonial"
            />
          </div>
          
          <div className="w-[44%] ml-5 max-md:w-full max-md:ml-0">
            <article className="flex w-full flex-col items-stretch mt-[127px] max-md:max-w-full max-md:mt-10">
              <h3 className="text-black text-[32px] font-normal leading-10 mr-[26px] max-md:mr-2.5">
                Melhor empresa para<br />
                crédito bancário do Brasil!
              </h3>
              
              <p className="text-[rgba(60,60,60,1)] text-base font-normal leading-5 mt-4 max-md:max-w-full">
                Minha experiência com a empresa de crédito foi positiva <br />
                no geral. O processo de contratação foi simples e rápido,
                totalmente online, o que facilitou bastante, já que não <br />
                precisei levar documentos nem comprovar renda. <br />
                Em poucos minutos consegui a aprovação do <br />
                meu empréstimo.
              </p>
              
              <div className="flex items-center gap-3 mt-8">
                <img
                  src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/32b098fafcbd40a2f041f7c199a577051cb13193?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-9 self-stretch shrink-0 rounded-[50%]"
                  alt="Customer avatar 1"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/e0be26e0ddb8710732f59f54adde37bc54eaf098?placeholderIfAbsent=true"
                  className="aspect-[1.04] object-contain w-[25px] self-stretch shrink-0 my-auto rounded-[50%]"
                  alt="Customer avatar 2"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/5162190f4f963e047596eebb0137591cfd7335fb?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto rounded-[50%]"
                  alt="Customer avatar 3"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/bf0de8bd6dd15ee257b234d5a50d8c9c98bfb316?placeholderIfAbsent=true"
                  className="aspect-[1.04] object-contain w-[25px] self-stretch shrink-0 my-auto rounded-[50%]"
                  alt="Customer avatar 4"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/c6e8fceb8ffed80975bc0cbbf4c8b8dce9c1e5cd?placeholderIfAbsent=true"
                  className="aspect-[1.04] object-contain w-[25px] self-stretch shrink-0 my-auto rounded-[50%]"
                  alt="Customer avatar 5"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/5e4e3cb7457d4a21b620b025b0e4f2cf/49576f9125ea26df5a7d4bb9e5f57f023ef7a47d?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto rounded-[50%]"
                  alt="Customer avatar 6"
                />
              </div>
              
              <div className="text-black text-base font-normal leading-10 mt-4">
                Vitor Cardoso
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

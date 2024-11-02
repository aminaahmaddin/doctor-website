import React from 'react';



const HeroSection = () => {
    return (
        <header>
 

  <div
    class="relative h-[550px] overflow-hidden bg-[url('https://i.pinimg.com/564x/65/5a/15/655a15abf76e4e29a10f09eef7093cd2.jpg')] bg-cover bg-[50%] bg-no-repeat">
    <div
      class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
      <div class="flex h-full items-center justify-center">
        <div class="px-6 text-center text-white md:px-12">
          <h1 class="mb-6 text-5xl font-bold">"Your health, our priority every day."</h1>
          <h3 class="mb-8 text-3xl font-bold">Subeading</h3>
          <button
            type="button"
            class="inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
            data-twe-ripple-init
            data-twe-ripple-color="light">
           Explore
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
    );
};

export default HeroSection;



const Hero = () => {
    return (
      <section className="p-6 md:p-4 mt-32 md:mt-36">
        <div className="container mx-auto">
            <h1 className="font-space-grotesk text-6xl md:text-8xl font-bold text-center">Digitally &nbsp;
            <span className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text">Linking</span>
             <br/> your Health.</h1>
            <p className="py-6 font-roboto-mono md:text-lg text-center">Get All your Health Data at a click of a Button and Make it earn for You!</p>
            <img 
                src="/assets/heroblock_trans.png"
                alt="Hero" 
                width="600"
                className="mx-auto"
            />
        </div>
      </section>
    );
  };
  
  export default Hero;
  
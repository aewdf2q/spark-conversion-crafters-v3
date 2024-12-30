import { CalendlyButton } from "./CalendlyButton";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-black">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white max-w-4xl">
        <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 text-transparent bg-clip-text">
          Automate Your Instagram DMs and Consistently Book 5+ Fitness Clients per Week—Guaranteed in 30 Days or You Don't Pay
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
        If you don't see real client bookings by Day 30, you owe us nothing—our IG Flow Protocol is proven to deliver
      </p>
      <div className="w-full max-w-4xl aspect-video mb-8 bg-gray-800 rounded-lg overflow-hidden">
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/1BKrZeBG8wg?si=bvluvT9RxvwQec-n" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe>
      </div>
      <CalendlyButton className="bg-gradient-to-r from-red-600 via-yellow-500 to-orange-500 hover:opacity-90 text-white px-8 py-6 text-lg rounded-md animate-float" />
    </section>
  );
};
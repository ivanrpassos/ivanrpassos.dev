import portrait from '../assets/image.jpg';

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 50"
    className="w-12 h-12 md:w-14 md:h-14 text-white drop-shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Stylized 'f' and 'm' handwriting */}
    <path d="M 28 35 C 32 20, 36 6, 42 6 C 46 6, 40 26, 38 39 C 36 51, 31 51, 35 39 C 39 27, 46 21, 51 23 C 56 25, 50 39, 55 39 C 60 39, 66 26, 70 26 C 74 26, 72 39, 78 39 C 84 39, 88 29, 90 29" />
    <circle cx="95" cy="39" r="3" className="fill-current stroke-none" />
  </svg>
);

export const Home = () => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col justify-between items-center overflow-hidden font-primary select-none">
      {/* Background Portrait Image */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={portrait}
            alt="Fons Mans Portrait"
            className="h-[60vh] sm:h-[75vh] md:h-[90vh] lg:h-screen w-auto object-contain object-center opacity-85 select-none"
          />

          {/* Subtle Radial Vignette to blend edges to pure black */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.95)_90%,#000000_100%)] pointer-events-none" />

          {/* Horizontal/Vertical linear gradients for softer blending */}
          <div className="absolute bottom-0 left-0 right-0 h-24 md:h-40 bg-linear-to-t from-black to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-16 md:h-24 bg-linear-to-b from-black to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-between items-center w-full min-h-screen py-8 px-6 max-w-5xl mx-auto">

        {/* Header / Logo */}
        <header className="w-full flex justify-center pt-4">
          <Logo />
        </header>

        {/* Hero Section */}
        <main className="w-full flex flex-col items-center text-center mt-auto mb-12 md:mb-28 px-4">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl flex flex-col items-center">
            {/* Split color text */}
            <h1 className="text-base md:text-xl font-semibold max-w-[480px] text-center text-balance select-text">
              <span className="text-white">
                Ivan Passos is the founder of Sinkle®, an independent brand strategy company based in Brazil.{' '}
              </span>

              <span className="text-neutral-400">
                Clients include Porto, Codaitech and Digisource.
              </span>
            </h1>

            {/* CTAs */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8">
              <a
                href="https://sinkle.co"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-white text-black font-semibold rounded-full text-base/normal hover:brightness-75 transition-all duration-300 ease-in-out"
              >
                Visit Sinkle
              </a>
              <a
                href="mailto:contato@ivanrpassos.dev"
                className="text-white hover:brightness-75 font-semibold text-base/normal transition-all duration-300 ease-in-out"
              >
                Get in touch
              </a>
            </div>
          </div>
        </main>

        {/* Footer / Socials */}
        <footer className="w-full flex justify-center pb-4">
          <div className="flex items-center justify-center gap-5 sm:gap-8 text-[0.75rem] sm:text-xs md:text-sm font-medium text-neutral-500">
            <a
              href="https://linkedin.com/in/ivanrpassos-"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300 ease-in-out"
            >
              LinkedIn
            </a>
            <a
              href="https://www.behance.net/ivanrpassos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300 ease-in-out"
            >
              Bēhance
            </a>
            <a
              href="https://instagram.com/ivanrpassos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300 ease-in-out"
            >
              Instagram
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
};


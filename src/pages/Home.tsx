import portrait from "../assets/image.jpg";

export const Home = () => {
  return (
    <div
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-black
        font-primary
        text-white
        select-none
      "
    >
      {/* Background Portrait */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            relative
            flex
            h-full
            w-full
            items-center
            justify-center
          "
        >
          <img
            src={portrait}
            alt="Ivan Passos"
            className="
              h-[60vh]
              w-auto
              object-contain
              object-center
              opacity-90
              select-none
              sm:h-[75vh]
              md:h-[90vh]
              lg:h-screen
            "
          />

          {/* Radial Vignette */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_18%,rgba(0,0,0,0.3)_42%,rgba(0,0,0,0.82)_78%,#000000_100%)]
            "
          />

          {/* Top Gradient */}
          <div
            className="
              pointer-events-none
              absolute
              top-0
              right-0
              left-0
              h-24
              bg-linear-to-b
              from-black
              to-transparent
              md:h-32
            "
          />

          {/* Bottom Gradient */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              bottom-0
              left-0
              h-[45%]
              bg-linear-to-t
              from-black
              via-black/75
              to-transparent
            "
          />
        </div>
      </div>

      {/* Foreground */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-6xl
          flex-col
          px-6
          py-8
          md:px-10
        "
      >
        {/* Espaço reservado para futura signature */}
        <header className="h-14 md:h-16" />

        {/* Hero */}
        <main
          className="
            mt-auto
            flex
            w-full
            flex-col
            items-center
            px-4
            pb-8
            text-center
            md:pb-14
          "
        >
          <div
            className="
              flex
              max-w-2xl
              flex-col
              items-center
            "
          >
            {/* Main Text */}
            <h1
              className="
                max-w-[620px]
                text-balance
                text-base
                leading-[1.45]
                font-semibold
                text-white
                select-text
                md:text-xl
              "
            >
              Eu desenho e desenvolvo produtos digitais com foco em clareza,
              identidade e experiência.{" "}
              <span className="text-neutral-400">
                Atualmente, construo a{" "}
                <a
                  href="https://digisource.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-neutral-400
                    underline-offset-4
                    transition-colors
                    duration-300
                    ease-in-out
                    hover:text-[#FE572A]
                    hover:underline
                  "
                >
                  Digisource
                </a>{" "}
                e a{" "}
                <a
                  href="https://zeeva.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-neutral-400
                    underline-offset-4
                    transition-colors
                    duration-300
                    ease-in-out
                    hover:text-[#FE572A]
                    hover:underline
                  "
                >
                  ZEEVA
                </a>{" "}
                — e exploro fotografia através da{" "}
                <a
                  href="https://suaaave.com/@ivanrpassos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-neutral-400
                    underline-offset-4
                    transition-colors
                    duration-300
                    ease-in-out
                    hover:text-[#FE572A]
                    hover:underline
                  "
                >
                  Suaaave
                </a>
                .
              </span>
            </h1>

            {/* CTA */}
            <div
              className="
                mt-8
                flex
                items-center
                justify-center
                gap-4
                sm:gap-6
              "
            >
              <a
                href="https://tally.so/r/2EGYpp"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  bg-white
                  px-6
                  py-2.5
                  text-base/normal
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  ease-in-out
                  hover:brightness-75
                "
              >
                Entrar em contato
              </a>

              <a
                href="https://digisource.io"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-base/normal
                  font-semibold
                  text-white
                  transition-colors
                  duration-300
                  ease-in-out
                  hover:text-[#FE572A]
                "
              >
                Conhecer a Digisource
              </a>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer
          className="
            flex
            w-full
            justify-center
            pb-1
          "
        >
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-2
              text-[0.75rem]
              font-medium
              text-neutral-600
              sm:gap-x-8
              sm:text-xs
              md:text-sm
            "
          >
            <a
              href="https://linkedin.com/in/ivanrpassos"
              target="_blank"
              rel="noopener noreferrer"
              className="
                transition-colors
                duration-300
                ease-in-out
                hover:text-[#FE572A]
              "
            >
              LinkedIn
            </a>

            <a
              href="https://www.behance.net/ivanrpassos"
              target="_blank"
              rel="noopener noreferrer"
              className="
                transition-colors
                duration-300
                ease-in-out
                hover:text-[#FE572A]
              "
            >
              Bēhance
            </a>

            <a
              href="https://instagram.com/suaaave"
              target="_blank"
              rel="noopener noreferrer"
              className="
                transition-colors
                duration-300
                ease-in-out
                hover:text-[#FE572A]
              "
            >
              Suaaave
            </a>

            <a
              href="https://instagram.com/ivanrpassos"
              target="_blank"
              rel="noopener noreferrer"
              className="
                transition-colors
                duration-300
                ease-in-out
                hover:text-[#FE572A]
              "
            >
              Instagram
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                transition-colors
                duration-300
                ease-in-out
                hover:text-[#FE572A]
              "
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

import Image from "next/image";
import Link from "next/link";
import styles from "~/styles/aloha.module.css";
import image from "~/public/images/Alp-Ozkan-Profile-Photo.png";

export default function Hello() {
  return (
    <div className="flex animate-appear flex-col">
      <div className="mx-auto">
        <p className="text-7xl font-light leading-tight tracking-normal text-gray-100 underline decoration-2 sm:text-4xl md:text-6xl lg:text-7xl 2xs:text-3xl xs:text-4xl">
          Hello.
          <br />
          I&apos;m Alp Ozkan,
        </p>
        <p className="mt-4 text-7xl font-light leading-tight leading-tight tracking-normal text-gray-100 text-gray-100 sm:text-4xl md:text-6xl lg:text-7xl 2xs:text-3xl xs:text-4xl">
          Product Manager,
        </p>
        <p className="leading-tightleading-tight text-7xl font-light tracking-normal text-gray-100 text-gray-100 sm:text-4xl md:text-6xl lg:text-7xl 2xs:text-3xl xs:text-4xl">
          Software Engineer,
        </p>
        <p className="leading-tightleading-tight text-7xl font-light tracking-normal text-gray-100 text-gray-100 sm:text-4xl md:text-6xl lg:text-7xl 2xs:text-3xl xs:text-4xl">
          and Entrepreneur.
        </p>
      </div>
      {/* <Image
        className="my-8 animate-tada rounded-xl sm:my-8 sm:rounded-2xl"
        src={image}
        alt="Alp Ozkan"
        width={300}
        height={300}
        priority
      /> */}
      {/* <p className="my-2 md:text-lg lg:text-xl">
        💻 I&apos;m a Product Executive 🌴 living in Istanbul.
      </p> */}
      <div className="2xs:text-1xl xs:text-1xl sm:text-1xl mt-16 flex items-center justify-center gap-x-6 sm:mt-12 sm:mt-12 md:mt-16 md:text-2xl lg:mt-16 lg:text-2xl 2xs:mt-8 xs:mt-8">
        <Link
          href="#newsletter-signup"
          className="rounded-md bg-pink-600 bg-gradient-to-r from-purple-800 to-pink-600 px-5 py-3.5 font-light text-white shadow-sm hover:bg-pink-500 hover:from-purple-700 hover:to-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-300"
        >
          Join newsletter
        </Link>
        <Link
          href="/about"
          className="hover:bg-perple-500 rounded-md bg-purple-600 bg-gradient-to-r from-pink-800 to-purple-600 px-5 py-3.5 font-light text-white shadow-sm hover:from-pink-700 hover:to-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-300"
        >
          About me <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

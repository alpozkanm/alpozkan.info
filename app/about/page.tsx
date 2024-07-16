import Image from "next/image";
import Photos from "~/components/photos";
import styles from "~/styles/about.module.css";
import Cookies from "js-cookie";

export default async function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <header>
        <h1 className="mb-8 max-w-5xl text-4xl font-bold text-gray-100 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
          About
        </h1>
      </header>

      <section className="prose mb-16 max-w-5xl dark:prose-invert lg:prose-lg prose-a:text-sky-300 lg:mb-32">
        <p>
          As a seasoned Product Manager with over 10 years of experience, I have
          consistently delivered groundbreaking products in diverse industries
          such as E-commerce, FinTech, Delivery Service, Blockchain, and Mobile
          Apps.
        </p>
        <p>
          My proven track record includes successfully launching more than 75
          products on an international scale. Adept at building robust product
          organizations, I possess a keen understanding of every stage of
          product development, from early ideation to launch.
        </p>
      </section>

      <Photos />
    </div>
  );
}

import ContactForm from "~/components/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <header>
        <h1 className="mx-auto mb-8 max-w-7xl text-4xl font-bold text-gray-100 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
          Get in touch
        </h1>
      </header>

      <section className="mx-auto mb-16 max-w-7xl">
        <ContactForm />
      </section>
    </>
  );
}

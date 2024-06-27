import ContactForm from "../components/ContactForm";
import Socials from "../components/Socials";

export default function ContactUs() {
    return (
      <section id="contact" className="py-12 md:py-24 px-6">
        <div className="container  mx-auto px-4 md:px-6 p-10 border border-gray-700 rounded-3xl">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">Get in touch</h2>
              <p className="text-gray-500">
                Fill out the given form and we'll get back to you as soon as possible.
              </p>
              <Socials/>
            </div>
            <ContactForm/>
          </div>
        </div>
      </section>
    );
  }
  
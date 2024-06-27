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
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name">First name</label>
                  <input
                    id="first-name"
                    placeholder="Enter your first name"
                    className="w-full px-3 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name">Last name</label>
                  <input
                    id="last-name"
                    placeholder="Enter your last name"
                    className="w-full px-3 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  className="w-full px-3 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message">Message</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-700 rounded-lg min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900"
                  id="message"
                  placeholder="Enter your message"
                />
              </div>
              <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
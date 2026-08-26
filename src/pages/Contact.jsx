import { NavLink } from "react-router-dom"

const Contact = () => {
  return (
    <div className="bg-base-100">
      {/* Hero Header */}
      <div className="relative bg-[#2d3e2f] py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#d4a574] rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4a574] rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#d4a574] text-sm uppercase tracking-[0.3em] mb-3 font-light">Get in Touch</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Contact Us
          </h1>
          <p className="text-white/60 max-w-md mx-auto text-sm sm:text-base">
            We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2d3e2f] mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                Visit Moho
              </h2>
              <div className="w-16 h-[2px] bg-[#d4a574] mb-6" />
              <p className="text-base-content/60 leading-relaxed">
                Come experience the warmth of our kitchen. We're located in the heart of Bhola, 
                ready to welcome you with delicious food and a cozy atmosphere.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-base-200/50 hover:bg-base-200 transition-colors duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#2d3e2f] flex items-center justify-center shrink-0 group-hover:bg-[#d4a574] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2d3e2f] mb-1">Our Location</h3>
                  <p className="text-base-content/60 text-sm">Kalibari Rd, Bhola</p>
                  <p className="text-base-content/40 text-xs mt-1">MMH2+X2J</p>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+8801671500132"
                className="flex items-start gap-4 p-5 rounded-2xl bg-base-200/50 hover:bg-base-200 transition-colors duration-300 group block"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2d3e2f] flex items-center justify-center shrink-0 group-hover:bg-[#d4a574] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2d3e2f] mb-1">Call Us</h3>
                  <p className="text-base-content/60 text-sm">+880 1671-500132</p>
                  <p className="text-base-content/40 text-xs mt-1">Available daily</p>
                </div>
              </a>

              {/* Social Media */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-base-200/50 hover:bg-base-200 transition-colors duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#2d3e2f] flex items-center justify-center shrink-0 group-hover:bg-[#d4a574] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2d3e2f] mb-2">Follow Us</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://www.facebook.com/moho2220/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#2d3e2f]/10 hover:bg-[#2d3e2f] hover:text-white text-[#2d3e2f] text-sm transition-all duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" className="fill-current">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/moho_bistro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#2d3e2f]/10 hover:bg-[#2d3e2f] hover:text-white text-[#2d3e2f] text-sm transition-all duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" className="fill-current">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="p-6 rounded-2xl bg-[#2d3e2f] text-white">
              <h3 className="font-semibold text-[#d4a574] text-sm uppercase tracking-wider mb-4">Opening Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Saturday - Thursday</span>
                  <span className="text-white/90">10:00 AM - 11:00 PM</span>
                </div>
                <div className="w-full h-[1px] bg-white/10" />
                <div className="flex justify-between">
                  <span className="text-white/60">Friday</span>
                  <span className="text-white/90">2:00 PM - 11:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map + Contact Form */}
          <div className="space-y-8">
            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-base-300">
              <iframe
                title="Moho Restaurant Location"
                src="https://maps.google.com/maps?q=MOHO+মোহ্+MMH2%2BX2J+Kalibari+Rd&t=&z=17&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[300px] sm:h-[350px] md:h-[400px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Form */}
            <div className="p-6 sm:p-8 rounded-2xl bg-base-200/50 border border-base-300">
              <h3 className="text-xl font-bold text-[#2d3e2f] mb-1" style={{ fontFamily: "'Georgia', serif" }}>
                Send us a Message
              </h3>
              <p className="text-base-content/50 text-sm mb-6">We'll get back to you as soon as possible.</p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-base-content/70 mb-1.5 block">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="input input-bordered w-full bg-base-100 focus:border-[#2d3e2f] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-base-content/70 mb-1.5 block">Phone</label>
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      className="input input-bordered w-full bg-base-100 focus:border-[#2d3e2f] focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-base-content/70 mb-1.5 block">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="input input-bordered w-full bg-base-100 focus:border-[#2d3e2f] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-base-content/70 mb-1.5 block">Message</label>
                  <textarea
                    placeholder="How can we help you?"
                    rows={4}
                    className="textarea textarea-bordered w-full bg-base-100 focus:border-[#2d3e2f] focus:outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn w-full bg-[#2d3e2f] hover:bg-[#1e2b20] text-white border-none text-sm uppercase tracking-wider"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-[#f5f0eb] py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2d3e2f] mb-3" style={{ fontFamily: "'Georgia', serif" }}>
            Ready to Dine with Us?
          </h2>
          <p className="text-base-content/50 mb-6 max-w-md mx-auto text-sm sm:text-base">
            Book a table or walk in — we're always happy to welcome you.
          </p>
          <a
            href="tel:+8801671500132"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#2d3e2f] text-white rounded-full hover:bg-[#1e2b20] transition-colors duration-300 text-sm uppercase tracking-wider"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
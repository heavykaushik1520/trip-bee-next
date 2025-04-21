// app/components/Footer.tsx

export default function Footer() {
  return (
    <div
      className="w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/home/footer.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" bg-opacity-60 text-white">
        {" "}
        {/* Changed overlay to black for better contrast with the text on the image */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Newsletter Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold max-w-xl leading-tight">
              Stay Updated With The Latest Travel News, Tips, And Exclusive
              Offers
            </h2>
            <div className="w-full max-w-md">
              <p className="text-sm mb-2">Sign Up For Newsletter Today!</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-white w-full px-4 py-3 rounded-l-full text-black focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-r-full font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links Section with the specified background color */}
      <div className="bg-[#3C1866] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TripBee</h3>
            <p className="text-sm leading-relaxed">
              We curate exceptional travel experiences to ensure every journey
              is unforgettable. Our dedicated team provides personalised
              service, from planning to execution.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">About us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-purple-400">
                  Company Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/award" className="hover:text-purple-400">
                  Award & Certifications
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/faq" className="hover:text-purple-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Customer Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-purple-400">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Cancellation Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">Follow us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-purple-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Optional Copyright Section - can be moved outside if needed */}
      </div>
    </div>
  );
}

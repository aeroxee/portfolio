import Link from "next/link"

export default function Footer() {
  return (
    <footer className="px-5 py-10 md:px-10 lg:px-60 mt-20 bg-gray-900">
      <div className="grid grid-cols-6 gap-4">
        <h1 className="text-2xl font-extrabold text-white">aZ4ziL</h1>

        {/* Resource */}
        <div className="flex flex-col gap-3">
          <h5 className="text-sm text-white font-extrabold mb-2">Resources</h5>
          <Link
            href="/"
            className="text-sm font-extralight text-gray-400 hover:text-white"
          >
            Docs
          </Link>
          <Link
            href="/"
            className="text-sm font-extralight text-gray-400 hover:text-white"
          >
            Learn
          </Link>
          <Link
            href="/"
            className="text-sm font-extralight text-gray-400 hover:text-white"
          >
            Blog
          </Link>
          <Link
            href="/"
            className="text-sm font-extralight text-gray-400 hover:text-white"
          >
            Showcase
          </Link>
          <Link
            href="/"
            className="text-sm font-extralight text-gray-400 hover:text-white"
          >
            Previews
          </Link>
        </div>
        {/* Resource */}

        {/* More */}
        <div className="flex flex-col gap-3">
          <h5 className="text-sm text-white font-extrabold mb-2">More</h5>
          <Link
            href="/"
            className="text-sm font-extralight text-gray-400 hover:text-white"
          >
            Contact
          </Link>
          <Link
            href="/"
            className="text-sm font-extralight text-gray-400 hover:text-white"
          >
            Github
          </Link>
          <Link
            href="/"
            className="text-sm font-extralight text-gray-400 hover:text-white"
          >
            Releases
          </Link>
          <Link
            href="/"
            className="text-sm font-extralight text-gray-400 hover:text-white"
          >
            Telemetry
          </Link>
          <Link
            href="/"
            className="text-sm font-extralight text-gray-400 hover:text-white"
          >
            Governance
          </Link>
        </div>
        {/* More */}

        {/* About */}
        <div className="flex flex-col gap-3">
          <h5 className="text-sm text-white font-extrabold mb-2">
            About Fajri
          </h5>
          <Link
            href="/"
            className="text-sm font-extralight text-gray-400 hover:text-white"
          >
            Facebook
          </Link>
          <Link
            href="/"
            className="text-sm font-extralight text-gray-400 hover:text-white"
          >
            Twitter
          </Link>
          <Link
            href="/"
            className="text-sm font-extralight text-gray-400 hover:text-white"
          >
            Github
          </Link>
          <Link
            href="/"
            className="text-sm font-extralight text-gray-400 hover:text-white"
          >
            Instagram
          </Link>
        </div>
        {/* About */}

        {/* Legal */}
        <div className="flex flex-col gap-3">
          <h5 className="text-sm text-white font-extrabold mb-2">Legal</h5>
          <Link
            href="/"
            className="text-sm font-extralight text-gray-400 hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
        {/* Legal */}

        {/* Subscribe */}
        <div className="flex flex-col">
          <h5 className="text-sm text-white font-extrabold mb-2">
            Subscribe to our newsletter
          </h5>
          <p className="text-sm text-gray-400 font-extralight">
            Stay updated on new releases and features, guides, and case studies.
          </p>
          <form className="mt-4 relative">
            <input
              type="text"
              placeholder="you@domain.com"
              className="bg-gray-600 px-4 py-1 rounded-sm outline-none text-white"
            />
          </form>
        </div>
        {/* Subscribe */}
      </div>

      <p className="text-sm font-extralight text-gray-400 mt-10">
        &copy; 2024 aZ4ziL, Inc.
      </p>
    </footer>
  )
}

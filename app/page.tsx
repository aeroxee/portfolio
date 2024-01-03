import {
  faFacebook,
  faGithub,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <header className="mt-10 text-gray-300">
        <h1 className="text-white text-3xl mb-4 font-semibold">
          Selamat Datang Di Portfolio Saya
        </h1>
        <p className="mb-5">
          Halo! Saya seorang mahasiswa yang penuh antusiasme dalam dunia
          pengembangan website. Saya gemar menggunakan Next.js untuk menciptakan
          antarmuka yang responsif dan dinamis, sambil mengandalkan Golang
          sebagai fondasi backend yang handal.
        </p>
        <p>
          Kombinasi kecintaan pada teknologi frontend dan kemampuan dalam Golang
          memungkinkan saya untuk menciptakan pengalaman web yang menarik dari
          sisi tampilan hingga performa. Saya bersemangat untuk terus belajar
          dan mengembangkan keterampilan saya dalam menciptakan solusi yang
          inovatif di dunia digital.
        </p>
        <hr className="my-10 border border-gray-700" />
        {/* Social */}
        <ul className="flex gap-4 justify-center">
          <li>
            <Link href="" target="_blank" className="" legacyBehavior>
              <FontAwesomeIcon icon={faGithub} className="text-white text-xl" />
            </Link>
          </li>
          <li>
            <Link href="" target="_blank" className="" legacyBehavior>
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white text-xl"
              />
            </Link>
          </li>
          <li>
            <Link href="" target="_blank" className="" legacyBehavior>
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white text-xl"
              />
            </Link>
          </li>
          <li>
            <Link href="" target="_blank" className="" legacyBehavior>
              <FontAwesomeIcon
                icon={faPinterest}
                className="text-white text-xl"
              />
            </Link>
          </li>
        </ul>
        {/* Social */}
      </header>
    </>
  )
}

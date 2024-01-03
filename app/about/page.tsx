import LoadingImage from "@/components/LoadingImage"
import Man1Image from "@/public/assets/man1.jpg"

export default function About() {
  const handleImageLoading = () => {}

  return (
    <>
      <header className="mt-10">
        <h1 className="text-xl md:text-2xl lg:text-4xl text-white font-semibold">
          Tentang Saya
        </h1>
      </header>
      <section className="flex flex-col lg:flex-row mt-10 gap-5">
        <LoadingImage
          image={Man1Image}
          width={500}
          height={300}
          alt="my photo"
          className="w-full lg:w-[300px] h-auto rounded-lg"
        />
        <article>
          <p className="text-gray-300 text-sm mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque optio
            quod accusantium corrupti minima possimus esse dolores nulla tempora
            officia expedita maxime explicabo, et, quia, vero fuga similique
            molestiae omnis.
          </p>
          <p className="text-gray-300 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            reprehenderit nihil facilis repudiandae vero cupiditate, non minima
            mollitia alias labore vel commodi nesciunt rem fugiat. Eius ipsa
            fuga iure delectus!
          </p>
        </article>
      </section>
    </>
  )
}

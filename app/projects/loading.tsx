export default function Loading() {
  return (
    <div className="mt-10">
      <p className="text-gray-300 mb-10 text-lg">
        Berikut adalah project saya yang berada di Github.
      </p>
      {[0, 1, 2, 3].map((data: any, index: any) => (
        <article
          className="mb-10 animate-pulse"
          style={{ animationDuration: "1.5s" }}
          key={index}
        >
          <header>
            <div className="w-[60px] h-[25px] bg-gray-400 rounded-full mb-4"></div>
            <div className="w-[60%] h-[9px] bg-gray-400 rounded-full mb-2"></div>
            <div className="w-[60px] h-[19px] bg-gray-400 rounded-full"></div>
          </header>
        </article>
      ))}
    </div>
  )
}

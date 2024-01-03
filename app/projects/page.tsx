import fetchAPIGithub from "@/lib/fetchAPIGithub"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

interface RepoData {
  id: number
  name: string
  description: string | null
  created_at: string
  html_url: string
  visibility: string
  language: string
  // tambahkan tipe data lain yang diperlukan
}

export default async function Projects() {
  const api_data: RepoData[] = await fetchAPIGithub()
  const filterData = api_data.filter(
    (repo: RepoData) => repo.visibility === "public"
  )
  const sortedData = filterData.sort(
    (a: any, b: any) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  )

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <>
      <div className="mt-10">
        <p className="text-gray-300 mb-10 text-lg">
          Berikut adalah project saya yang berada di Github.
        </p>
        {sortedData.map((data: RepoData, index: any) => (
          <>
            {data.visibility === "public" && (
              <article
                className="mb-6 border-b border-b-gray-600 pb-5"
                key={index}
              >
                <header>
                  <h4 className="text-sky-600 hover:text-sky-800 text-2xl font-semibold mb-2">
                    <Link href={data.html_url} target="_blank">
                      {data.name}
                    </Link>
                  </h4>
                </header>

                <main className="my-4">
                  <p className="text-sm text-gray-400">
                    {data.description == null ? (
                      <span>Tidak ada deskripsi.</span>
                    ) : (
                      data.description
                    )}
                  </p>
                </main>

                <footer className="flex items-center gap-4">
                  <div className="flex gap-2 items-center">
                    <div className="w-[10px] h-[10px] rounded-full bg-sky-600"></div>
                    <p className="text-sm text-gray-400">{data.language}</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faClock} className="text-gray-500" />
                    <span className="text-gray-500 text-sm">
                      {formatDate(data.created_at)}
                    </span>
                  </div>
                </footer>
              </article>
            )}
          </>
        ))}
      </div>
    </>
  )
}

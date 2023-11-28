import AnimeList from "@/app/components/AnimeList"
import Header from "@/app/components/AnimeList/Header"
import { getAnimeResponse } from "@/app/libs/api-libs"


const Page = async ({ params }) => {
    const { keyword } = params

    const decodedKeyword = decodeURI(keyword)
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)
  

  return (
    <> 
      <section>
      <Header title={`Hasil Pencarian Untuk ${decodedKeyword}...`}  linkTitle="Lihat Semua" linkHref="/populer"/>
    <AnimeList api={searchAnime}/>
    </section>
    </>  
  )
}

export default Page
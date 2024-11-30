import Image from "next/image";
import animeInfo from '../utils/getAnime'
import { anime, AnimeAttributes } from "@/types";
export default async function Home() {

  const animeList: anime[] = await animeInfo()
  return (
    <main>
      <section className="flex flex-wrap">
        {animeList?.map( (animeAttributes) =>(
          <div className="w-40 mx-3 my-6 rounded-2xl overflow-hidden bg-main">
            <img className="" src={animeAttributes.attributes.posterImage.small} alt={animeAttributes.attributes.canonicalTitle} width="100%"/>
            <div className="flex justify-center py-2">
              <p className="">{animeAttributes.attributes.canonicalTitle.length > 20 ? `${animeAttributes.attributes.canonicalTitle.slice(0,15)}...` : animeAttributes.attributes.canonicalTitle}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

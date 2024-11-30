import { anime } from "@/types";

export default async function getAnimeInfo() {
  const url = `${process.env.NEXT_PUBLIC_API_URI}/anime?page[limit]=18`;
  const headers = {
    headers: {
      "Accept": "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    },
  };
  try {
    const animeFetch = await fetch(url, headers);

    const animeList: anime[] = (await animeFetch.json()).data;
    console.log(animeList);
    
    return animeList;
  } catch (error) {
    console.log(error);

    return [];
  }
}

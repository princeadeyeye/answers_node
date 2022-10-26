interface CharactersResponseResultNameUrl {
    name: string;
    url: string;
}
interface CharactersResponseResult {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: CharactersResponseResultNameUrl,
    location: CharactersResponseResultNameUrl,
    image: string,
    episode: string[],
    url: string,
    created: string
  }
interface CharactersResponse {
    info: {
        count: number,
        pages: number,
        next: string,
        prev: string,
    },
    results: CharactersResponseResult[]
}

interface EpisodesResponse {
    info: {
        count: number,
        pages: number,
        next: string,
        prev: string,
    },
    results: EpisodeResponseResult[]
    
}

interface EpisodeResponseResult {
          id: number,
          name: string,
          air_date: string,
          episode: string,
          characters: string[] | CharactersResponseResult[],
          url: string,
          created: string
    
}


const modifiedEpisodeCharacters = async() => {
    try {
        const RICK_MORTY_API = (index: number = 1) => `https://rickandmortyapi.com/api/episode?page=${index}`
        const response = await fetch(RICK_MORTY_API());
        const data = await response.json() as EpisodesResponse;
        const { pages } = data.info;
        const allEpisodesResult: EpisodeResponseResult[] = [];
    
        for (let index = 1; index <= pages; index++) {
            console.log(`fetching page : ${index} of ${pages}, Please wait...`);
            const response = await fetch(RICK_MORTY_API(index));
            const data = await response.json() as EpisodesResponse;
            const { results } = data
            for (let resultIndex = 0; resultIndex < results.length; resultIndex++) {
                const { characters } = results[resultIndex]       
                for(let characterIndex = 0; characterIndex < characters.length; characterIndex++) {
                    const characterUrl = characters[characterIndex] as string;  
                    console.log(`fetching character : ${characterIndex + 1} of ${characters.length} at page: ${index}, Please wait...`);                  
                    const characterResponse = await fetch(characterUrl);
                    const characterData = await characterResponse.json() as CharactersResponseResult;
                    results[resultIndex].characters[characterIndex] = characterData
                }     
            }
            
            allEpisodesResult.push(...results)
        }
        console.log(allEpisodesResult)
    } catch (error: unknown) {
        console.log(error);
        
    }
}
// // N:B USE NODE 17.50 and above
modifiedEpisodeCharacters();
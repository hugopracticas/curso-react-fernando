import axios from "axios";

export const getRickAndMortyData = async () => {
  try {
    const {
      status,
      data: { results },
    } = await axios.get("https://rickandmortyapi.com/api/character");
    return { status, results };
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};

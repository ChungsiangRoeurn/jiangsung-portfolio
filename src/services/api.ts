// Fetch Manga Data
export const fetchMangaData = async () => {
  try {
    const url = new URL("https://openlibrary.org/search.json");
    url.searchParams.set("q", "One Piece");
    url.searchParams.set("limit", "3");
    url.searchParams.set(
      "fields",
      "title,author_name,first_publish_year,cover_i",
    );

    const response = await fetch(url.toString());
    const data = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error("Error fetching manga data:", error);
    return [];
  }
};

// Fetch Anime Data
export const fetchAnimeData = async () => {
  try {
    const response = await fetch(
      "https://api.jikan.moe/v4/anime?q=psycho-pass&limit=3",
    );
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching anime data:", error);
    return [];
  }
};

// Fetch Chess Data
export const fetchChessData = async () => {
  try {
    return {
      rating: 1200,
      openings: ["Ruy Lopez", "Sicilian Defense"],
      progress: 60,
    };
  } catch (error) {
    console.error("Error fetching chess data:", error);
    return {
      rating: 1200,
      openings: ["Ruy Lopez", "Sicilian Defense"],
      progress: 60,
    };
  }
};

export const fetchTechVideosData = async () => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?channelId=UCXuqSBlHAE6Xw-yeJA0Tunw&order=date&maxResults=3&part=snippet&key=YOUR_API_KEY`,
    );
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching tech videos:", error);
    return [];
  }
};
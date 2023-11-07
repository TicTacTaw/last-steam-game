import ky from "ky";

export const fetchLastPlayedGame = async () => {
  const { response }: any = await ky
    .get(
      `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_USER_ID}&format=json`
    )
    .json();

  const games = response.games.sort((a, b) =>
    a.rtime_last_played >= b.rtime_last_played ? -1 : 1
  );

  return games[0];
};

export const fetchGameDetails = async (appId: number) => {
  const data: any = await ky
    .get(`http://store.steampowered.com/api/appdetails?appids=${appId}`)
    .json();

  return data[appId];
};

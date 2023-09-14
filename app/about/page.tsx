/// <reference types="spotify-api" />
import Image from "next/image";
import Photos from "~/components/photos";
import styles from "~/styles/about.module.css";
import Cookies from "js-cookie";

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
  process.env;

export default async function AboutPage() {
  const client_id = SPOTIFY_CLIENT_ID;
  const client_secret = SPOTIFY_CLIENT_SECRET;
  const refresh_token = SPOTIFY_REFRESH_TOKEN;

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
  const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=10`;
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

  const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      cache: "no-store",
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refresh_token || "",
      }),
    });
    const { access_token, expires_in } = await response.json();
    Cookies.set("spotify-token", access_token as string, {
      expires: expires_in as number,
    });

    return access_token as string;
  };

  async function getRecentlyPlayed() {
    const access_token =
      Cookies.get("spotify-token") || (await getAccessToken());

    const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: "no-store",
    });
    return await response.json();
  }

  const { items }: SpotifyApi.UsersRecentlyPlayedTracksResponse =
    await getRecentlyPlayed();

  const tracks = items.map(({ track }) => {
    const minutes = Math.floor(track.duration_ms / 1000 / 60);
    const seconds = Math.floor(track.duration_ms / 1000) % 60;
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const duration = `${minutes}:${paddedSeconds}`;

    return {
      artists: track.artists.map(
        ({ external_urls: { spotify: url }, id, name }) => ({
          url,
          id,
          name,
        })
      ),
      album: track.album.name,
      albumUrl: track.album.external_urls.spotify,
      id: track.id,
      image: track.album.images[2].url,
      trackName: track.name,
      trackUrl: track.external_urls.spotify,
      duration,
    };
  });
  const uniqueTracks = tracks.filter((track, index, self) => {
    const ids = self.map((t) => t.id);
    return index === ids.indexOf(track.id);
  });

  return (
    <div className="mx-auto max-w-7xl">
      <header>
        <h1 className="mb-8 max-w-5xl text-4xl font-bold text-gray-100 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
          About
        </h1>
      </header>

      <section className="prose mb-16 max-w-5xl dark:prose-invert lg:prose-lg prose-a:text-sky-300 lg:mb-32">
        <p>
          As a seasoned Product Manager with over 10 years of experience, I have
          consistently delivered groundbreaking products in diverse industries
          such as E-commerce, FinTech, Delivery Service, Blockchain, and Mobile
          Apps.
        </p>
        <p>
          My proven track record includes successfully launching more than 75
          products on an international scale. Adept at building robust product
          organizations, I possess a keen understanding of every stage of
          product development, from early ideation to launch.
        </p>
      </section>

      <Photos />

      <section className="my-8 lg:my-8">
        <h2 className="mb-8 text-2xl font-bold text-gray-100 md:text-3xl lg:text-4xl">
          Recently played
        </h2>

        <p className="my-4 md:text-lg lg:text-xl">
          A live feed of my recently played tracks on Spotify.
        </p>
        {uniqueTracks.map(
          (
            {
              artists,
              album,
              albumUrl,
              id,
              image,
              trackName,
              trackUrl,
              duration,
            },
            trackNumber
          ) => (
            <article key={id} className={styles.container}>
              <p className="text-right">{trackNumber + 1}</p>
              <div className="flex items-center gap-4">
                <a href={albumUrl}>
                  <div className="mt-1.5 min-w-[40px]">
                    <Image src={image} alt={album} width={40} height={40} />
                  </div>
                </a>
                <div>
                  <p className={styles.trackTitle}>
                    <a
                      href={trackUrl}
                      className="text-gray-100 hover:underline"
                    >
                      {trackName}
                    </a>
                  </p>
                  <p>
                    {artists.map(({ name, url, id: artistId }, index) => (
                      <span key={artistId}>
                        {index > 0 && ", "}
                        <a href={url} className="hover:underline">
                          {name}
                        </a>
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <p className="hidden sm:block">
                <a href={albumUrl} className="hover:underline">
                  {album}
                </a>
              </p>
              <p className="hidden sm:block">{duration}</p>
            </article>
          )
        )}
      </section>
    </div>
  );
}

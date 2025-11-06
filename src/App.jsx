import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  //information about the selected episode
  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an episode to learn more!</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>
          Episode {selectedEpisode.id}: {selectedEpisode.title}
        </h2>
        <p>Episode Description: {selectedEpisode.description}</p>
      </section>
    );
  }

  function Series() {
    return (
      <section className="episode-list">
        <h2>Episodes</h2>
        <ul className="episode-list">
          {episodes.map((episode) => {
            return (
              <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
                {episode.title}
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main className="layout">
        <Series />
        <EpisodeDetails />
      </main>
    </>
  );
}

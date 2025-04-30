import { useState } from "react";
import { episodeList } from "./data";
import "./index.css"; 

export default function App() {
  //TODO
  
  const [episodes] = useState(episodeList);
  const [selectedId, setSelectedId] = useState(null);
  const selectedEpisode = episodes.find((ep) => ep.id === selectedId);

  return (
    <div className="container">
      <h1>Dark Echoes</h1>

      <ul className="episode-list">
        {episodes.map((episode) => (
          <li key={episode.id} className="episode-item">
            <button
              className={`episode-button ${
                selectedId === episode.id ? "active" : ""
              }`}
              onClick={() => setSelectedId(episode.id)}
            >
              {episode.title}
            </button>
          </li>
        ))}
      </ul>

      {selectedEpisode && (
        <div className="episode-details">
          <h2>{selectedEpisode.title}</h2>
          <p>{selectedEpisode.description}</p>
        </div>
      )}
    </div>
  );
}
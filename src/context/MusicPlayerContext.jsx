import { useState, createContext } from "react";
import Track1 from "../mp3/track_1.mp3";
import Track2 from "../mp3/track_2.mp3";
import Track3 from "../mp3/track_3.mp3";

export const MusicPlayerContext = createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Better Day",
      file: Track1,
    },
    {
      name: "The Beat of Nature",
      file: Track2,
    },
    {
      name: "Whip",
      file: Track3,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

export default function MusicPlayerProvider({ children }) {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
}

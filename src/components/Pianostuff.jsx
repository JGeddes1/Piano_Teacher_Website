import React from "react";
import PianoKey from "./PianoKey";

const notes = [
  { note: "C", isSharp: false, label: "C" },
  { note: "C#", isSharp: true, label: "C#/Db" },
  { note: "D", isSharp: false, label: "D" },
  { note: "D#", isSharp: true, label: "D#/Eb" },
  { note: "E", isSharp: false, label: "E" },
  { note: "F", isSharp: false, label: "F" },
  { note: "F#", isSharp: true, label: "F#/Gb" },
  { note: "G", isSharp: false, label: "G" },
  { note: "G#", isSharp: true, label: "G#/Ab" },
  { note: "A", isSharp: false, label: "A" },
  { note: "A#", isSharp: true, label: "A#/Bb" },
  { note: "B", isSharp: false, label: "B" },
];

const HeroSection = () => {
  const playNote = (note) => {
    const audio = new Audio(`src/assets/sounds/${note}.wav`);
    audio.play();
  };

  return (
    <div className="relative flex w-full h-6 bg-gray-100 justify-center">
      {notes.map(({ note, isSharp, label }, index) => (
        <div key={note} className={`flex-grow `}>
          <PianoKey
            note={note}
            isSharp={isSharp}
            label={label}
            onClick={playNote}
            small
          />
        </div>
      ))}
    </div>
  );
};

export default asd;

const Piano = ({ banner }) => {
  const notes = [
    { note: "C", isSharp: false, label: "C" },
    { note: "C#", isSharp: false, label: "C#/Db" },
    { note: "D", isSharp: false, label: "D" },
    { note: "D#", isSharp: true, label: "D#/Eb" },
    { note: "E", isSharp: false, label: "E" },
    { note: "F", isSharp: false, label: "F" },
    { note: "F#", isSharp: true, label: "F#/Gb" },
    { note: "G", isSharp: false, label: "G" },
    { note: "G#", isSharp: false, label: "G#/Ab" },
    { note: "A", isSharp: false, label: "A" },
    { note: "A#", isSharp: true, label: "A#/Bb" },
    { note: "B", isSharp: false, label: "B" },
  ];

  return (
    <div
      className={`relative flex justify-center ${
        banner ? "h-24" : "h-48"
      } w-full`}
    >
      {notes.map(({ note, isSharp, label }, index) => (
        <div
          key={note}
          className={`
    
              ${
                !isSharp && (index === 4 || index === 11) // E-F and B-C gap fix
                  ? "ml-0"
                  : !isSharp
                  ? "ml-1"
                  : ""
              }
            `}
        >
          {!banner && (
            <span
              className={`text-xs ${isSharp ? "text-white" : "text-black"}`}
            >
              {label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Piano;

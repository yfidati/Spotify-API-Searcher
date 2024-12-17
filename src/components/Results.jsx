import React, { useState } from 'react';
import Draggable from 'react-draggable'; // Import react-draggable
import { FaTimes, FaArrowsAlt } from 'react-icons/fa'; // Close and drag icons

const Results = ({ results }) => {
  const [selectedTrackId, setSelectedTrackId] = useState(null); // Track selected song

  if (!results) return null;

  const { tracks } = results;

  return (
    <div className="p-4 px-4 sm:px-6 md:mx-8 ">
      {/* Grid of Songs */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6">
        {tracks.items.map((track) => (
          <div
            key={track.id}
            className="relative bg-gray-900 text-white p-2 rounded-lg shadow-md flex flex-col items-center hover:bg-gray-800 transition duration-300"
          >
            {/* Album Image */}
            <img
              src={track.album.images[0]?.url}
              alt={track.name}
              className="w-32 h-32 object-cover rounded-md mb-2"
            />

            {/* Track Title and Artist */}
            <h4 className="text-sm font-bold truncate w-full text-center">{track.name}</h4>
            <p className="text-xs text-gray-400 truncate">{track.artists[0]?.name}</p>

            {/* Play Button */}
            <button
              onClick={() => setSelectedTrackId(track.id)}
              className="mt-2 bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded transition duration-300"
            >
              Play
            </button>
          </div>
        ))}
      </div>

      {/* Draggable Spotify Player */}
{selectedTrackId && (
  <Draggable handle=".drag-handle">
    <div
      className="fixed bottom-4 right-4 bg-gray-900 rounded-lg shadow-lg cursor-move"
      style={{ zIndex: 9999 }}
    >
      {/* Drag Handle */}
      <div className="drag-handle bg-gray-800 text-white flex justify-between items-center px-2 py-1 rounded-t-lg cursor-grab">
        <span className="text-sm flex items-center">
          Drag Me
        </span>
        <button
          onClick={() => setSelectedTrackId(null)}
          className="text-red-500 hover:text-red-700"
        >
          X
        </button>
      </div>

      {/* Responsive Spotify Player */}
      <iframe
        src={`https://open.spotify.com/embed/track/${selectedTrackId}`}
        className="w-full sm:w-[350px] md:w-[400px] lg:w-[450px] h-[80px] rounded-b-lg"
        frameBorder="0"
        allow="encrypted-media"
        allowTransparency="true"
      ></iframe>
    </div>
  </Draggable>
)}

    </div>
  );
};

export default Results;

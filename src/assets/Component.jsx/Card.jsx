import React from 'react';

function Card({ name, profasion, Image, friends, cardindex, handel }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-72 flex flex-col items-center">
      <img 
        className="rounded-full w-24 h-24 object-cover mb-4" 
        src={Image} 
        alt={name} 
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-500 mb-4">{profasion}</p>
      <button 
        onClick={() => handel(cardindex)}   // Correct onClick handler
        className={`px-4 py-2 rounded-lg text-white transition ${
          friends ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {friends ? 'Unfriend' : 'Add Friend'}
      </button>
    </div>
  );
}

export default Card;

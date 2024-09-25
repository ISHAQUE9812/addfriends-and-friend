import React, { useState } from 'react';
import Card from './assets/Component.jsx/Card';

function App() {
  const initialData = [
    {
      name: "ishaque",
      profasion: "coder",
      friends: false,
      Image: "https://img.freepik.com/free-photo/girlfriends-dancing-party_23-2148543244.jpg?size=626&ext=jpg&ga=GA1.1.1979575676.1719659022&semt=ais_hybrid"
    },
    {
      name: "salman",
      profasion: "frontend",
      friends: false,
      Image: "https://img.freepik.com/free-photo/copy-space-female-dj-checking-audio-console_23-2148325492.jpg?size=626&ext=jpg&ga=GA1.1.1979575676.1719659022&semt=ais_hybrid"
    },
    {
      name: "shaikh",
      profasion: "thalua",
      friends: false,
      Image: "https://img.freepik.com/free-photo/rear-view-dj-playing-music-front-excited-crowd-music-festival-by-night_637285-598.jpg?size=626&ext=jpg&ga=GA1.1.1979575676.1719659022&semt=ais_hybrid"
    }
  ];

  const [val, setval] = useState(initialData);

  // Function to handle the friend toggle
  const handleToggleFriend = (cardindex) => {
    setval((prevState) => {
      return prevState.map((item, index) => {
        if (index === cardindex) {
          return { ...item, friends: !item.friends };
        }
        return item;
      });
    });
  };

  return (
    <div className='w-full h-screen bg-zinc-400 flex items-center justify-center gap-4'>
      {val.map((item, index) => (
        <Card 
          key={index} 
          cardindex={index} 
          handel={handleToggleFriend}  // Correct function reference
          name={item.name} 
          profasion={item.profasion} 
          Image={item.Image} 
          friends={item.friends}   // Passing the state of friends
        />
      ))}
    </div>
  );
}

export default App;


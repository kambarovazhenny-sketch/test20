import React, { useState, useEffect } from 'react';
import next from '../../assets/next.png';
import './block3.css';

function Block3()  {
  const [rooms, setRooms] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://69432c7869b12460f313e9ab.mockapi.io/hotel/rooms')
      .then(res => {
        if (!res.ok) throw new Error('Не загрузилось :(');
        return res.json();
      })
      .then(data => {
        setRooms(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setError('Что-то пошло не так с загрузкой номеров');
        setLoading(false);
      });
  }, []);

  const nextRoom = () => {
    if (rooms.length > 0) {
      setCurrent((current + 1) % rooms.length);
    }
  };

  useEffect(() => {
    if (rooms.length <= 1) return;
    const timer = setInterval(nextRoom, 8000);
    return () => clearInterval(timer);
  }, [rooms, current]);

  if (loading) {
    return (
      <div className="rooms-section">
        <div style={{ padding: '100px', textAlign: 'center', fontSize: '1.5rem' }}>
          Гружу номера...
        </div>
      </div>
    );
  }

  if (error || rooms.length === 0) {
    return (
      <div className="rooms-section">
        <div style={{ padding: '100px', textAlign: 'center', color: 'red' }}>
          {error || 'Номера не найдены :('}
        </div>
      </div>
    );
  }

  const currentRoom = rooms[current];

  return (
    <div className="rooms-section">
      <div className="rooms-background" />

      <div className="rooms-title-wrapper">
        <h1 className="rooms-title">ROOMS 
          <br />& APARTMENTS</h1>
        <p className="rooms-subtitle">
          ALL ROOM DECORATION WAS MADE WITH ECOLOGICAL CERTIFIED AND SAFE MATERIALS
        </p>
      </div>

      <div className="rooms-content">

        <div className="rooms-left">
          <div className="left-content-wrapper">
       
            <div className="left-block">
              <div className="small-photo-wrapper">
                <img 
                  src={currentRoom.smallImage} 
                  alt={currentRoom.title} 
                  className="small-photo" 
                />
              </div>

  
                <img className="next-big-button" onClick={nextRoom} src={next} alt="Next room" />
         
            </div>

            <div className="center-block">
              <h2 className="room-title">{currentRoom.title}</h2>
              <p className="room-description">{currentRoom.description}</p>

              <div className="slide-indicator">
                0{current + 1} / 0{rooms.length}
              </div>
            </div>

            <div className="right-block"></div>
          </div>
        </div>

        <div className="rooms-right">
          <div className="right-slides">
            <img 
              src={currentRoom.largeImage} 
              alt={currentRoom.title} 
              className="large-photo" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block3;
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  let [allImages, setAllImages] = useState([]);

  useEffect(() => {
    getGallery();
  }, []);

  const getGallery = () => {
    axios.get('/gallery')
    .then((response) => {
      setAllImages(response.data);
      console.log('get all images', allImages);
    })
    .catch((err) => {
      alert('error in get request');
      console.log(err);
    })
  }





    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList allImages={allImages} />
      </div>
    );
}

export default App;

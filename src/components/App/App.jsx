import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

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
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList allImages={allImages} getGallery={getGallery} />
      </div>
      </ThemeProvider>
    );
}

export default App;

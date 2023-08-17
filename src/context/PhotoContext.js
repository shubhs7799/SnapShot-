import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { apiKey } from "../api/config";

export const PhotoContext = createContext();

export const PhotoContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const runSearch = (query) => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setImages(response.data.photos.photo);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Encountered an error with fetching and parsing data", error);
      });
  };

  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotoContext = () => useContext(PhotoContext);


import { StrictMode } from "react";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      Singlecharacter: [],
      result: {},
      Location: [],
      Episode: [],

    },
    actions: {
      getCharacters: async () => {
        await fetch('https://rickandmortyapi.com/api/character', {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(resp => {
            return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
          })
          .then(data => {
            setStore({ characters: data.results })
            console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor

          })
          .catch(error => {
            //manejo de errores
            console.log(error);
          });
      },
      getSingleCharacter: async (id) => {
        await fetch('https://rickandmortyapi.com/api/character/' + id, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(resp => {
            return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
          })
          .then(data => {
            setStore({ Singlecharacter: data })
            console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor

          })
          .catch(error => {
            //manejo de errores
            console.log(error);
          });
      },
            getLocation: async () => {
        await
          fetch("https://rickandmortyapi.com/api/location")
            .then(response => response.json())
            .then(data => setStore({ Location: data.results }));
      },
      getEpisode: async () => {
        await
          fetch("https://rickandmortyapi.com/api/episode")
            .then(response => response.json())
            .then(data => setStore({ Episode: data.results }));
      },

    },
  };
  

};


export default getState;
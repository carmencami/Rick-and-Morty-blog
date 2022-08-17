import { StrictMode } from "react";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      Singlecharacter: [],
      SingleLocation:{},
      SingleEpisode:{},
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
      getSingleLocation: async (id) => {
        await fetch('https://rickandmortyapi.com/api/location/' + id, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(resp => {
            console.log(resp);
            return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
            
          })
          .then(data => {
            setStore({ SingleLocation: data })
            console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor

          })
          .catch(error => {
            //manejo de errores
            console.log(error);
          });
      },
      getEpisode: async () => {
        await
          fetch("https://rickandmortyapi.com/api/episode")
            .then(response => response.json())
            .then(data => setStore({ Episode: data.results }));
      },
      getSingleEpisode: async (id) => {
        await fetch('https://rickandmortyapi.com/api/episode/' + id, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(resp => {
            return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
          })
          .then(data => {
            setStore({ SingleEpisode: data })
            console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor

          })
          .catch(error => {
            //manejo de errores
            console.log(error);
          });
      },


    },
  };
  

};


export default getState;
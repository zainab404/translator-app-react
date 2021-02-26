import React, {useState, useEffect} from 'react';
import TextInput from './container/TextInput';

const Main = () => {
  const langOptions = [
    {
      label: "Urdu", 
      value: "ur"
    },

    {
      label: "Japanese",
      value: "ja"
    },

    {
      label: "Spanish",
      value: "es"
    }
  ]
  return (
    <TextInput langOptions={langOptions}/>
  )
};

export default Main;
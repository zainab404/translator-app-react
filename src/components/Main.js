import React, {useState, useEffect} from 'react';
import TextInput from './container/TextInput';
import Dropdown from './container/Dropdown';

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

  const onButtonClick = () => {
    console.log("hello")
  };

// STATE INSTANTIATION 
  const [originalText, setOriginalText] = useState('');
  const [selectedLang, setSelectedLang] = useState(langOptions[0]);
  
  return (
    <div>
      <TextInput originalText={originalText} setOriginalText={setOriginalText}/>
      <Dropdown selectedLang={selectedLang} setSelectedLang={setSelectedLang} langOptions={langOptions} dropdownLabel="Select Language"/>
      
    <button onClick={onButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      Translate
  </button>

  </div>
    
  )
};

export default Main;
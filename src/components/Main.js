import React, {useState} from 'react';
import TextInput from './container/TextInput';
import Dropdown from './container/Dropdown';
import TextOutput from './presentational/TextOutput';
import axios from 'axios';

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

  // STATE INSTANTIATION 
  const [originalText, setOriginalText] = useState('');
  const [selectedLang, setSelectedLang] = useState(langOptions[0].value);
  const [translatedText, setTranslatedText] = useState("");

  const onButtonClick = async () => {
    const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
      params: {
        q: originalText,
        target: selectedLang,
        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
      }
    })
    // console.log(selectedLang.value)
    setTranslatedText(data.data.translations[0].translatedText)
  };

  return (
    <div>
      <TextInput originalText={originalText} setOriginalText={setOriginalText}/>
      <Dropdown selectedLang={selectedLang} setSelectedLang={setSelectedLang} langOptions={langOptions} dropdownLabel="Select Language"/>
      
    <button onClick={onButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      Translate
  </button>
  <div><TextOutput translatedText={translatedText}/></div>
  </div>  
    
  )
};

export default Main;
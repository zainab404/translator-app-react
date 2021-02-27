
const TextInput = ({originalText, setOriginalText}) => {

  const onTextChange = (e) => {
    setOriginalText(e.target.value)
  };

  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Enter Language:</label>
      <div className="mt-1">
        <input value={originalText} onChange={onTextChange} type="text" name="email" id="email" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-50% sm:text-sm border-gray-300 rounded-md" placeholder="Hello World"/>
    </div>
  </div>
  )
};

export default TextInput;
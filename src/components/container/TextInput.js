
const TextInput = ({langOptions}) => {
  return (
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Enter Language:</label>
      <div class="mt-1">
        <input type="text" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-50% sm:text-sm border-gray-300 rounded-md" placeholder="Hello World"/>
    </div>
  </div>
  )
};

export default TextInput;
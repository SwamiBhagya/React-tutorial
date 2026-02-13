const NewToDoForm = ({ handleInputChange, inputValue, handleFormSubmit }) => {
  return (
    <section className="flex flex-col items-center justify-around border-2 border-gray-600 rounded-xl text-3xl mx-4 my-0 min-h-[25vh] w-full max-w-2xl p-6 bg-gray-900/20 backdrop-blur-md">
      <form
        onSubmit={handleFormSubmit}
        className="w-full flex flex-row items-center gap-3"
      >
        <input
          value={inputValue.content}
          onChange={(event) => handleInputChange(event.target.value)}
          className="w-full border-2 border-gray-500 rounded-lg p-6 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-all"
          type="text"
          placeholder="Type your task..."
        />
        <button
          type="submit"
          className="bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all hover:bg-blue-800 focus:outline-none"
        >
          Add Task
        </button>
      </form>
    </section>
  );
};

export default NewToDoForm;

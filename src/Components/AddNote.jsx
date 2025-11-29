import { IoCloseSharp } from "react-icons/io5";

const AddNote = () => {
  return (
    <div>
      <div className="w-full min-h-screen flex items-center justify-center">
        <form className="w-full md:w-[400px] border-2 border-teal-500 rounded-xl px-4 py-2">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold">Add a new Note</h2>
            <span className="bg-teal-500 hover:bg-teal-600 transition duration-300 p-2 rounded-full text-white cursor-pointer">
              <IoCloseSharp />
            </span>
          </div>
          <div className="flex flex-col gap-2 justify-center my-3">
            <label htmlFor="title" className="text-sm">
              Note Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              max={20}
              placeholder="Enter your note title."
              className="border border-gray-200 p-2 rounded-md outline-none focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>
          <div className="flex flex-col gap-2 justify-center my-3">
            <label htmlFor="title" className="text-sm">
              Note Description <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              max={100}
              placeholder="Enter your note Description."
              className="border border-gray-200 p-2 rounded-md outline-none focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>
          <button className="bg-teal-500 hover:bg-teal-600 transition duration-300 w-full p-2 rounded-xl text-white font-bold cursor-pointer">
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;

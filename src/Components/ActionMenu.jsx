import { RiAddBoxLine } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";

const ActionMenu = () => {
  return (
    <div className="flex justify-between px-8 py-4">
      <form action="">
        <div className="border-2 border-teal-500  rounded-full flex justify-between">
          <input
            type="text"
            placeholder="Search your note here."
            max={20}
            required
            className="px-2 rounded-full outline:none focus:outline-none"
          />
          <button className="bg-teal-500 p-2 rounded-full text-white">
            <FaSearch />
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center gap-2">
        <button className="bg-teal-500 py-2 px-4 rounded-full text-white">
          <FaFilter />
        </button>
        <button className="bg-teal-500 py-2 px-4 rounded-full text-white">
          <RiAddBoxLine />
        </button>
        <button className="bg-teal-500 py-2 px-4 rounded-full text-white">
          <IoIosColorPalette />
        </button>
      </div>
    </div>
  );
};

export default ActionMenu;

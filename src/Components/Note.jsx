import { RiEditBoxLine } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";

const Note = () => {
  return (
    <div className="w-[250px]">
      <div className="bg-teal-600 px-2">
        <h2>Note Title</h2>
      </div>
      <div className="bg-teal-100 p-2">
        <p className="text-justify text-gray-900">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, at
          possimus illum minus dolorum vero officiis architecto odio voluptate
          esse ullam deserunt obcaecati numquam sequi? Quis dolores maxime
          dolore quibusdam.
        </p>
      </div>
      <div className="flex justify-between items-center px-2 py-1 bg-teal-100">
        <div>
          <p>Created: 10:30 AM</p>
        </div>
        <div className="flex gap-1 items-center">
          <RiEditBoxLine />
          <RxCrossCircled />
        </div>
      </div>
    </div>
  );
};

export default Note;

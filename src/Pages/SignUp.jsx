import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[380px] border border-gray-200 p-4 rounded-md bg-white">
        <h2 className="text-2xl font-bold my-4">Signup </h2>

        <form>
          <div className="flex flex-col my-2">
            <label htmlFor="name" className="text-sm flex items-center gap-1">
              <FaRegUser /> User Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="w-full border border-gray-200 p-2 rounded-md my-2 
                     focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 
                     transition duration-150 shadow-sm"
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="email" className="text-sm flex items-center gap-1">
              <MdOutlineMail />
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-200 p-2 rounded-md my-2 
                     focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 
                     transition duration-150 shadow-sm"
            />
          </div>
          <div className="flex flex-col my-2">
            <label
              htmlFor="password"
              className="text-sm flex items-center gap-1"
            >
              <TbPasswordUser />
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="w-full border border-gray-200 p-2 rounded-md my-2 
                     focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 
                     transition duration-150 shadow-sm"
            />
          </div>
          <button className="bg-teal-500 duration-500 hover:bg-teal-600 w-full py-2 my-2 rounded-md text-white">
            Signup
          </button>
        </form>
        <p className="text-sm text-center my-2">
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

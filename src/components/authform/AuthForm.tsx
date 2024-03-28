import { FormEvent } from "react";
import { Link } from "react-router-dom";
import { login } from "../../actions/auth";
import { useAuthDispatch } from "../../hooks";

function AuthForm() {
    const dispatch = useAuthDispatch()
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData) as {username: string; password: string};
    console.log(data);
    dispatch(await login(data));
  }
  return (
    <div className="items-center justify-center h-screen mt-10">
      <div className="m-20 border-2 p-6 rounded-lg">
        <div className="flex items-center justify-center">
          <h1 className="font-sans text-3xl">Login</h1>
        </div>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className=" gap-6 mb-6 md:grid-cols-2">
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-5">
          <button className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
            Submit
          </button>
        </div>
        </form>


      </div>
    </div>
  );
}

export default AuthForm;

import { useAddUser } from "hooks/user/use_add_user";
import { useForm } from "react-hook-form";
import { TUser } from "types/user";

function AddUser({ onAddedUser }: { onAddedUser: Function }) {
  const { register, handleSubmit } = useForm<TUser>({
    shouldUseNativeValidation: true,
  });
  const { save } = useAddUser(onAddedUser);
  return (
    <>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="name"
              {...register("name")}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="email"
              {...register("email")}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleSubmit(
                async (values: { name: string; email: string }) => {
                  await save({
                    name: values.name,
                    email: values.email,
                  });
                }
              )}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddUser;

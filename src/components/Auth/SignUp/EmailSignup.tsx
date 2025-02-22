import Loader from "@/components/Common/Loader";
import Link from "next/link";

const EmailSignup = ({ handleSubmit, data, setData, loader }: any) => {
  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="mb-3 block text-custom-sm font-medium text-dark"
          >
            Name
          </label>
          <input
            value={data.name}
            onChange={(e) =>
              setData({
                ...data,
                [e.target.name]: e.target.value,
              })
            }
            name="name"
            type="name"
            placeholder="Enter your name"
            className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-3 block text-custom-sm font-medium text-dark"
          >
            Email
          </label>
          <input
            value={data.email}
            onChange={(e) =>
              setData({
                ...data,
                [e.target.name]: e.target.value,
              })
            }
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-3 block text-custom-sm font-medium text-dark"
          >
            Password
          </label>
          <input
            value={data.password}
            onChange={(e) =>
              setData({
                ...data,
                [e.target.name]: e.target.value.toLowerCase(),
              })
            }
            name="password"
            type="password"
            placeholder="Confirm password"
            className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-md bg-dark px-5 py-3.5 font-medium text-white transition-all duration-200 hover:opacity-90"
        >
          Sign up {loader && <Loader />}
        </button>

        <p className="mt-5 text-center">
          Already a member?
          <Link href="/auth/signin" className="ml-1 text-dark">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default EmailSignup;

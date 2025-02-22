import Loader from "@/components/Common/Loader";
import Link from "next/link";

const EmailSignin = ({ handleSubmit, data, setData, loader }: any) => {
  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit}>
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
              setData({ ...data, email: e.target.value.toLowerCase() })
            }
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="mb-3 block text-custom-sm font-medium text-dark"
          >
            Password
          </label>
          <input
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            type="password"
            placeholder="Confirm password"
            name="password"
            required
            className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
          />
        </div>

        <div className="mb-7.5 flex items-center justify-between">
          <div>
            <label
              htmlFor="checkboxLabelTwo"
              className="flex cursor-pointer select-none items-center"
            >
              <div className="relative">
                <input
                  onChange={() =>
                    setData({
                      ...data,
                      checkboxToggle: !data.checkboxToggle,
                    })
                  }
                  type="checkbox"
                  id="checkboxLabelTwo"
                  className="sr-only"
                />

                <div
                  className={`mr-2 flex h-5 w-5 items-center justify-center rounded-md border border-gray-4 ${
                    data.checkboxToggle && "border-dark bg-dark"
                  }`}
                >
                  <span
                    className={`opacity-0 ${
                      data.checkboxToggle && "!opacity-100"
                    }`}
                  >
                    <svg
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                        fill="#FFF"
                        stroke="#FF"
                        strokeWidth="0.4"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              Remember me
            </label>
          </div>
          <Link href="/auth/forgot-password" className="text-dark">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-md bg-dark px-5 py-3.5 font-medium text-white transition-all duration-200 hover:opacity-90"
        >
          Sign in {loader && <Loader />}
        </button>

        <p className="mt-5 text-center">
          Don&apos;t have an account?
          <Link href="/auth/signup" className="ml-1 text-dark">
            Sign Up for Free
          </Link>
        </p>
      </form>
    </div>
  );
};

export default EmailSignin;

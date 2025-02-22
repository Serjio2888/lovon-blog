"use client";
import { useForm } from "formbold-react";
import z from "zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
});

const Support = ({ formId }: { formId: string }) => {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="mx-auto mt-40 text-center">
        <h1 className="mb-3.5 text-custom-1 font-bold text-dark">Thank you!</h1>
        <p>Our support team will get back to you ASAP via email.</p>
        <button className="mt-10 rounded-lg bg-dark px-6 py-3 font-medium text-white hover:opacity-90">
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-40 max-w-[550px] rounded-xl ">
      <div className="text-center">
        <h1 className="mb-3.5 text-custom-1 font-bold text-dark">
          Need any Help?
        </h1>
        <p>Our support team will get back to you ASAP via email.</p>
      </div>

      <div className="my-10 bg-white p-4 shadow-box sm:p-7.5 xl:p-10 ">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-3 block text-custom-sm font-medium text-dark"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              name="name"
              className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7  focus:border-transparent focus:ring-2 focus:ring-primary"
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
              type="email"
              placeholder="Enter your email"
              required
              name="email"
              className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7  focus:border-transparent focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="mb-3 block text-custom-sm font-medium text-dark"
            >
              Message
            </label>
            <textarea
              name="message"
              className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7  focus:border-transparent focus:ring-2 focus:ring-primary"
              cols={20}
              rows={5}
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-dark px-5 py-3.5 font-medium text-white transition-all duration-200 hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;

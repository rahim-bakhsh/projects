import { useState } from "react";
import Button from "./ButtonGradient";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formHandler = (e) => {
    // e.preventDefault();
    console.log(formData);
    return formData;
  };

  return (
    <div id="contact">
      <div className="text-center" data-aos="slide-up" data-aos-duration="750">
        <h5 className="text-xl text-primary-gradient font-semibold">
          Contact Us
        </h5>
        <h1 className="text-4xl font-bold mb-[3rem]">Get In Touch!</h1>
      </div>
      <div className="lg:w-9/12 md:w-8/12 mx-auto">
        <div className="" data-aos="slide-up" data-aos-duration="800">
          <p className="text-center w-full  mb-6">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste
            the files, add a little codeand you're done.{" "}
            <a href="https://htmlcodex.com/contact-form">Download Now</a>.
          </p>
          <form className="font-normal">
            <div className="grid grid-cols-12 grid-rows-4 gap-y-5 gap-x-2">
              <div className="lg:col-span-6 md:col-span-6 col-span-12">
                <input
                  type="text"
                  className="w-full h-10 p-5 ps-2 border border-gray-300 rounded-sm text-gray-800 ease-in-out duration-500 outline-blue-200"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={inputHandler}
                />
              </div>
              <div className="lg:col-span-6 md:col-span-6 col-span-12">
                <input
                  type="email"
                  className="w-full h-10 p-5 ps-2 border border-gray-300 rounded-sm text-gray-800 ease-in-out duration-500 outline-blue-200"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={inputHandler}
                />
              </div>
              <div className="col-span-12">
                <input
                  type="text"
                  className="w-full h-10 p-5 ps-2 border border-gray-300 rounded-sm text-gray-800 ease-in-out duration-500 outline-blue-200"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={inputHandler}
                />
              </div>
              <div className="col-span-12 row-start-3 row-end-5">
                <textarea
                  className="w-full h-full p-2 border border-gray-300 rounded-sm text-gray-800 ease-in-out duration-500 outline-blue-200 resize-none"
                  placeholder="Leave a message here"
                  name="message"
                  value={formData.message}
                  onChange={inputHandler}
                ></textarea>
              </div>
            </div>
            <Button
              currentProperties="bg-gradient-to-br from-grad-primary to-grad-secondary py-2.5 px-9 mt-8"
              afterProperties="after:from-grad-secondary after:to-grad-primary"
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

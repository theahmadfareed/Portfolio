import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { FaGithub, FaLinkedin, FaTwitter, FaReddit } from "react-icons/fa";
import { EarthCanvas, StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    user_message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        `service_qa6nqeo`,
        `template_f3fbirq`,
        {
          user_name: form.user_name,
          user_email: form.user_email,
          user_subject: form.user_subject,
          user_message: form.user_message,
        },
        `FnE1paE1eAfiokfEA`
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Thank you. I will get back to you as soon as possible.",
            {
              position: "top-right",
              autoClose: 5000, // 5 seconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            }
          );
          setForm({
            user_name: "",
            user_email: "",
            user_subject: "",
            user_message: "",
          });
        },
        (error) => {
          setLoading(false);

          toast.error("Ahh, something went wrong. Please try again.", {
            position: "top-right",
            autoClose: 5000, // 5 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          console.error(error);
        }
      );
  };

  return (
    <section className="mt-20">
      <div className="">
        <p className={styles.sectionSubText} style={{ color: "#ffff" }}>
          Got a project in mind?
        </p>
        <h3 className={styles.sectionHeadText} style={{ color: "#E7463A" }}>
          Lets talk about it!
        </h3>

        <div
          className={`xl:mt-10 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden `}
        >
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] bg-[#0B0C0D] p-5 rounded-2xl"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 "
            >
              <StarsCanvas />

              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="user_name"
                  value={form.user_name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your email</span>
                <input
                  type="email"
                  name="user_email"
                  value={form.user_email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  Your Subject
                </span>
                <input
                  type="text"
                  name="user_subject"
                  value={form.user_subject}
                  onChange={handleChange}
                  placeholder="What's subject of discussion?"
                  className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  rows={7}
                  name="user_message"
                  value={form.user_message}
                  onChange={handleChange}
                  placeholder="What you want to say?"
                  className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                />
              </label>

              <button
                type="submit"
                className="bg-[#E7463A] py-3 px-8 rounded-xl outline-none w-fit text-white hover:bg-white hover:text-[#E7463A] font-bold shadow-md shadow-primary"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
            <div className={styles.contactDetails}>
              <h3 className={styles.contactDetailsHeading}>
                You can also find me here
              </h3>
              <p className={styles.email}>
                Email:{" "}
                <a
                  href="mailto:hafizmuhammadahmadfarid@gmail.com"
                  className={styles.emailLink}
                >
                  hafizmuhammadahmadfarid@gmail.com
                </a>
              </p>
              <p>Phone: +92-307-0612407</p>
              <div className={styles.socialLinks}>
                <a
                  href="https://www.reddit.com/user/ahmadfareed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaReddit className={styles.socialIcon} />
                </a>
                <a
                  href="https://twitter.com/Ali62763942275"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className={styles.socialIcon} />
                </a>
                <a
                  href="https://github.com/theahmadfareed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className={styles.socialIcon} />
                </a>
                <a
                  href="https://linkedin.com/in/theahmadfareed/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className={styles.socialIcon} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </div>

      <div
        id="ava"
        className="absolute xs:bottom-1 w-full flex justify-center items-center right-0"
      >
        <a href="#hero">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");

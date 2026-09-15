"use client";
import Link from "next/link";
import Image from "next/image";
import { SiGithub, SiFigma, SiTrello } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Home() {
  const portofolioRef = useRef(null);
  const isInView = useInView(portofolioRef, { once: true });
  return (
    <>
      <section id="home" className="lg:px-10  pt-5 mt-28">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="w-full self-center px-4 lg:w-1/2 ">
              <h1 className="text-base font-semibold text-amber-900 md:text-xl ">
                Hello👋, I&apos;m
                <span className="block font-bold text-slate-900 text-4xl mt-1 lg:text-5xl md:scale-125 md:origin-left">
                  Ica Ginting
                </span>
              </h1>
              <h2 className="font-medium text-slate-400 text-sm lg:text-lg pt-2">
                Student of Software Engineering Technology
              </h2>
              <p className="font-medium text-lg font-mono text-[#6B3B0A] md:text-2xl mb-10 leading-relaxed">
                Exploring the art of development.
              </p>
              <a
                href="ica_cv_terbaru.pdf"
                className="text-base font-semibold text-white  bg-amber-900
                py-3 px-8 rounded-full hover:shadow-lg opacity-80 transition duration-300 ease-in-out"
              >
                View CV
              </a>
            </div>
            <div className=" w-full self-end px-4 lg:w-1/2">
              <div className="relative   lg:right-0">
                <Image
                  className=" object-cover mx-auto max-w-full"
                  src="/ica-foto.png"
                  alt="Foto Profile"
                  width={250}
                  height={250}
                ></Image>
                <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    width={400}
                    height={400}
                  >
                    <path
                      fill="#78350f"
                      d="M68.6,-17.9C77.3,4.5,64.7,38.1,43,52.3C21.2,66.5,-9.7,61.2,-28.7,45.9C-47.8,30.6,-55,5.2,-48.2,-14.5C-41.4,-34.3,-20.7,-48.4,4.6,-49.9C29.9,-51.4,59.9,-40.3,68.6,-17.9Z"
                      transform="translate(100 100) scale(1.1)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About start */}

      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-7 mb-10 lg:w-1/2">
              <h4 className="text-4xl mb-2 font-bold  text-amber-900">
                About Me
              </h4>
              <p className="font-medium text-base text-justify text-slate-500 max-w-xl">
                Let me introduce myself. I&apos;m Icha Prisylia Ginting, but you
                can call me Ica. I&apos;m a student of Software Engineering
                Technology at Politeknik Negeri Banyuwangi. I have a strong
                interest in web development and enjoy learning and experimenting
                with new technologies. During my time in college, I&apos;ve been
                actively developing my skills in both frontend and backend
                development, using tools like HTML, CSS, JavaScript, React, and
                Node.js. I&apos;m passionate about creating user-friendly and
                functional websites that solve real-world problems. After
                completing my education, I&apos;m determined to pursue a career
                as a professional web developer. In my free time, I enjoy
                exploring UI/UX design and participating in tech projects to
                sharpen my skills. I&apos;m always open to new challenges and
                opportunities to grow.
              </p>
            </div>
            <div className="w-full px-7 pl-7 lg:w-1/2">
              <h3 className="text-4xl mb-2 font-bold  text-amber-900 ">
                Tech I use
              </h3>
              <p className="font-medium text-base text-slate-500 mb-6 lg:text-lg">
                These are the tools and frameworks I&apos;m most familiar with
              </p>
              <div className=" items-center columns-4 lg:flex lg:gap-4">
                {/* Figma */}
                <div>
                  <motion.div
                    animate={{
                      rotate: 360,
                      backgroundColor: "#92400e",
                      borderColor: "#92400e",
                      color: "#ffffff",
                      scale: 1,
                    }}
                    transition={{
                      duration: 5,
                      // repeat: Infinity,
                      ease: "linear",
                    }}
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "#b45309",
                      borderColor: "#b45309",
                    }}
                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 transition-all text-slate-300
                  "
                  >
                    <SiFigma className="w-6 h-6 " />
                  </motion.div>
                  <p className="font-extralight text-amber-900 pt-2">Figma</p>
                </div>
                {/* GitHub */}
                <div className="mt-4 lg:mt-0 flex flex-col items-center">
                  <motion.div
                    animate={{
                      rotate: 360,
                      backgroundColor: "#92400e",
                      borderColor: "#92400e",
                      color: "#ffffff",
                      scale: 1,
                    }}
                    transition={{
                      duration: 5,
                      // repeat: Infinity,
                      ease: "linear",
                    }}
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "#b45309",
                      borderColor: "#b45309",
                    }}
                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 transition-all text-slate-300
                  "
                  >
                    <SiGithub className="w-6 h-6" />
                  </motion.div>
                  <p className="font-extralight text-amber-900 pt-2">
                    GitHub/Gitea
                  </p>
                </div>

                {/* Next.js */}
                <div>
                  <motion.div
                    animate={{
                      rotate: 360,
                      backgroundColor: "#92400e",
                      borderColor: "#92400e",
                      color: "#ffffff",
                      scale: 1,
                    }}
                    transition={{
                      duration: 5,
                      // repeat: Infinity,
                      ease: "linear",
                    }}
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "#b45309",
                      borderColor: "#b45309",
                    }}
                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 transition-all text-slate-300
                  "
                  >
                    <RiNextjsFill className="w-6 h-6" />
                  </motion.div>
                  <p className="font-extralight text-amber-900 pt-2">Next.js</p>
                </div>
                {/* Trello */}
                <div className="mt-4 lg:mt-0">
                  <motion.div
                    animate={{
                      rotate: 360,
                      backgroundColor: "#92400e",
                      borderColor: "#92400e",
                      color: "#ffffff",
                      scale: 1,
                    }}
                    transition={{
                      duration: 5,
                      // repeat: Infinity,
                      ease: "linear",
                    }}
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "#b45309",
                      borderColor: "#b45309",
                    }}
                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 transition-all text-slate-300
                  "
                  >
                    <SiTrello />
                  </motion.div>
                  <p className="font-extralight text-amber-900 pt-2">Trello</p>
                </div>
                {/* Tailwind */}
                <div>
                  <motion.div
                    animate={{
                      rotate: 360,
                      backgroundColor: "#92400e",
                      borderColor: "#92400e",
                      color: "#ffffff",
                      scale: 1,
                    }}
                    transition={{
                      duration: 5,
                      // repeat: Infinity,
                      ease: "linear",
                    }}
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "#b45309",
                      borderColor: "#b45309",
                    }}
                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 transition-all text-slate-300
                  "
                  >
                    <RiTailwindCssFill className="w-6 h-6" />
                  </motion.div>
                  <p className="font-extralight text-amber-900 pt-2">
                    Tailwind
                  </p>
                </div>
                {/* React */}
                <div className="mt-4 lg:mt-0">
                  <motion.div
                    animate={{
                      rotate: 360,
                      backgroundColor: "#92400e",
                      borderColor: "#92400e",
                      color: "#ffffff",
                      scale: 1,
                    }}
                    transition={{
                      duration: 5,
                      // repeat: Infinity,
                      ease: "linear",
                    }}
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "#b45309",
                      borderColor: "#b45309",
                    }}
                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 transition-all text-slate-300
                  "
                  >
                    <FaReact className="w-6 h-6" />
                  </motion.div>
                  <p className="font-extralight text-amber-900 pt-2">ReactJs</p>
                </div>
                {/* html */}
                <div>
                  <motion.div
                    animate={{
                      rotate: 360,
                      backgroundColor: "#92400e",
                      borderColor: "#92400e",
                      color: "#ffffff",
                      scale: 1,
                    }}
                    transition={{
                      duration: 5,
                      // repeat: Infinity,
                      ease: "linear",
                    }}
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "#b45309",
                      borderColor: "#b45309",
                    }}
                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 transition-all text-slate-300
                  "
                  >
                    <FaHtml5 className="w-6 h-6" />
                  </motion.div>
                  <p className="font-extralight text-amber-900 pt-2">Html</p>
                </div>
                {/* CSS */}
                <div className="mt-4 lg:mt-0">
                  <motion.div
                    animate={{
                      rotate: 360,
                      backgroundColor: "#92400e",
                      borderColor: "#92400e",
                      color: "#ffffff",
                      scale: 1,
                    }}
                    transition={{
                      duration: 5,
                      // repeat: Infinity,
                      ease: "linear",
                    }}
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "#b45309",
                      borderColor: "#b45309",
                    }}
                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 transition-all text-slate-300
                  "
                  >
                    <FaCss3 className="w-6 h-6" />
                  </motion.div>
                  <p className="font-extralight text-amber-900 pt-2">CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About End */}
      {/* Project Start*/}
      <motion.section
        id="portofolio"
        ref={portofolioRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=" pb-32"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h2 className="text-4xl mb-2 font-bold text-center text-amber-900">
                Project
              </h2>
              <p className="font-medium text-md lg:mt-4 text-slate-500">
                During my journey as a TRPL (Applied Software Engineering
                Technology) student, I have been involved in several
                project-based learning activities. These projects allowed me to
                apply my skills in real-world scenarios, collaborate with
                others, and continuously improve my technical and
                problem-solving abilities. Below are some of the projects I have
                worked on.
              </p>
            </div>
          </div>
          <div className="w-full flex max-w-6xl px-6 mx-auto ">
            <div className="grid lg:grid-cols-2 mt-8 pb-8 gap-6">
              <div className="group overflow-hidden shadow-xl rounded-lg bg-slate-200 hover:shadow-lg transition ease-in delay-100">
                <Image
                  className="w-full h-64 object-cover rounded-t-lg"
                  src="/syifaamanah.png"
                  alt="Project 1"
                  width={500}
                  height={500}
                />
                <div className="p-5 bg-amber-50">
                  <h1 className="font-bold mb-2">
                    Syifa Amanah Baitullah Tour & Travel
                  </h1>
                  <p className="font-medium text-sm text-slate-700">
                    Syifa Amanah Baitullah Tour & Travel is a travel booking
                    website designed to make it easy for users to plan and book
                    their trips.
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1od_GjmL47yi9e_X_ih-Fjtd1MdORqj-J/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    You can read the full documentation here.
                  </a>
                </div>
              </div>

              <div className="group overflow-hidden shadow-xl rounded-lg bg-slate-200 hover:shadow-lg transition ease-in delay-100">
                <Image
                  className="w-full h-64 object-cover rounded-t-lg"
                  src="/silent.jpg"
                  alt="Project 1"
                  width={500}
                  height={500}
                />
                <div className="p-5 bg-amber-50">
                  <h1 className="font-bold mb-2">SILENT</h1>
                  <p className="font-medium text-sm text-slate-700">
                    Silent is a sign language translator web app built using
                    React, Express, and a Python-based machine learning model to
                    detect hand gestures in real time.
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1oOOYHrKwBPK6I1MEnJrmYapo5qSgHY89/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    You can read the full documentation here.
                  </a>
                </div>
              </div>

              <div className="group overflow-hidden shadow-xl rounded-lg bg-slate-200 hover:shadow-lg transition ease-in delay-100">
                <Image
                  className="w-full h-64 object-cover rounded-t-lg"
                  src="/Laci_Cerdas.png"
                  alt="Project 1"
                  width={500}
                  height={500}
                />
                <div className="p-5 bg-amber-50">
                  <h1 className="font-bold mb-2">Laci Cerdas</h1>
                  <p className="font-medium text-sm text-slate-700">
                    Laci Cerdas is an inventory management website designed to
                    simplify and automate stock tracking and reporting.
                  </p>
                  <a
                    href="https://drive.google.com/file/d/16cUocG-3yOg3rGAvcgMBKLLgLBTZbi1i/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    You can read the full documentation here.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Project End*/}

      {/* Contact Start */}
      <section id="contact">
        <div className="  ">
          <h2 className="text-4xl mb-2 font-bold text-center text-amber-900">
            Contact
          </h2>
          <p className="text-base text-center mb-10 opacity-50">
            Whether it&apos;s feedback, a job opportunity, or just a quick hello
            — I&apos;d love to hear from you! Use the form below to send your
            message.
          </p>
          {/* <div className=""> */}
          <form
            action="https://formsubmit.co/ichaprisylia6@gmail.com"
            method="POST"
            className="bg-transparent md:bg-amber-100 p-3 lg:p-6 lg:w-fit lg:mx-auto rounded-md "
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name "
                  required
                  className="border border-amber-900 p-2 rounded-md"
                ></input>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  name="Email"
                  placeholder="Enter your email address"
                  required
                  className="border border-amber-900 p-2 rounded-md"
                ></input>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols={45}
                  rows={7}
                  placeholder="Write your message here..."
                  required
                  className="border border-amber-900 p-2 rounded-md"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="text-white font-semibold bg-amber-900 p-3 rounded-lg w-full cursor-pointer border border-amber-900 hover:bg-amber-700
                  "
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* </div> */}
      </section>
      {/* Contact End */}
    </>
  );
}

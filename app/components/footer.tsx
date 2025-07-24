import Link from "next/link";
import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";
export default function Footer() {
  return (
    <>
      <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 md:p-4 justify-between items-center text-white bg-amber-900">
        <h1 className="text-2xl font-bold  ">Portofolio</h1>
        <div className="flex gap-7">
          <p className="font-semibold ">Ica Ginting</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Linkedin */}
          <a
            className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300
                  hover:border-amber-900 hover:bg-amber-900 text-slate-300 hover:text-white
                  "
            href="https://www.linkedin.com/in/ichaginting03/"
            target="_blank"
          >
            <SiLinkedin className="w-6 h-6" />
          </a>

          {/* GitHub */}
          <a
            className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300
                  hover:border-amber-900 hover:bg-amber-900 text-slate-300 hover:text-white
                  "
            href="https://github.com/icaginting404"
            target="_blank"
          >
            <SiGithub className="w-6 h-6" />
          </a>

          {/* Gmail */}
          <a
            className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300
                  hover:border-amber-900 hover:bg-amber-900 text-slate-300 hover:text-white
                  "
            href="https://www.instagram.com/icaaginting/"
          >
            <SiInstagram className="W-6 H-6" />
          </a>
        </div>
      </div>
    </>
  );
}

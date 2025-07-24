import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <header className="fixed w-full top-0 left-0 border-b border-white py-5 mb-5 bg-white z-50 ">
        <div className="container mx-auto flex justify-between pl-2 ">
          <div className="logo font-bold lg:p-2 pl-2">Ica Ginting</div>
          <div>
            <ul className="flex gap-2 lg:gap-5 text-amber-900 pr-4 ">
              <li className="transition-all duration-300">
                <Link href="/#about">About Me</Link>
              </li>
              <li className="transition-all duration-300">
                <Link href="/#portofolio">Project</Link>
              </li>
              <li className="transition-all duration-300">
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

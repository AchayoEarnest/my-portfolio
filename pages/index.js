import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import devearn from "../public/dev-earn-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Earnest Achayo Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 ">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbyearnest</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className=" cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Earnest Achayo
            </h2>
            <h3 className=" text-2xl py-2">Developer and designer</h3>
            <p className=" text-md py-5 leading-8 text-gray-800">
              Freelancer providing services for programming needs. Join me down
              below and lets get it done!
            </p>
          </div>
          <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600 ">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
            <Image src={devearn} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className=" text-3xl py-1 ">Services I offer</h3>
            <p className=" text-md py-2 leading-8 text-gray-800 ">
              Since the beginning of my freelance journey, I have done remote
              work for{" "}
              <span className="text-teal-500">
                Cahayo Techlinks $ Winam Systems
              </span>{" "}
              and collaborated with talented team to solve problems by creating
              digital softwares for both business and consumer use.
            </p>
            <p className=" text-md py-2 leading-8 text-gray-800 ">
              I also tutor other upcoming developers to ensure they follow the
              right path while developing their skills
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs in design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools i use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Corel Draw</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs in design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools i use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Corel Draw</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs in design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools i use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Corel Draw</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className=" text-3xl py-1">Portfolio</h3>
            <p className=" text-md py-2 leading-8 text-gray-800 ">
              Since the beginning of my freelance journey, I have done remote
              work for{" "}
              <span className="text-teal-500">
                Cahayo Techlinks $ Winam Systems
              </span>{" "}
              and collaborated with talented team to solve problems by creating
              digital softwares for both business and consumer use.
            </p>
            <p className=" text-md py-2 leading-8 text-gray-800 ">
              I also tutor other upcoming developers to ensure they follow the
              right path while developing their skills
            </p>
          </div>
          <div>
            <div>
              <Image src={web1} />
            </div>
            <div>
              <Image src={web2} />
            </div>
            <div>
              <Image src={web3} />
            </div>
            <div>
              <Image src={web4} />
            </div>
            <div>
              <Image src={web5} />
            </div>
            <div>
              <Image src={web6} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

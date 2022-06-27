import Image from 'next/image';
import React from 'react';

const Career = () => {
  return (
    <>
      <div className="w-full h-3/4 relative top-0 -z-50 bg-[#010028]  ">
        <div className="mix-blend-normal opacity-30 bg-cover bg-center">
          <Image
            src="/images/group-discuss.jpg"
            width={1300}
            height={500}
            layout="responsive"
            alt="group-discuss"
            className="bg-cover bg-center"
          />
        </div>

        <div className="relative sm:relative top-5 sm:-top-52 z-10 h-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,32L80,37.3C160,43,320,53,480,80C640,107,800,149,960,154.7C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="z-10 sm:absolute sm:top-1/3 sm:left-1/3 absolute top-1/3  flex justify-center flex-col items-center">
          <h1 className="sm:text-4xl text-xl xl:text-4xl 2xl:text-5xl  text-white font-bold  font-montserrat p-2 ">
            Current Openings
          </h1>
          <p className="text-xs xl:text-md 2xl:text-xl text-white font-light max-w-md text-center mt-2 p-3 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center mb-10 mt-5 sm:mt-0 ">
        <div className="relative w-5/6 sm:w-2/3 overflow-hidden rounded-2xl shadow-md border">
          <input
            type="checkbox"
            className="peer absolute top-0 inset-x-0 w-full h-20 opacity-0 z-10 cursor-pointer"
          />
          <div className="h-20 w-full pl-5 pt-2 flex items-start flex-col">
            <h1 className="text-lg font-bold text-[#7A7A7A]">
              Device Support Engineer
            </h1>
            <div className="flex space-x-2 mt-2">
              <div className="flex">
                <div className="">
                  <Image
                    src="/images/Location Point.png"
                    width={20}
                    height={20}
                    alt="location"
                  />
                </div>
                <h1 className="text-sm font-normal text-[#7A7A7A] mx-2 ">
                  indore/chennai/pune
                </h1>
              </div>
              <div className="flex">
                <div className="">
                  <Image
                    src="/images/Travel bag.png"
                    width={20}
                    height={20}
                    alt="location"
                  />
                </div>
                <h1 className="text-sm font-normal text-[#7A7A7A] mx-2 ">
                  2+ Years
                </h1>
              </div>
            </div>
          </div>

          <div className="absolute top-7 right-5 text-[#7A7A7A] transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            {/* Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {/* Contents */}
          <div className="max-h-0 peer-checked:max-h-40  bg-white overflow-hidden transition-all duration-500">
            <div className="p-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci ab deserunt iste autem beatae nobis veniam voluptates
                fugit accusamus architecto!
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 relative w-5/6 sm:w-2/3 overflow-hidden rounded-2xl shadow-md border">
          <input
            type="checkbox"
            className="peer absolute top-0 inset-x-0 w-full h-20 opacity-0 z-10 cursor-pointer"
          />
          <div className="h-20 w-full pl-5 pt-2 flex items-start flex-col">
            <h1 className="text-lg font-bold text-[#7A7A7A]">UI/UX Designer</h1>
            <div className="flex space-x-2 mt-2">
              <div className="flex">
                <div className="">
                  <Image
                    src="/images/Location Point.png"
                    width={20}
                    height={20}
                    alt="location"
                  />
                </div>
                <h1 className="text-sm font-normal text-[#7A7A7A] mx-2 ">
                  indore/pune
                </h1>
              </div>
              <div className="flex">
                <div className="">
                  <Image
                    src="/images/Travel bag.png"
                    width={20}
                    height={20}
                    alt="location"
                  />
                </div>
                <h1 className="text-sm font-normal text-[#7A7A7A] mx-2 ">
                  2+ Years
                </h1>
              </div>
            </div>
          </div>

          <div className="absolute top-7 right-5 text-[#7A7A7A] transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            {/* Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {/* Contents */}
          <div className="max-h-0 peer-checked:max-h-40  bg-white overflow-hidden transition-all duration-500">
            <div className="p-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci ab deserunt iste autem beatae nobis veniam voluptates
                fugit accusamus architecto!
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 relative w-5/6 sm:w-2/3 overflow-hidden rounded-2xl shadow-md border">
          <input
            type="checkbox"
            className="peer absolute top-0 inset-x-0 w-full h-20 opacity-0 z-10 cursor-pointer"
          />
          <div className="h-20 w-full pl-5 pt-2 flex items-start flex-col">
            <h1 className="text-lg font-bold text-[#7A7A7A]">ROR Developer</h1>
            <div className="flex space-x-2 mt-2">
              <div className="flex">
                <div className="">
                  <Image
                    src="/images/Location Point.png"
                    width={20}
                    height={20}
                    alt="location"
                  />
                </div>
                <h1 className="text-sm font-normal text-[#7A7A7A] mx-2 ">
                  indore/pune
                </h1>
              </div>
              <div className="flex">
                <div className="">
                  <Image
                    src="/images/Travel bag.png"
                    width={20}
                    height={20}
                    alt="location"
                  />
                </div>
                <h1 className="text-sm font-normal text-[#7A7A7A] mx-2 ">
                  3+ Years
                </h1>
              </div>
            </div>
          </div>

          <div className="absolute top-7 right-5 text-[#7A7A7A] transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            {/* Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {/* Contents */}
          <div className="max-h-0 peer-checked:max-h-fit  bg-white overflow-hidden transition-all duration-500">
            <div className="space-y-5">
              <div className="p-4">
                <div className="space-y-3 ">
                  <div>
                    <h1 className="font-bold text-[#7A7A7A]">
                      Role:
                      <span className="font-normal text-[#7A7A7A]">
                        {' '}
                        ROR Developer
                      </span>
                    </h1>
                  </div>
                  <div>
                    <h1 className="font-bold text-[#7A7A7A]">
                      Location:
                      <span className="font-normal text-[#7A7A7A]">
                        {' '}
                        Indore/Pune
                      </span>
                    </h1>
                  </div>
                  <div>
                    <h1 className="font-bold text-[#7A7A7A]">
                      Experience:
                      <span className="font-normal text-[#7A7A7A]">
                        {' '}
                        3+ Years
                      </span>
                    </h1>
                  </div>
                  <div>
                    <h1 className="font-bold text-[#7A7A7A]">
                      Key Skills:
                      <span className="font-normal text-[#7A7A7A]">
                        Ruby on Rails, Mysql/NoSql
                      </span>
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-[#7A7A7A] mt-5">
                    What will your role look like
                  </h1>
                  <div className="pl-5 mt-4 text-[#7A7A7A] text-sm">
                    <ul className="list-disc pl-8">
                      <li>
                        Design a technical architecture solution that may span
                        multiple platforms and include integration
                      </li>

                      <li>
                        You will obsess over data, metrics, algorithms,
                        mechanisms, and incentives that unlock innovation and
                        scalability opportunities for the digital test prep
                        business unit of BYJU’s.This role is inherently
                        cross-functional, working with core software systems
                        across the company
                      </li>
                      <li>
                        Write high quality code and unit tests, builds, tests as
                        per agreed timelines
                      </li>
                      <li>
                        Consistently follow and promote SDLC best practices:
                        Coding standard,testing, code reviews, code, comments
                        etc
                      </li>
                      <li>
                        Keep key stakeholders informed about progress and
                        problems; avoids surprises
                      </li>
                      <li>
                        Design and architect technical solutions for the
                        business problems
                      </li>

                      <li>
                        Organizes and expresses ideas clearly and concisely
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-[#7A7A7A] mt-3">
                    Why you will love this role
                  </h1>
                  <div className="pl-5 mt-4 text-[#7A7A7A] text-sm">
                    <ul className="list-disc pl-8">
                      <li>
                        Besides a competitive package, an open workspace full of
                        smart and pragmatic team members, with ever-growing
                        opportunities for professional and personal growth
                      </li>
                      <li>
                        Be a part of a learning culture where teamwork and
                        collaboration are encouraged, diversity is valued and
                        excellence, compassion, openness and ownership is
                        rewarded
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-[#7A7A7A] mt-3">
                    We would like you to bring along
                  </h1>
                  <div className="pl-5 mt-4 text-[#7A7A7A] text-sm">
                    <ul className="list-disc pl-8">
                      <li>Excellent programming skills in ROR</li>
                      <li>
                        Experience of software engineering practices, Design
                        Patterns, Data Structures, Algorithms
                      </li>
                      <li>
                        Experience in Unity or Machine Learning will be an added
                        advantage
                      </li>
                      <li>
                        The ability to go deep, but also appreciate the
                        challenge of going broad
                      </li>
                      <li>
                        Has delivered projects with end-to-end accountability
                      </li>
                      <li>
                        Keeps track of industry trends and introduces right
                        tech/tools for a given job
                      </li>
                      <li>
                        Identify and resolve performance and scalability issues
                      </li>
                      <li>
                        Strong desire to learn and grow, with intelligence &
                        adaptability while building the best in class systems
                      </li>
                      <li>
                        Strong flair for effective communication and
                        collaboration – you know when to push on and when to
                        step back
                      </li>
                      <li>
                        An ability to have fun while working on the hardest
                        problems,Experience on database MySQL/ NoSQL
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="max-w-xs  flex flex-col place-content-end cursor-pointer">
                  <div className="bg-[#0AD4A5] mt-5 max-w-xs p-1 rounded-2xl text-center text-white ">
                    <button>Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-bold  text-[#7A7A7A] mt-5">
          <button className="text-xl">VIEW ALL OPENINGS {` >> `}</button>
        </div>
      </div>
    </>
  );
};

export default Career;

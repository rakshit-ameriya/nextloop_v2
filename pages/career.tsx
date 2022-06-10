import Image from 'next/image';
import React from 'react';

const career = () => {
  return (
    <div className=" flex justify-center flex-col items-center mt-8 mb-10 ">
      <div className="relative w-2/3 overflow-hidden rounded-2xl shadow-md border">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              ab deserunt iste autem beatae nobis veniam voluptates fugit
              accusamus architecto!
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 relative w-2/3 overflow-hidden rounded-2xl shadow-md border">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              ab deserunt iste autem beatae nobis veniam voluptates fugit
              accusamus architecto!
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 relative w-2/3 overflow-hidden rounded-2xl shadow-md border">
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
                      Coding standard,testing, code reviews, code, comments etc
                    </li>
                    <li>
                      Keep key stakeholders informed about progress and
                      problems; avoids surprises
                    </li>
                    <li>
                      Design and architect technical solutions for the business
                      problems
                    </li>

                    <li>Organizes and expresses ideas clearly and concisely</li>
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
                      excellence, compassion, openness and ownership is rewarded
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-[#7A7A7A] mt-3">
                  Whe would like you to bring along
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
                      The ability to go deep, but also appreciate the challenge
                      of going broad
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
                      Strong flair for effective communication and collaboration
                      – you know when to push on and when to step back
                    </li>
                    <li>
                      An ability to have fun while working on the hardest
                      problems,Experience on database MySQL/ NoSQL
                    </li>
                  </ul>
                </div>
              </div>
              <div className="max-w-xs  h-52 flex flex-col place-content-end">
                <div className="bg-[#0AD4A5] mt-5 max-w-xs p-1 rounded-2xl text-center text-white ">
                  <button>Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="font-bold text-[#7A7A7A] mt-5">
        <button>VIEW ALL OPENINGS</button>
        <span className="text-[20px] font-normal">{` >> `}</span>
      </div>
    </div>
  );
};

export default career;

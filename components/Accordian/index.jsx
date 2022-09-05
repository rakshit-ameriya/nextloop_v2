import Image from 'next/image';
import React from 'react';

const Accordian = props => {
  const { jobTitle, location, exp } = props;
  const titles = [
    {
      id: 1,
      titleText: 'Role',
      jobTitle: jobTitle,
    },
    {
      id: 2,
      titleText: 'Location',
      jobTitle: location,
    },
    {
      id: 3,
      titleText: 'Experience',
      jobTitle: exp,
    },
    {
      id: 4,
      titleText: 'Key Skills',
      jobTitle: 'Ruby on Rails, Mysql/NoSql',
    },
  ];

  const allRoleTitles = {
    roleTitles: [
      {
        title: 'What will your role look like',
        roles: [
          {
            id: 1,
            li: 'Design a technical architecture solution that may span multiple platforms and include integration',
          },
          {
            id: 2,
            li: 'You will obsess over data, metrics, algorithms, mechanisms,and incentives that unlock innovation and scalability opportunities for the digital test prep business unit of BYJU’s.This role is inherently cross-functional, working with core software systems across the company',
          },
          {
            id: 3,
            li: '   Write high quality code and unit tests, builds, tests as per agreed timelines',
          },
          {
            id: 4,
            li: 'Consistently follow and promote SDLC best practices: Coding standard,testing, code reviews, code, comments etc',
          },
          {
            id: 5,
            li: 'Keep key stakeholders informed about progress and problems; avoids surprises',
          },
          {
            id: 6,
            li: ' Design and architect technical solutions for the business problems',
          },
          {
            id: 7,
            li: 'Organizes and expresses ideas clearly and concisely',
          },
        ],
      },
    ],
    loveRoleTitles: [
      {
        title: 'Why you will love this role',
        roles: [
          {
            id: 1,
            li: ' Besides a competitive package, an open workspace full of smart and pragmatic team members, with ever-growing opportunities for professional and personal growth',
          },
          {
            id: 2,
            li: 'Be a part of a learning culture where teamwork and collaboration are encouraged, diversity is valued and excellence, compassion, openness and ownership is rewarded',
          },
        ],
      },
    ],
    bringAlongTitle: [
      {
        title: 'We would like you to bring along',
        roles: [
          {
            id: 1,
            li: 'Excellent programming skills in ROR',
          },
          {
            id: 2,
            li: ' Experience of software engineering practices, Design Patterns, Data Structures, Algorithms',
          },
          {
            id: 3,
            li: ' Experience in Unity or Machine Learning will be an added advantage',
          },
          {
            id: 4,
            li: 'The ability to go deep, but also appreciate the challenge of going broad',
          },
          {
            id: 5,
            li: 'Has delivered projects with end-to-end accountability',
          },
          {
            id: 6,
            li: 'Keeps track of industry trends and introduces right tech/tools for a given job',
          },
          {
            id: 7,
            li: ' Identify and resolve performance and scalability issues',
          },
          {
            id: 8,
            li: '  Strong desire to learn and grow, with intelligence & adaptability while building the best in class systems',
          },
          {
            id: 9,
            li: 'Strong flair for effective communication and collaboration – you know when to push on and when to step back',
          },
          {
            id: 10,
            li: '  An ability to have fun while working on the hardest problems,Experience on database MySQL/ NoSQL',
          },
        ],
      },
    ],
  };

  return (
    <div className="mt-6 relative w-5/6 sm:w-2/3 overflow-hidden rounded-2xl shadow-md border">
      <input
        type="checkbox"
        className="peer absolute top-0 inset-x-0 w-full h-20 opacity-0 z-10 cursor-pointer"
      />
      <div className="h-20 w-full pl-5 pt-2 flex items-start flex-col">
        <h1 className="text-lg font-bold text-[#7A7A7A]">{jobTitle}</h1>
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
              {location}
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
            <h1 className="text-sm font-normal text-[#7A7A7A] mx-2 ">{exp}</h1>
          </div>
        </div>
      </div>

      <div className="absolute top-7 right-5 text-[#7A7A7A] transition-transform duration-500 rotate-0 peer-checked:rotate-180">
        {/* Arrow */}

        <div className="w-8 h-8 relative">
          <Image
            src={'/svg/arrowIcons/up-arrow.svg'}
            alt="up-arrow"
            layout="fill"
            className="object-contain"
          />
        </div>
      </div>
      {/* Contents */}
      <div className="max-h-0 peer-checked:max-h-fit  bg-white overflow-hidden transition-all duration-500">
        <div className="space-y-5">
          <div className="p-4">
            <div className="space-y-3 ">
              {titles.map(items => (
                <div key={items.id}>
                  <h1 className="font-bold text-[#7A7A7A]">
                    {items.titleText}
                    <span className="font-normal text-[#7A7A7A]">
                      {items.jobTitle}
                    </span>
                  </h1>
                </div>
              ))}
            </div>
            <div>
              {Object.keys(allRoleTitles).map((key, i) => {
                const item = allRoleTitles[key];

                return (
                  <div key={i}>
                    <h1 className="font-bold text-[#7A7A7A] mt-5">
                      {item[0].title}
                    </h1>
                    <div className="pl-5 mt-4 text-[#7A7A7A] text-sm">
                      <ul className="list-disc pl-8">
                        {item[0].roles.map(list => (
                          <li key={list.id}>{list.li}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
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
  );
};

export default Accordian;

import Image from 'next/image';
import React from 'react';

const Accordian = props => {
  const { jobTitle, location, exp, keySkills, allRoleTitles } = props;
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
      jobTitle: keySkills,
    },
  ];

  return (
    <div className="mt-6 relative w-5/6 sm:w-2/3 overflow-hidden rounded-2xl shadow-md border">
      <input
        type="checkbox"
        className="peer absolute top-0 inset-x-0 w-full h-20 opacity-0 z-10 cursor-pointer"
      />
      <div className="h-20 w-full pl-5 pt-2 flex items-start flex-col">
        <h1 className="text-[12px] sm:text-lg font-bold text-[#7A7A7A]">
          {jobTitle}
        </h1>
        <div className="flex space-x-2 mt-2">
          <div className="flex items-center">
            <div className="w-4 h-4  sm:w-5 sm:h-5 relative">
              <Image
                src="/images/Location Point.png"
                layout="fill"
                alt="location"
                className="object-contain"
              />
            </div>
            <h1 className="text-[12px]  sm:text-sm font-normal text-[#7A7A7A] mx-2 ">
              {location}
            </h1>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4  sm:w-5 sm:h-5 relative">
              <Image
                src="/images/Travel bag.png"
                layout="fill"
                alt="location"
                className="object-contain"
              />
            </div>
            <h1 className="text-[12px] sm:text-sm font-normal text-[#7A7A7A] mx-2 ">
              {exp}
            </h1>
          </div>
        </div>
      </div>

      <div className="absolute top-7 2xl:top-7 right-5 text-[#7A7A7A] transition-transform duration-500 rotate-0 peer-checked:rotate-180">
        {/* Arrow */}

        <div className="w-4 h-4  sm:w-8 sm:h-8 relative">
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
                    <span> : </span>
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
                <a
                  rel="external nofollow noopener noreferrer"
                  target="_blank"
                  href="mailto:info@nextlooptechnologies.com"
                >
                  <h1 className="text-[15px] xl:text-lg font-normal">Apply</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;

import React, { useState } from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';
import Link from 'next/link';
import { TEXT_CONSTANTS } from 'types/enum';
import FormInputs from 'components/FormInputs';

const Images_DATA = [
  {
    id: 1,
    image: '/images/linkedin.png',
    alt: 'Youtube Icon',
    link: 'https://www.linkedin.com/company/84372812/admin/',
  },
  {
    id: 2,
    image: '/images/Instagram.png',
    alt: 'Instagram Icon',
    link: 'https://www.instagram.com/nextloop_technologies/',
  },
  {
    id: 3,
    image: '/images/Facebook.png',
    alt: 'Facebook Icon',
    link: 'https://www.facebook.com/profile.php?id=100084922563726',
  },
  {
    id: 4,
    image: '/images/Twitter.png',
    alt: 'Twitter Icon',
  },
];

const Contact: NextPage = () => {
  const [showSuccess, setShowSuccess] = useState('');
  const [inputValues, setInputValue] = useState<any>({
    fullName: '',
    email: '',
    phoneNumber: '',
    company: '',
    comments: '',
  });

  const inputData = [
    {
      id: 1,
      label: 'Full Name',
      name: 'fullName',
      type: 'text',
      pattern: '^[A-Z a-z]{3,16}$',
      required: true,
    },
    {
      id: 2,
      label: 'Email',
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      id: 3,
      label: 'Phone Number',
      name: 'phoneNumber',
      type: 'string',
      pattern: '[1-9]{1}[0-9]{9}',
      required: true,
    },
    {
      id: 4,
      label: 'Company',
      name: 'company',
      type: 'text',
      pattern: '^[A-Z a-z]{2,30}$',
      required: true,
    },
  ];

  function handleChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccess('Registered Succesfully');
    setTimeout(() => {
      setShowSuccess('');
    }, 3000);
  };

  return (
    <div>
      {showSuccess && (
        <div className="fixed z-10 top-10 left-1/2 text-xl px-5 py-2 bg-green-400 text-white">
          {showSuccess}
        </div>
      )}
      <div className="w-full h-96 -z-50 relative top-0 bg-[#010028]  ">
        <div className="">
          <svg
            className="absolute top-80 sm:absolute sm:top-60 xl:absolute xl:top-48 2xl:absolute 2xl:top-48"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,32L80,37.3C160,43,320,53,480,80C640,107,800,149,960,154.7C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="relative -top-32 sm:relative sm:-top-64 xl:-top-48 2xl:-top-80">
        <div className="w-full h-screen   flex justify-center items-center z-50">
          <div className="w-4/5 sm:w-4/5   sm:p-10 bg-white max-h-fit overflow-hidden border-2 rounded-2xl shadow-md hover:shadow-none">
            <div className="pl-5 pr-5 mb-3">
              <h1 className="text-3xl font-bold">
                {TEXT_CONSTANTS.LEST_CONNECT}
              </h1>
              <h1 className="text-xs max-w-xs mt-2">
                {TEXT_CONSTANTS.GET_IN_TOUCH}
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center space-x-5  md:flex-row">
              <div className="w-full sm:w-full md:w-3/4 ">
                {/* form start */}
                <form onSubmit={handleSubmit}>
                  <div className="w-full  flex flex-wrap">
                    {inputData.map(inputs => (
                      <FormInputs
                        key={inputs.id}
                        {...inputs}
                        value={inputValues[inputs.name]}
                        onChange={handleChange}
                      />
                    ))}
                  </div>

                  <div className="w-full pl-5 pr-5">
                    <label className="block px-4 xl:text-lg 2xl:text-2xl">
                      Comments
                    </label>
                    <textarea
                      className="rounded-md  w-full 2xl:p-4 xl:p-1 h-32 border-1 text-xl"
                      name="comments"
                      value={inputValues.comments}
                      onChange={e => handleChange(e)}
                    />
                  </div>
                  <div className="pl-5 pr-5 w-full sm:w-3/4  mt-3">
                    <button
                      className="bg-green-300 w-full px-4 py-3 sm:w-2/3 text-white font-normal xl:px-4 2xl:px-4 2xl:text-2xl border-1 rounded-full"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
              {/* form end */}
              {/* adress start */}
              <div className="md:w-1/4 mt-2 md:mt-2 sm:mt-10 sm:w-3/4">
                <div className="flex space-x-5">
                  <div>
                    {/* icons */}
                    <Image
                      src="/images/addressIcon.png"
                      width={30}
                      height={30}
                      alt="Location Icon"
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-1">
                    {/* address */}

                    <h1 className="text-sm font-bold text-black">Indore, IN</h1>
                    <h1 className="text-xs font-normal">
                      Lorem Ispsum Tower 07, Rd, opp.
                    </h1>
                    <h1 className="text-xs font-normal">Lorem Complex</h1>
                    <h1 className="text-xs font-normal"> Indore (M.P) 45200</h1>
                  </div>
                </div>
                <div className="flex space-x-5 mt-3">
                  <div>
                    {/* icons */}
                    <Image
                      src="/images/telephone.png"
                      width={18}
                      height={18}
                      alt="Phone Icon"
                      className="object-contain"
                    />
                  </div>
                  <div className="">
                    {/* address */}

                    <h1 className="text-xs font-normal">+91 00000 00000</h1>
                  </div>
                </div>
                <div className="flex space-x-5 mt-3">
                  <div>
                    {/* icons */}
                    <Image
                      src="/images/message-box.png"
                      width={15}
                      height={15}
                      alt="Message Icon"
                      className="object-contain"
                    />
                  </div>
                  <div className="">
                    {/* address */}

                    <h1 className="text-xs font-normal">hello@nextloop.com</h1>
                  </div>
                </div>
                <div className="flex">
                  {Images_DATA.map(img => (
                    <Link key={img.id} href={img.link ? img.link : ''}>
                      <div className="w-4 h-4 mr-2 mt-3 cursor-pointer">
                        <Image
                          src={img.image}
                          width={10}
                          height={10}
                          alt={img.alt}
                          layout="responsive"
                          className="object-contain"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-3 max-w-xs max-h-fit pr-5 sm:pr-0">
                  <Image
                    src="/images/map.png"
                    width={300}
                    height={130}
                    alt="Map Icon"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

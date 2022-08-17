import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';

const Images_DATA = [
  {
    id: 1,
    image: '/images/Youtube.png',
    alt: 'Youtube Icon',
  },
  {
    id: 2,
    image: '/images/Instagram.png',
    alt: 'Instagram Icon',
  },
  {
    id: 3,
    image: '/images/Facebook.png',
    alt: 'Facebook Icon',
  },
  {
    id: 4,
    image: '/images/Twitter.png',
    alt: 'Twitter Icon',
  },
];

interface InputTypes {
  fullName: string;
  email: string;
  phoneNumber: string;
  company: string;
  comments: string;
}

const Contact: NextPage = () => {
  const [inputValues, setInputValue] = useState<InputTypes>({
    fullName: '',
    email: '',
    phoneNumber: '',
    company: '',
    comments: '',
  });
  function handleChange(event: any) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const [validation, setValidation] = useState<InputTypes>({
    fullName: '',
    email: '',
    phoneNumber: '',
    company: '',
    comments: '',
  });
  let isValid = true;
  const checkValidation = () => {
    let errors = validation;
    console.log('errors', errors);

    //full Name validation
    if (!inputValues.fullName.trim()) {
      if (errors.fullName) {
        errors.fullName = 'First name is required';
        isValid = false;
      }
    } else if (inputValues.fullName.length < 5) {
      errors.fullName = 'First name not less than 5 char';
      isValid = false;
    } else if (inputValues.fullName.length > 10) {
      errors.fullName = 'First name not more than 10 char';
      isValid = false;
    } else {
      errors.fullName = '';
      isValid = true;
    }
    // email validation
    const emailCond =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    if (!inputValues.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (inputValues.email.match(emailCond)) {
      errors.email = 'Please ingress a valid email address';
      isValid = false;
    } else {
      errors.email = '';
      isValid = true;
    }

    if (!inputValues.phoneNumber.trim()) {
      errors.phoneNumber = 'phoneNumber is required';
      isValid = false;
    } else if (inputValues.phoneNumber.length < 9) {
      errors.phoneNumber = 'phoneNumber must be correct';
      isValid = false;
    } else if (inputValues.phoneNumber.length >= 11) {
      isValid = false;
      errors.phoneNumber = 'number must be valid';
    } else {
      errors.phoneNumber = '';
      isValid = true;
    }

    if (!inputValues.company.trim()) {
      errors.company = 'company name is required';
      isValid = false;
    } else if (inputValues.company.length < 5) {
      errors.company = 'company name must be filled';
      isValid = false;
    } else if (inputValues.company.length > 10) {
      errors.company = 'First name not more than 10 char';
      isValid = false;
    } else {
      errors.company = '';
      isValid = true;
    }
    return setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isValid) {
      console.log('inputValues', inputValues);
      alert('Form submitted successfully');
    } else {
      alert('please fill required values');
    }
  };
  return (
    <div>
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
          <div className="w-5/4 sm:w-3/5   sm:p-10 bg-white max-h-fit overflow-hidden border-2 rounded-2xl shadow-md hover:shadow-none">
            <div className="pl-5 pr-5 mb-3">
              <h1 className="text-3xl font-bold">Lets Connect</h1>
              <h1 className="text-xs max-w-xs mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center space-x-5 sm:flex-col md:flex-row">
              <div className="w-full sm:w-full md:w-3/4 ">
                {/* form start */}
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col  md:space-x-2 mb-3 justify-center rounded-md pl-5 pr-5 md:flex-row sm:flex-col">
                      <div className="w-full">
                        <label className="block p-2 xl:text-lg 2xl:text-2xl">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className={`rounded-full  w-full 2xl:p-4 xl:p-1 border-1 text-xl ${
                            validation.fullName
                              ? 'focus:outline-red-600 border-red-500'
                              : ''
                          } `}
                          name="fullName"
                          value={inputValues.fullName}
                          onChange={e => handleChange(e)}
                        />
                        {/* {validation.fullName && (
                        <p className="text-xs text-red-500">
                          {validation.fullName}
                        </p>
                      )} */}
                      </div>
                      <div className="w-full">
                        <label className="block p-2 xl:text-lg 2xl:text-2xl">
                          Email
                        </label>
                        <input
                          type="text"
                          className={`rounded-full  w-full 2xl:p-4 xl:p-1 border-1 text-xl ${
                            validation.email
                              ? 'focus:outline-red-600 border-red-500'
                              : ''
                          } `}
                          name="email"
                          value={inputValues.email}
                          onChange={e => handleChange(e)}
                        />
                        {/* {validation.email && (
                        <p className="text-xs text-red-500">
                          {validation.company}
                        </p>
                      )} */}
                      </div>
                    </div>
                    <div className="flex flex-col md:space-x-2 mb-3 rounded-md pl-5 pr-5 md:flex-row sm:flex-col">
                      <div className="w-full">
                        <label className="block p-2 xl:text-lg 2xl:text-2xl">
                          Phone Number
                        </label>
                        <input
                          type="number"
                          className={`rounded-full  w-full 2xl:p-4 xl:p-1 border-1 text-xl ${
                            validation.phoneNumber
                              ? 'focus:outline-red-600 border-red-500'
                              : ''
                          } `}
                          name="phoneNumber"
                          value={inputValues.phoneNumber}
                          onChange={e => handleChange(e)}
                        />
                        {/* {validation.phoneNumber && (
                        <p className="text-xs text-red-500">
                          {validation.phoneNumber}
                        </p>
                      )} */}
                      </div>
                      <div className="w-full">
                        <label className="block p-2 xl:text-lg 2xl:text-2xl">
                          Company{' '}
                        </label>
                        <input
                          type="text"
                          className={`rounded-full  w-full 2xl:p-4 xl:p-1 border-1 text-xl ${
                            validation.company
                              ? 'focus:outline-red-600 border-red-500'
                              : ''
                          } `}
                          name="company"
                          value={inputValues.company}
                          onChange={e => handleChange(e)}
                        />
                        {/* {validation.company && (
                        <p className="text-xs text-red-500">
                          {validation.company}
                        </p>
                      )} */}
                      </div>
                    </div>
                    <div className="w-full pl-5 pr-5">
                      <label className="block p-2 xl:text-lg 2xl:text-2xl">
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
                        className="bg-green-300 w-full  sm:w-3/4 text-white font-normal xl:p-2 2xl:p-3 2xl:text-2xl border-1 rounded-full"
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
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
                    <div
                      key={img.id}
                      className="w-4 h-4 mr-2 mt-3 cursor-pointer"
                    >
                      <Image
                        src={img.image}
                        width={10}
                        height={10}
                        alt={img.alt}
                        layout="responsive"
                        className="object-contain"
                      />
                    </div>
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

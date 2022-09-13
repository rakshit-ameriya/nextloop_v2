import React from 'react';

const FormInputs = props => {
  const { label, onChange, errors, ...inputs } = props;

  return (
    <div className="flex flex-col  md:space-x-2 mb-3 justify-center rounded-md pl-5 pr-5 md:flex-row sm:flex-col">
      <div className="w-full">
        <label className="block p-2 xl:text-lg 2xl:text-2xl">{label}</label>
        <input
          {...inputs}
          onChange={onChange}
          className={`rounded-full px-4 py-3 w-full 2xl:p-4 xl:p-1 border-1 text-xl 
                          ${
                            errors ? 'focus:outline-red-600 border-red-500' : ''
                          } 
                          `}
        />
      </div>
    </div>
  );
};

export default FormInputs;

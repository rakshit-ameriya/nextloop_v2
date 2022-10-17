import React, { useState } from 'react';

interface InputTypes {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
  errorMessage: string;
}
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    focused?: string;
  }
}
const FormInputs = (props: InputTypes) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, errorMessage, ...inputs } = props;

  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className="flex flex-col w-full sm:w-full md:w-full lg:w-1/2 md:space-x-2 mb-3 justify-center rounded-md pl-5 pr-5 md:flex-row sm:flex-col">
      <div className="w-full mt-2 xl:mt-1 2xl:mt-4">
        <label className="block p-2 xl:text-lg 2xl:text-2xl">{label}</label>
        <input
          {...inputs}
          onChange={onChange}
          className="rounded-full w-full py-2 xl:py-2 2xl:py-8 border-1 text-xl"
          onBlur={handleFocus}
          focused={focused.toString()}
        />
        <p className="errorMes">{errorMessage}</p>
      </div>
    </div>
  );
};

export default FormInputs;

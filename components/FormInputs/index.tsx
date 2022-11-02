import React, { useState } from 'react';

interface InputTypes {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
  errorMessage: string;
}
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    alt?: string;
  }
}
const FormInputs = (props: InputTypes) => {
  const [focused, setFocused] = useState<boolean>(false);
  const { label, onChange, errorMessage, ...inputs } = props;

  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className="flex flex-col w-full sm:w-full md:w-full lg:w-1/2 md:space-x-2 mb-3 justify-center rounded-md pl-5 pr-5 md:flex-row sm:flex-col">
      <div className="w-full mt-2 xl:mt-1 2xl:mt-4">
        <label className="block p-2 xl:text-lg 2xl:text-2xl">{label}</label>
        {
          // @ts-ignore
          // eslint-disable-next-line
          <input
            {...inputs}
            onChange={onChange}
            className="rounded-full px-4 w-full py-2 xl:py-2 2xl:py-8 border-1 "
            onBlur={handleFocus}
            alt={focused.toString()}
          />
        }
        <p className="errorMes">{errorMessage}</p>
      </div>
    </div>
  );
};

export default FormInputs;

"use client";

import { IInputProps } from "@/interfaces";


const InputLabel: React.FC<IInputProps> = ({
    labelData,
    idInput,
    value,
    name,
    type,
    placeholder,
    onChange,
    icon,
    as = 'input',
}) => {
    return (
        <div className="relative flex flex-col w-full mt-4">
            <label className="font-bold md:text-xl" htmlFor={idInput}>
                {labelData}
            </label>
            {as === "textarea" ? (
        <textarea
          className="bg-[#f1ece5]  max-w-[250px] md:max-w-none md:min-w-[350px] border-2 border-dashed rounded-md p-2 focus:outline-none border-[#4B70A6] focus:border-[#d86c49]"
          id={idInput}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={5}
        />
      ) : (
        <input
          className="bg-[#f1ece5] md:min-w-[350px] border-2 border-dashed rounded-md p-2 focus:outline-none border-[#4B70A6] focus:border-[#d86c49]"
          id={idInput}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
      {icon && (
        <div className="absolute bottom-3 right-2 cursor-pointer w-full">{icon}</div>
      )}
        </div>
    );
};

export default InputLabel;

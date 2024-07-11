import React from 'react';

interface IconInputProps {
  iconClass: string;
  placeholder: string;
  value: string;
  type: string;
  onChange: (value: string) => void;
}

const IconInput: React.FC<IconInputProps> = ({ iconClass, placeholder, value, type, onChange }) => {
  return (
    <div className="relative mb-4">
      <div className="flex items-center">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i className={`${iconClass} text-gray-400`} />
        </span>
        <input
          type={type}
          className="pl-10 w-full px-3 py-2 border rounded-lg text-black"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};

export default IconInput;

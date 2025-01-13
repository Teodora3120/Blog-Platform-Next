import React from 'react';

interface IconInputProps {
  iconClass: string;
  placeholder: string;
  value: string;
  type: string;
  onChange: (value: string) => void;
}

export const IconInput: React.FC<IconInputProps> = ({ iconClass, placeholder, value, type, onChange }) => {
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


interface IconInputPasswordProps {
  placeholder: string;
  value: string;
  type: string;
  showPassword: boolean;
  onChange: (value: string) => void;
  onClick: () => void;
}

export const IconInputPassword: React.FC<IconInputPasswordProps> = ({ placeholder, value, type, showPassword, onChange, onClick }) => {
  return (
    <div className="relative mb-4">
      <div className="flex items-center">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i className={`${showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} text-gray-400`} />
        </span>
        <input
          type={type}
          className="pl-10 w-full px-3 py-2 border rounded-lg text-black"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onClick={onClick}
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};



import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

interface Props {
  value: Date;
  onChange: (date: Date) => void;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  label?: string;
  error?: string;
}

export default function InputDate({
  label,
  error,
  value,
  onChange,
  ...props
}: Props) {
  return (
    <label className="block flex-1 pb-4">
      {label && <span className="text-gray-700">{label}</span>}
      <div className="block w-72 m-auto">
        <DayPicker
          className="block m-auto"
          selectedDays={value}
          onDayClick={onChange}
          onTodayButtonClick={onChange}
          {...props}
        />
      </div>
      {error && (
        <span className="block text-danger text-xs pt-1 text-right">
          {error}
        </span>
      )}
    </label>
  );
}

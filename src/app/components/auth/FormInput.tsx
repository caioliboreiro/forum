interface FormInputProps {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  className?: string;
}

const FormInput = ({
  type,
  name,
  id,
  placeholder="",
  className,
}: FormInputProps) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`p-2.5 rounded-xl border-0 bg-light-gray mb-4 ${className}`}
    />
  );
};

export default FormInput;
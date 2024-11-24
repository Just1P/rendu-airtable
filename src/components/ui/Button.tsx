const Button = ({
  children,
  onClick,
  color,
}: {
  children: string;
  onClick: () => void;
  color: string;
}) => {
  const baseStyle =
    "py-2 px-4 rounded-lg text-white font-semibold focus:outline-none transition";
  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 ",
    red: "bg-red-500 hover:bg-red-600 active:bg-red-700 ",
    purpleFull:
      "bg-purple-500 hover:bg-purple-600 active:bg-purple-700  w-full",
    purple: "bg-purple-500 hover:bg-purple-600 active:bg-purple-700 ",
    gray: "bg-gray-500 hover:bg-gray-600 active:bg-gray-700 ",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${colorClasses[color]}`}>
      {children}
    </button>
  );
};

export default Button;

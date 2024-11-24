const Chip = ({ status }: { status: string }) => {
  let colorClasses = "";

  switch (status) {
    case "Not contacted":
      colorClasses = "bg-red-500 text-white";
      break;
    case "Contacted":
      colorClasses = "bg-green-500 text-white";
      break;
    case "Contact in future":
      colorClasses = "bg-blue-500 text-white";
      break;
    default:
      colorClasses = "bg-gray-500 text-white";
  }

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold ${colorClasses}`}
    >
      {status}
    </span>
  );
};

export default Chip;

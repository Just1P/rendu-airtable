import { useState } from "react";
import { Link } from "react-router-dom";
import { ClientDto, Clients } from "../../utils/types/client";
import createClient from "../../utils/airtable/createClient";
import InputField from "../ui/InputField";
import Button from "../ui/Button";
import formImage from "../../assets/form-image.jpg";

const ClientForm = ({
  setClients,
}: {
  setClients: React.Dispatch<React.SetStateAction<Clients>>;
}) => {
  const [formData, setFormData] = useState<ClientDto>({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
  });
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      await createClient(formData, setClients);
      setMessage(
        "Your request has been successfully received. A confirmation email has been sent."
      );
      setFormData({ firstname: "", lastname: "", email: "", phoneNumber: "" });
    } catch (error) {
      console.error("Error while submitting:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${formImage})`,
        }}
      ></div>

      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-800">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Create an Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <InputField
                name="firstname"
                type="text"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
              />
              <InputField
                name="lastname"
                type="text"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
            <InputField
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <Button type="submit" onClick={() => {}} color="purpleFull">
              {isSubmitting ? "Submitting..." : "Create Account"}
            </Button>
          </form>
          {message && (
            <p
              className={`mt-4 text-center ${
                message.includes("error") ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </p>
          )}
          <Link
            to="/admin"
            className="mt-6 inline-block bg-blue-500 py-3 px-6 rounded-lg text-white font-semibold hover:bg-blue-600 active:bg-blue-700 focus:outline-none transition"
          >
            Go to Admin Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientForm;

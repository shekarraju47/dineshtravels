import React from "react";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import TermsCheckbox from "./TermsCheckbox";

interface ContactFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  name: string;
  mobile: string;
  email: string;
  message: string;
  acceptTerms: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    message: "",
    acceptTerms: false,
  });

  const handleInputChange = (name: keyof FormData, value: string | boolean) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col flex-1 gap-6 items-start pr-32 max-md:pr-0"
    >
      <FormInput
        label="Name"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={(value) => handleInputChange("name", value)}
      />
      <FormInput
        label="Mobile number"
        name="mobile"
        placeholder="+91 9XXXXXXXXX"
        value={formData.mobile}
        onChange={(value) => handleInputChange("mobile", value)}
      />
      <FormInput
        label="Email"
        name="email"
        placeholder="example@gmail.com"
        value={formData.email}
        onChange={(value) => handleInputChange("email", value)}
      />
      <FormInput
        label="Message"
        name="message"
        placeholder="Have a query? Let us know!"
        value={formData.message}
        onChange={(value) => handleInputChange("message", value)}
      />
      <TermsCheckbox
        checked={formData.acceptTerms}
        onChange={(value) => handleInputChange("acceptTerms", value)}
      />
      <SubmitButton label="Submit" />
    </form>
  );
};

export default ContactForm;

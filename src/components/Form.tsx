import React, { useContext, useState } from "react";
import { LinksContext } from "../contexts";

type FormFieldsType = {
  title: string;
  from: string;
  to: string;
};

const formInitialState = {
  title: "",
  from: "",
  to: "",
};

export const Form: React.FC = () => {
  const [formValues, setFormValues] = useState<FormFieldsType>(formInitialState);

  const onFormFieldChange = ({
    field,
    value,
  }: {
    field: keyof FormFieldsType;
    value: string;
  }) => {
    setFormValues({ ...formValues, [`${field}`]: value });
  };

  const { addLink } = useContext(LinksContext);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { title, from, to } = formValues;

      addLink({ title, from, to });
      setFormValues(formInitialState);
    } catch (error) {}
  };

  return (
    <form className="mt-7" onSubmit={onSubmit}>
      <input
        value={formValues.title}
        onChange={(e) => onFormFieldChange({ field: "title", value: e.target.value })}
        className="default-input w-full"
        placeholder="Title"
        type="text"
      />
      <div className="flex justify-between mt-4">
        <input
          value={formValues.from}
          onChange={(e) => onFormFieldChange({ field: "from", value: e.target.value })}
          className="default-input flex-1 mr-6"
          placeholder="From"
          type="text"
        />
        <input
          value={formValues.to}
          onChange={(e) => onFormFieldChange({ field: "to", value: e.target.value })}
          className="default-input flex-1"
          placeholder="To"
          type="text"
        />
      </div>
      <button className="default-btn mt-4">Add</button>
    </form>
  );
};

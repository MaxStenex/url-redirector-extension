import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { swapSvg } from "../assets";
import { LinksContext } from "../contexts";

type InputsType = {
  title: string;
  from: string;
  to: string;
};

export const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputsType>();

  const { addLink } = useContext(LinksContext);

  const onSubmit: SubmitHandler<InputsType> = (data) => {
    try {
      const { title, from, to } = data;
      const id = nanoid();

      addLink({ id, title, from, to });
      reset();
    } catch (error) {}
  };

  return (
    <form className="mt-7" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          className="default-input w-full"
          placeholder="Title"
          type="text"
          {...register("title", { required: true })}
        />
        {errors.title && <span className="error-text">Field is required</span>}
      </div>
      <div className="flex justify-between items-start mt-4">
        <div className="flex-1">
          <input
            className="default-input w-full"
            placeholder="From"
            type="text"
            {...register("from", { required: true })}
          />
          {errors.from && <span className="error-text">Field is required</span>}
        </div>
        <div className="mx-3 mt-3">
          <img src={swapSvg} alt="->" className="w-4 select-none" />
        </div>
        <div className="flex-1">
          <input
            className="default-input w-full"
            placeholder="To"
            type="text"
            {...register("to", { required: true })}
          />
          {errors.to && <span className="error-text">Field is required</span>}
        </div>
      </div>
      <button className="default-btn mt-4">Add</button>
    </form>
  );
};

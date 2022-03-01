import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { swapSvg } from "../assets";
import { LinksContext } from "../contexts";
import { validateLink } from "../utils/validateLink";
import { FieldError } from "./FieldError";

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
    setError,
  } = useForm<InputsType>({
    shouldUseNativeValidation: true,
  });

  const { addLink } = useContext(LinksContext);

  const onSubmit: SubmitHandler<InputsType> = (data) => {
    try {
      const { title, from, to } = data;

      const [isFromLinkValid, isToLinkValid] = [validateLink(from), validateLink(to)];
      if (!isFromLinkValid || !isToLinkValid) {
        !isFromLinkValid &&
          setError("from", {
            message: "Invalid link",
          });

        !isToLinkValid &&
          setError("to", {
            message: "Invalid link",
          });

        return;
      }

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
        <FieldError text={errors.title?.message} />
      </div>
      <div className="flex justify-between items-start mt-4">
        <div className="flex-1">
          <input
            className="default-input w-full"
            placeholder="https://example.com"
            type="text"
            {...register("from", { required: true })}
          />
          <FieldError text={errors.from?.message} />
        </div>
        <div className="mx-3 mt-3">
          <img src={swapSvg} alt="->" className="w-4 select-none" />
        </div>
        <div className="flex-1">
          <input
            className="default-input w-full"
            placeholder="https://example.com"
            type="text"
            {...register("to", { required: true })}
          />
          <FieldError text={errors.to?.message} />
        </div>
      </div>
      <button className="default-btn mt-4">Add</button>
    </form>
  );
};

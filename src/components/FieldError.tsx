import React from "react";

type Props = {
  text?: string;
};

export const FieldError: React.FC<Props> = ({ text }) => {
  if (!text) {
    return null;
  }

  return (
    <span data-testid="field-error-text" className="error-text">
      {text}
    </span>
  );
};

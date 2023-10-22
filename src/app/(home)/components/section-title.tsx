import { ComponentProps } from "react";

const SectionTitle = ({ children, ...props }: ComponentProps<"p">) => {
  return (
    <p className="uppercase px-5 font-bold" {...props}>
      {children}
    </p>
  );
};

export default SectionTitle;

import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  type: string;
  href?: string;
  bg: string;
  active?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  href,
  children,
  bg,
  active,
}) => {
  const className = `inline-flex items-center justify-center gap-2.5 rounded-md  px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 ${
    active ? "bg-body" : bg
  }`;

  if (type == "link") {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

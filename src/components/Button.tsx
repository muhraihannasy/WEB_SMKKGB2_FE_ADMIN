import { ReactNode } from 'react';

// Type
type ButtonSizeType = {
  xs: string;
  sm: string;
  md: string;
  full: string;
};

type ButtonBackgroundType = {
  primary: string;
  secondary: string;
  tertiary: string;
  danger: string;
  disabled: string;
};

// Interface
interface ButtonProps {
  children?: ReactNode;
  type?: string;
  active?: boolean;
  size: keyof ButtonSizeType;
  bg: keyof ButtonBackgroundType;
  onClick?: () => void;
}

const ButtonSize: ButtonSizeType = {
  xs: 'px-4 py-2',
  sm: 'py-4 px-5',
  md: 'py-4 px-10',
  full: 'w-full py-4',
};

const ButtonBackground: ButtonBackgroundType = {
  primary: 'bg-primary text-white',
  secondary: 'bg-meta-3 text-white',
  disabled: 'bg-meta-2 text-bodydark2',
  tertiary: 'bg-black text-white',
  danger: 'bg-danger text-white',
};

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  children,
  bg,
  size,
  onClick,
}) => {
  const styles = `inline-flex items-center justify-center gap-2.5 rounded-md  text-center font-medium  hover:bg-opacity-90  
  ${ButtonSize[size]}
  ${ButtonBackground[bg]}
  `;

  return (
    <button type={type} className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

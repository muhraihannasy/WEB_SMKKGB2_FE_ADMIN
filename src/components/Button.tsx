import { ReactNode } from 'react';

type ButtonSizeType = {
  sm: string;
  md: string;
  full: string;
};

type ButtonBackgroundType = {
  primary: string;
  secondary: string;
  tertiary: string;
};

const ButtonSize: ButtonSizeType = {
  sm: 'px-10 py-4',
  md: 'px-8 px-10',
  full: '',
};

const ButtonBackground: ButtonBackgroundType = {
  primary: 'bg-primary',
  secondary: 'bg-meta-3',
  tertiary: 'bg-',
};

interface ButtonProps {
  size: keyof ButtonSizeType;
  bg: keyof ButtonBackgroundType;
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, bg, size, onClick }) => {
  const styles = `inline-flex items-center justify-center gap-2.5 rounded-md  text-center font-medium text-white hover:bg-opacity-90  
  ${ButtonSize[size]}
  ${ButtonBackground[bg]}
  `;

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

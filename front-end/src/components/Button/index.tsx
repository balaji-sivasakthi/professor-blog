import React from "react";

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  style: React.CSSProperties | undefined;
  children: React.ReactNode;
}

function Button(props: ButtonProps) {
  const { onClick, style, children } = props;
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

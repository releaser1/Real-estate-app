import React, {ButtonHTMLAttributes, useMemo} from 'react'

type ButtonProps = ButtonHTMLAttributes<any> & {
    size?: "small" | "medium" | "large",
    color?: "blue" | "red",
}

const Button: React.FC<ButtonProps> = (props) => {
    const {size = "small", children, className, color = "noColor", ...inputProps} = props;

    const buttonClass = useMemo(() => {
        const sizeStyle = {
            small: "text-sm py-1 px-4 gap-1",
            medium: "text-md py-2 px-7 gap-2",
            large: "text-lg py-3 px-6 gap-5",
        }[size];
        const colorName = {
            noColor: " ",
            blue: "bg-blue",
            red: "bg-red",
        }[color];
        const disabledStyle = inputProps.disabled ? "pointer-events-none opacity-30" : "pointer";
        return [sizeStyle, className, colorName, disabledStyle].join(" ").trim();
    }, [size, className, color, inputProps.disabled])
  return (
    <div>
      <button className={buttonClass} {...inputProps}>
        {children}    
      </button>
    </div>
  )
}

export default Button;
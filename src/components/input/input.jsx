import { useEffect } from "react";
import style from "./input.module.css";

function Input({ type, value, placeholder, onChange, onEnterClick }) {

  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter" || e.code === "NumpadEnter") {
        onEnterClick();
      }
    };
    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [onEnterClick]);

  const onHandleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      className={style.Input}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onHandleChange}
    />
  );
}

export default Input;

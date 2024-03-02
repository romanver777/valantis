import style from "./input.module.css";

function Input({ type, value, placeholder, onChange }) {

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

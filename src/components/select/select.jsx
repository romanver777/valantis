import style from "./select.module.css";

function Select({ value, options, onChange }) {

  const onSelect = (e) => onChange(e.target.value);

  return (
    <div className={style.Select}>
      <select
        className={style.Select__item}
        value={value}
        onChange={onSelect}
      >
        {options.map((item) => (
          <option key={item.value} value={item.value} className={style.Select__option}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;

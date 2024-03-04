import style from "./filter-buttons.module.css";

function FilterButtons({ onSearch, onResetFilters }) {
  return (
    <div className={style.FilterButtons}>
      <button onClick={onSearch} className={style.FilterButtons__item}>
        Поиск
      </button>
      <button onClick={onResetFilters} className={style.FilterButtons__item}>
        Сбросить фильтр
      </button>
    </div>
  );
}

export default FilterButtons;

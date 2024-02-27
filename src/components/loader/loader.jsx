import { Oval } from "react-loader-spinner";
import style from "./loader.module.css";

function Loader() {
  return (
    <div className={style.Loader}>
      <Oval
        height={40}
        width={40}
        color="#512689"
        wrapperStyle={{ position: "relative" }}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#ccc"
        strokeWidth={3}
        strokeWidthSecondary={3}
      />
    </div>
  );
}

export default Loader;

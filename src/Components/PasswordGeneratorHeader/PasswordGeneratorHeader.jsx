import style from "./style.module.css";
import lockIcon from "../../Assets/lock.svg";

export const PasswordGeneratorHeader = () => {
  return (
    <div className={style.root}>
      <div className={style.title}>PasswordGeneratorHeader</div>
      <img src={lockIcon} className={style.icon} alt="" />
    </div>
  );
};

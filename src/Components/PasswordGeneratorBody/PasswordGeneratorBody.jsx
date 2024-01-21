import style from "./style.module.css";
import { generatePassword } from "../../lib/password";

export const PasswordGeneratorBody = (props) => {
  const submit = (e) => {
    e.preventDefault();
    const formData = {};
    new FormData(e.currentTarget).forEach((value, key) => {
      formData[key] = value;
    });
    props.onSubmit(generatePassword(formData));
  };

  return (
    <>
      <form className={style.root} onSubmit={submit}>
        <div className={style.grid_container}>
          <div className={style.grid_item}>
            Size
            <select name="size" defaultValue={15}>
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
            </select>
          </div>
          <div className={style.grid_item}>
            UpperCase
            <input name="uppercase" type="checkbox" defaultChecked />
          </div>
          <div className={style.grid_item}>
            Numbers
            <input name="numbers" type="checkbox" defaultChecked />
          </div>
          <div className={style.grid_item}>
            Specials
            <input name="specials" type="checkbox" defaultChecked />
          </div>
        </div>
        <div className={style.btn_container}>
          <button className={style.btn_generate} type="submit">
            GENERATE
          </button>
        </div>
      </form>
    </>
  );
};

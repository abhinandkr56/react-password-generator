import style from "./style.module.css";
import copyIcon from "../../Assets/copy-paste.svg";
import { useEffect, useState } from "react";

export const PasswordGeneratorFooter = (prop) => {
  const [copied, setCopied] = useState(false);

  function saveInClipboard() {
    navigator.clipboard.writeText(prop.password);
    setCopied(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 2000)
  }, [copied])
  return (
    <div className = {style.container}>
      <div className={style.root} onClick={saveInClipboard}>
        <div className={style.footer_name}>{prop.password}</div>
        <img src={copyIcon} alt="" className={style.copyIcon} />
      </div>
      {copied && (
        <div className={style.copiedMessage}>Copied to clipboard!</div>
      )}
    </div>
  );
};

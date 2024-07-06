// INTERFACES AND TYPES
interface Iprops {
  bgColor?: string;
  children?: JSX.Element;
}
// STYLES
import styles from "@/styles/Cartao.module.css";

export default function Cartao(props: Iprops) {
  return (
    <>
      <div
        className={styles.cartao}
        style={{ backgroundColor: props.bgColor ?? "#fff" }}
      >
        {props.children}
      </div>
    </>
  );
}

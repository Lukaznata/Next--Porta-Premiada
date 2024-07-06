// STYLES
import styles from "@/styles/EntradaNumerica.module.css";

// INTERFACES AND TYPES
interface entradaNumericaProps {
  value: number;
  text: string;
  onChange: (newValue: number) => void;
}
export default function EntradaNumerica(props: entradaNumericaProps) {
  const dec = () => props.onChange(props.value - 1);

  const inc = () => props.onChange(props.value + 1);

  return (
    <>
      <div className={styles.entradaNumerica}>
        <span className={styles.text}>{props.text}</span>
        <span className={styles.value}>{props.value}</span>
        <div className={styles.botoes}>
          <button className={`${styles.btn} ${styles.btnDec}`} onClick={dec}>
            -
          </button>
          <button className={`${styles.btn} ${styles.btnInc}`} onClick={inc}>
            +
          </button>
        </div>
      </div>
    </>
  );
}

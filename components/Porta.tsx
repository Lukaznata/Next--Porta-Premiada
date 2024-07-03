// STYLES
import styles from "@/styles/Porta.module.css";

// MODELS
import PortaModel from "@/model/porta";

// COMPONENTS
import Presente from "./Presente";

interface portaProps {
  value: PortaModel;
  onChange: (novaPorta: PortaModel) => void;
}

export default function Porta(props: portaProps) {
  const porta = props.value;
  const selecionada =
    porta.selecionada && !porta.aberta ? styles.selecionada : "";

  const alterarSelecao = () => props.onChange(porta.alternarSelecao());
  const abrir = (e: React.MouseEvent) => {
    e.stopPropagation();
    props.onChange(porta.abrir());
  };

  const renderizarPorta = (): JSX.Element => {
    return (
      <div className={styles.porta}>
        <div className={styles.numero}>{porta.numero}</div>
        <div className={styles.macaneta} onClick={abrir}></div>
      </div>
    );
  };

  return (
    <>
      <div className={styles.area} onClick={alterarSelecao}>
        <div className={`${styles.estrutura} ${selecionada}`}>
          {porta.fechada ? (
            renderizarPorta()
          ) : porta.temPresente ? (
            <Presente />
          ) : (
            false
          )}
        </div>

        <div className={styles.chao}></div>
      </div>
    </>
  );
}

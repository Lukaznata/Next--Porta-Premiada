// STYLES
import styles from "@/styles/jogo.module.css";

// COMPONENTS
import Porta from "@/components/Porta";

// HOOKS
import { useState } from "react";
import Link from "next/link";

// FUNCTIONS
import { atualizarPortas, criarPortas } from "@/functions/portas";

export default function Jogo() {
  const [portas, setPortas] = useState(criarPortas(10, 2));

  const renderizarPortas = () => {
    return portas.map((p) => {
      return (
        <Porta
          key={p.numero}
          value={p}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  };
  return (
    <>
      <div id={styles.jogo}>
        <div className={styles.portas}>{renderizarPortas()}</div>

        <div className={styles.botoes}>
          <Link href="/">
            <button>Reiniciar Jogo</button>
          </Link>
        </div>
      </div>
    </>
  );
}

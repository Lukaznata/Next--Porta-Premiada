// STYLES
import styles from "@/styles/Formulario.module.css";

// COMPONENTS
import Cartao from "@/components/Cartao";
import EntradaNumerica from "@/components/EntradaNumerica";

// HOOKS
import Link from "next/link";
import { useState } from "react";

export default function Formulario() {
  const [qtdPortas, setQtdPortas] = useState(3);
  const [comPresente, setComPresente] = useState(1);

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgColor={"#c0392c"}>
          <h1>
            Monty <br /> Hall
          </h1>
        </Cartao>

        <Cartao>
          <EntradaNumerica
            value={qtdPortas}
            text="Quantidade Portas?"
            onChange={(novaQtd) => setQtdPortas(novaQtd)}
          />
        </Cartao>
      </div>

      <div>
        <Cartao>
          <EntradaNumerica
            value={comPresente}
            text="Porta com presente"
            onChange={(novaQtd) => setComPresente(novaQtd)}
          />
        </Cartao>

        <Cartao bgColor={"#28a085"}>
          <Link href={`/jogo/${qtdPortas}/${comPresente}`} passHref>
            <h2>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}

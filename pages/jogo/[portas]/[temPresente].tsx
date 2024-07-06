// STYLES
import styles from "@/styles/jogo.module.css";

// COMPONENTS
import Porta from "@/components/Porta";

// HOOKS
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// FUNCTIONS
import { atualizarPortas, criarPortas } from "@/functions/portas";

// CLASSES
import PortaModel from "@/model/porta";

export default function Jogo() {
  const router = useRouter();

  const [valido, setValido] = useState<boolean>(false);

  const [portas, setPortas] = useState<PortaModel[]>([]);

  useEffect(() => {
    const portasQuery = router.query.portas;
    const temPresenteQuery = router.query.temPresente;

    if (portasQuery !== undefined && temPresenteQuery !== undefined) {
      const portas = +portasQuery;
      const temPresente = +temPresenteQuery;

      const qtdPortasValidas = portas >= 3 && portas <= 100;
      const temPresenteValido = temPresente >= 1 && temPresente <= portas;

      setValido(qtdPortasValidas && temPresenteValido);
    }
  }, [portas, router.query.portas, router.query.temPresente]);

  useEffect(() => {
    const portasQuery = router.query.portas;
    const temPresenteQuery = router.query.temPresente;

    if (portasQuery !== undefined && temPresenteQuery !== undefined) {
      const portas = +portasQuery;
      const temPresente = +temPresenteQuery;
      setPortas(criarPortas(portas, temPresente));
    }
  }, [router.query]);

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
        {valido ? (
          <>
            <h1>ESCOLHA UMA PORTA</h1>
            <div className={styles.portas}>{renderizarPortas()}</div>
          </>
        ) : (
          <div className={styles.msg}>
            <h2>Regras</h2>
            <ul>
              <li>Informe ao menos 3 portas e 1 presente;</li>
              <li>A porta com presente precisa existir;</li>
            </ul>
          </div>
        )}

        <div className={styles.botoes}>
          <Link href="/" passHref>
            <button>Reiniciar Jogo</button>
          </Link>
        </div>
      </div>
    </>
  );
}

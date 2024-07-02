// STYLES
import styles from "@/styles/Home.module.css";

// COMPONENTS
import Presente from "@/components/Presente";
import Porta from "@/components/Porta";

// MODELS
import PortaModel from "@/model/porta";

// HOOKS
import { useState } from "react";

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1));

  return (
    <>
      <div style={{ display: "flex" }}>
        <Porta value={p1} />
      </div>
    </>
  );
}

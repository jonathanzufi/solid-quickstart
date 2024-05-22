import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>ICONIC - A Photographic Tribute to Apple Innovation</Title>
      <h1>ICONIC - A Photographic Tribute to Apple Innovation</h1>

      <p>
        <img src="../img/iconicmain.png"></img>
      </p>
      <p>
        Buy on Amazon Germany
        <a
          href="https://www.amazon.de/ICONIC-einzigartige-Industrial-Photographic-Innovation/dp/3837525260"
          target="_blank"
        >
          here
        </a>
        .
      </p>
    </main>
  );
}

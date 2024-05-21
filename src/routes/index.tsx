import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>ICONIC - A Photographic Tribute to Apple Innovation</Title>
      <h1>ICONIC - A Photographic Tribute to Apple Innovation</h1>
      <Counter />
      <p>
        <img src="../img/iconicmain.png"></img>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}

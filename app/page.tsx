import ButtonComponent from "./components/button/ButtonComponent";
import { ToastComponent } from "./components/toast/ToastComponent";

export default function Home() {
  return (
    <div>
      <h1>🍒Cherry</h1>
      <p>これはさくらんぼです</p>
      <ButtonComponent/>
      <ToastComponent/>
    </div>
  );
}

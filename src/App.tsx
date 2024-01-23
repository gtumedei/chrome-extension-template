import { createSignal } from "solid-js"
import solidLogo from "./assets/solid.svg"
import viteLogo from "/vite.svg"

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <main class="w-full flex flex-col justify-center items-center text-center p-6">
      <div class="w-full grid grid-cols-2">
        <a href="https://vitejs.dev" target="_blank" class="m-auto inline-flex p-4">
          <img
            src={viteLogo}
            class="h-12 w-12 [will-change:filter] [transition:filter_300ms] hover:[filter:drop-shadow(0_0_2em_#646cffaa)]"
            alt="Vite logo"
          />
        </a>
        <a href="https://solidjs.com" target="_blank" class="m-auto inline-flex">
          <img
            src={solidLogo}
            class="h-12 w-12 [will-change:filter] [transition:filter_300ms] hover:[filter:drop-shadow(0_0_2em_#61dafbaa)]"
            alt="Solid logo"
          />
        </a>
      </div>
      <h1 class="text-xl font-bold my-12">Vite + Solid</h1>
      <button
        class="font-medium bg-slate-200 dark:bg-slate-600 rounded-lg px-4 py-2 border border-transparent hover:border-purple-600 cursor-pointer transition-colors mb-4"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count()}
      </button>
      <p class="mb-12">
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p class="text-sm opacity-50">Click on the Vite and Solid logos to learn more</p>
    </main>
  )
}

export default App

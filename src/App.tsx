import { createSignal } from "solid-js"
import solidLogo from "~/assets/solid.svg"
import viteLogo from "/vite.svg"
import denoLogo from "/deno.svg"

const btnClass =
  "font-medium bg-slate-200 dark:bg-slate-600 rounded-lg px-4 py-2 border border-transparent hover:border-purple-600 cursor-pointer transition-colors"

function App() {
  const [count, setCount] = createSignal(0)

  const sayHello = async () => {
    const [tab] = await chrome.tabs.query({ active: true })
    console.log(tab)
    if (!tab.id) return
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        alert(`Hello "${document.title}" from "chrome-extension-template"!`)
      },
    })
  }

  const popout = async () => {
    await chrome.windows.create({
      url: chrome.runtime.getURL("index.html"),
      type: "popup",
      focused: true,
      height: 542,
      width: 384,
    })
    close()
  }

  return (
    <main class="w-full flex flex-col justify-center items-center text-center p-6">
      <div class="w-full grid grid-cols-3">
        <a href="https://deno.com/" target="_blank" class="m-auto inline-flex p-4">
          <img
            src={denoLogo}
            class="h-12 w-12 [will-change:filter] [transition:filter_300ms] hover:[filter:drop-shadow(0_0_2em_#000000aa)]"
            alt="Deno logo"
          />
        </a>
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
      <h1 class="text-xl font-bold my-12">Deno + Vite + Solid</h1>
      <div class="flex gap-2 mb-4">
        <button type="button" class={btnClass} onClick={() => setCount((count) => count + 1)}>
          Count is {count()}
        </button>
        <button type="button" class={btnClass} onClick={sayHello}>
          Say hello
        </button>
        <button type="button" class={btnClass} onClick={popout}>
          Popout
        </button>
      </div>
      <p class="mb-12">
        Edit <code>src/App.tsx</code>, save and reload the extension
      </p>
      <p class="text-sm opacity-50">Click on the Vite and Solid logos to learn more</p>
    </main>
  )
}

export default App

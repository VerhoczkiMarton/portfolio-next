import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ul className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li>Coming soon...</li>
            <li><a className="text-indigo-400" href="https://github.com/VerhoczkiMarton/portfolio-next">[Marton Verhoczki]</a></li>
        </ul>
      </main>
    </div>
  );
}

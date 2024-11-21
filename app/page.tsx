import Image from "next/image";
import Test from "@/app/test";

export default function Home() {

  return (
      <div
          className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
          />

          <div className="flex gap-4 items-center flex-col sm:flex-row">
                <Test/>
              <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
              />
              Deploy now
          </div>
        </main>
      </div>
  );
}

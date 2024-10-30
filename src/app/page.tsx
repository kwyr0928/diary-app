import Link from "next/link";
import { HydrateClient } from "~/trpc/server";

export default async function Page() {

  return (
    <HydrateClient>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <Link href={"/signin"}>
          対話型自己分析日記システム
        </Link>
      </button>
    </HydrateClient>
  );
}

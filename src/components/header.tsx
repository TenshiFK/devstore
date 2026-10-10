import Image from "next/image";
import Link from "next/link";
import CartWidget from "./cart-widget";
import SearchForm from "./search-form";
import { Suspense } from "react";
import Skeleton from "./skeleton";

export default function Header() {
  
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-5 items-center">
        <Link href="/" className="text-2xl font-extrabold text-white">
            devstore
        </Link>
        
        <Suspense fallback={<Skeleton className="h-11 w-[320px] rounded-full" />}>
          <SearchForm />
      </Suspense>
      </div>
      <div className="flex gap-4 items-center">
        <CartWidget/>

        <div className="w-px h-4 bg-zinc-700"/>

        <Link href="/" className="flex items-center gap-2 hover:underline">
            <span className="text-sm">Accout</span>
            <Image 
                src="https://github.com/TenshiFK.png"
                alt="Github"
                width={24}
                height={24}
                className="rounded-full h-6 w-6"
            />
        </Link>
      </div>
    </div>
  );
}
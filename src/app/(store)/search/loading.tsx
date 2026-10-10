"use client";

import { Suspense } from "react";
import Skeleton from "@/components/skeleton";
import { useSearchParams } from "next/navigation";

function SearchQuery() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");

    return <span className="font-semibold"> {query}</span>;
}

export default function SearchLoading() {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm">
                Resultados para:
                <Suspense fallback={<span className="font-semibold"> ...</span>}>
                    <SearchQuery />
                </Suspense>
            </p>

            <div className="grid grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                    <Skeleton key={index} className="h-[360px]" />
                ))}
            </div>
        </div>
    );
}
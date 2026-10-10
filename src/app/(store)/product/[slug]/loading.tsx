import Skeleton from "@/components/skeleton";

export default function ProductLoading() {
    return (
        <div className="relative grid max-h-[860px] grid-cols-3">
            {/* Imagem */}
            <div className="col-span-2 overflow-hidden">
                <Skeleton className="h-[560px] w-full" />
            </div>

            {/* Detalhes */}
            <div className="flex flex-col justify-center px-12">
                {/* Título */}
                <Skeleton className="h-9 w-3/4" />

                {/* Descrição */}
                <div className="mt-4 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                </div>

                {/* Preço e parcelamento */}
                <div className="mt-8 flex items-center gap-4">
                    <Skeleton className="h-11 w-28 rounded-full" />
                    <Skeleton className="h-4 w-40" />
                </div>

                {/* Tamanhos */}
                <div className="mt-8 space-y-4">
                    <Skeleton className="h-5 w-20" />
                    <div className="flex gap-2">
                        <Skeleton className="h-9 w-14 rounded-full" />
                        <Skeleton className="h-9 w-14 rounded-full" />
                        <Skeleton className="h-9 w-14 rounded-full" />
                        <Skeleton className="h-9 w-14 rounded-full" />
                    </div>
                </div>

                {/* Botão de adicionar ao carrinho */}
                <Skeleton className="mt-8 h-12 w-full rounded-full" />
            </div>
        </div>
    );
}
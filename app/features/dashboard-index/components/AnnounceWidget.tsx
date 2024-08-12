import { Link } from "@remix-run/react";
import { HiOutlineChartBar } from "react-icons/hi2";
import GraphSkeleton from "~/components/GraphSkeleton";
import Advertisement from "~/types/advertisement.type";

interface Props {
  data: Advertisement | null;
}

export default function AnnounceWidget({ data }: Props) {
  return (
    <GraphSkeleton comprobation={data != null}>
      <Link
        to={"/dashboard/advertisements"}
        className="flex flex-row justify-center items-center gap-2.5 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
      >
        <div className="">
          <HiOutlineChartBar className={"size-10 text-slate-400"} />
        </div>
        <div className={"w-full"}>
          <div className="font-bold text-4xl">{data?.conversions}</div>
          <div className={"text-slate-600 text-xs"}>{data?.name}</div>
          <div className={"text-slate-600"}>Alcance obtenido del último anuncio</div>
        </div>
      </Link>
    </GraphSkeleton>
  );
}

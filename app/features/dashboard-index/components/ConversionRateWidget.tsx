import { HiOutlineChartPie } from "react-icons/hi2";
import { Link } from "@remix-run/react";

interface Props {
  conversionRate: number;
}

export default function ConversionRateWidget(props: Props) {
  return (
    <Link
      to={"/dashboard/leads"}
      className="flex flex-row justify-center items-center gap-2.5 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
    >
      <div className="">
        <HiOutlineChartPie className={"size-10 text-slate-400"} />
      </div>
      <div className={"w-full"}>
        <div className="font-bold text-4xl">{props.conversionRate * 100}%</div>
        <div className={"text-slate-600"}>Tasa de conversión</div>
      </div>
    </Link>
  );
}

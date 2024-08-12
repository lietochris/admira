import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import GraphSkeleton from "~/components/GraphSkeleton";
import { PageView } from "~/types/metric.type";

interface Props {
  items?: PageView[];
}

export default function PageViewsWidget(props: Props) {
  return (
    <div className="p-2 rounded-lg border border-gray-200 flex flex-col justify-center items-center min-h-80">
      <GraphSkeleton comprobation={props.items != undefined && props.items.length > 0}>
        <div className="relative w-full min-h-80 flex flex-col justify-center items-center">
          <h2 className={"font-semibold text-lg my-2"}>Visitas a la pagina</h2>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={props.items?.map((item) => ({ ...item, visualizaciones: item.views }))}>
              <XAxis dataKey="date" />
              <YAxis dataKey="views" />
              <Legend />
              <Tooltip />
              <Line type="monotone" dataKey="visualizaciones" stroke="#3b82f6" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </GraphSkeleton>
    </div>
  );
}

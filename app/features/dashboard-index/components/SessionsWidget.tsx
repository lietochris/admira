import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import GraphSkeleton from "~/components/GraphSkeleton";
import { Session } from "~/types/metric.type";

interface Props {
  items?: Session[];
}

export default function SessionsWidget(props: Props) {
  return (
    <div className="p-2 rounded-lg border border-gray-200 flex flex-col justify-center items-center min-h-80">
      <GraphSkeleton comprobation={props.items != undefined && props.items.length > 0}>
        <div className="relative w-full min-h-80 flex flex-col justify-center items-center">
          <h2 className={"font-semibold text-lg my-2"}>Sesiones</h2>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart
              data={props.items!.map((item) => ({
                fecha: item.date,
                "tasa de rebote": item.bounceRate * 100,
                sesiones: item.sessions,
              }))}
            >
              <XAxis dataKey="date" />
              <YAxis dataKey="sesiones" />
              <Legend />
              <Tooltip />
              <Bar type="monotone" dataKey="tasa de rebote" stackId={"a"} fill="#60a5fa" />
              <Bar type="monotone" dataKey="sesiones" stackId={"a"} fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </GraphSkeleton>
    </div>
  );
}

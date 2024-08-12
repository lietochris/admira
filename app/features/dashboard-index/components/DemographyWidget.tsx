import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import GraphSkeleton from "~/components/GraphSkeleton";
import { Demography } from "~/types/metric.type";

interface Props {
  items?: Demography;
}

export default function DemographyWidget(props: Props) {
  return (
    <div className="p-2 rounded-lg border border-gray-200 flex flex-col justify-center items-center min-h-80 md:col-span-2">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-80 justify-center items-center divide-x">
        <div className={"p-2"}>
          <GraphSkeleton comprobation={props.items?.age != undefined && props.items.age.length > 0}>
            <h2 className={"font-semibold text-lg my-2 text-center"}>Rangos de edad</h2>
            <ResponsiveContainer width={"100%"} height={320}>
              <PieChart>
                <Tooltip />
                <Legend />
                <Pie label dataKey={"percentage"} nameKey={"rango"} data={props.items!.age.map((item) => ({ ...item, rango: item.range + " años" }))}>
                  <Cell fill={"#3b82f6"} />
                  <Cell fill={"#60a5fa"} />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </GraphSkeleton>
        </div>
        <div className={"p-2"}>
          <GraphSkeleton comprobation={props.items?.gender != undefined && props.items.gender.length > 0}>
            <h2 className={"font-semibold text-lg my-2 text-center"}>Rango de género</h2>
            <ResponsiveContainer width={"100%"} height={320}>
              <PieChart>
                <Tooltip />
                <Legend />
                <Pie label dataKey={"percentage"} nameKey={"type"} data={props.items!.gender}>
                  <Cell fill={"#3b82f6"} />
                  <Cell fill={"#f43f5e"} />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </GraphSkeleton>
        </div>
      </div>
    </div>
  );
}

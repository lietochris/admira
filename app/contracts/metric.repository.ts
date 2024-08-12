import Metric from "~/types/metric.type";

export default interface MetricRepository {
  findFirst: () => Promise<Metric>;
}

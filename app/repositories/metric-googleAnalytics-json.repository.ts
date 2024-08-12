import MetricRepository from "~/contracts/metric.repository";
import Metric, { Age, Gender, PageView, Session } from "~/types/metric.type";
import dataset from "~/data/google-analytics.dataset.json";

export default class MetricGoogleAnalyticsJsonRepository implements MetricRepository {
  async findFirst(): Promise<Metric> {
    const pageViews: PageView[] = dataset.vistasPagina.map((item) => ({
      date: item.fecha,
      views: item.vistas,
    }));

    const sessions: Session[] = dataset.sesiones.map((item) => ({
      date: item.fecha,
      sessions: item.sesiones,
      bounceRate: item.tasaRebote,
    }));

    const age: Age[] = dataset.demografía.edad.map((item) => ({
      range: item.rango,
      percentage: item.porcentaje,
    }));

    const gender: Gender[] = dataset.demografía.género.map((item) => ({
      type: item.tipo,
      percentage: item.porcentaje,
    }));

    return {
      demography: { age: age, gender: gender },
      pageViews: pageViews,
      sessions: sessions,
    };
  }
}

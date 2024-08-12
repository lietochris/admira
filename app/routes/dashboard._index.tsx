import type { MetaFunction } from "@remix-run/node";
import PageViewsWidget from "~/features/dashboard-index/components/PageViewsWidget";
import SessionsWidget from "~/features/dashboard-index/components/SessionsWidget";
import DemographyWidget from "~/features/dashboard-index/components/DemographyWidget";
import { useLoaderData } from "@remix-run/react";
import AnnounceWidget from "~/features/dashboard-index/components/AnnounceWidget";
import AdvertisementMetaAdsJsonRepository from "~/repositories/advertisement-metaAds-json.repository";
import MetricGoogleAnalyticsJsonRepository from "~/repositories/metric-googleAnalytics-json.repository";
import MetricRepository from "~/contracts/metric.repository";
import AdvertisementRepository from "~/contracts/advertisement.repository";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export async function loader() {
  const metricRepository: MetricRepository = new MetricGoogleAnalyticsJsonRepository();
  const advertisementRepository: AdvertisementRepository = new AdvertisementMetaAdsJsonRepository();

  return {
    advertisement: await advertisementRepository.findLast(),
    conversionRate: 0,

    analytics: await metricRepository.findFirst(),
  };
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <section className={"container my-5"}>
        <div className="">
          <h1 className={"font-bold text-4xl"}>Bienvenido, Luke</h1>
          <p className={"text-slate-400 text-lg"}>Esta es la información de la semana</p>
        </div>
      </section>

      <section className={"container my-5"}>
        <div className="grid grid-cols-1 gap-5">
          <AnnounceWidget data={data.advertisement} />
        </div>
      </section>
      <section className={"container"}>
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-5"}>
          <PageViewsWidget items={data?.analytics.pageViews} />
          <SessionsWidget items={data?.analytics.sessions} />
          <DemographyWidget items={data?.analytics.demography} />
          <div className=""></div>
        </div>
      </section>
    </>
  );
}

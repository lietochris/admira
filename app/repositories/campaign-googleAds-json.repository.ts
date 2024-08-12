import CampaignRepository from "~/contracts/campaign.repository";
import Campaign from "~/types/campaign.type";
import dataset from "~/data/google-ads.dataset.json";

export default class CampaignGoogleAdsJsonRepository implements CampaignRepository {
  async findAll(): Promise<Campaign[]> {
    return dataset.campañas.map((item) => ({
      name: item.nombre,
      impressions: item.impresiones,
      clicks: item.clics,
      conversions: item.conversiones,
      cost: item.costo,
    }));
  }
}

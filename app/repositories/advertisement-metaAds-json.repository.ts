import AdvertisementRepository from "~/contracts/advertisement.repository";
import Advertisement from "~/types/advertisement.type";
import dataset from "~/data/meta-ads.dataset.json";

export default class AdvertisementMetaAdsJsonRepository implements AdvertisementRepository {
  async findAll(): Promise<Advertisement[]> {
    return dataset.anuncios.map((item) => ({
      name: item.nombre,
      reach: item.alcance,
      engagement: item.participación,
      adCost: item.gastoPublicidad,
      conversions: item.conversiones,
    }));
  }

  async findLast(): Promise<Advertisement | null> {
    if (dataset.anuncios.length == 0) {
      return null;
    }

    const result = dataset.anuncios[dataset.anuncios.length - 1];

    return {
      adCost: result.gastoPublicidad,
      conversions: result.conversiones,
      engagement: result.participación,
      name: result.nombre,
      reach: result.alcance,
    };
  }
}

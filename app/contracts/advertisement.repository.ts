import Advertisement from "~/types/advertisement.type";

export default interface AdvertisementRepository {
  findAll: () => Promise<Advertisement[]>;
  findLast: () => Promise<Advertisement | null>;
}

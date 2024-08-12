import Campaign from "~/types/campaign.type";

export default interface CampaignRepository {
  findAll: () => Promise<Campaign[]>;
}

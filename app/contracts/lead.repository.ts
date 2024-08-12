import Lead from "~/types/lead.type";

export default interface LeadRepository {
  findAll: () => Promise<Lead[]>;
}

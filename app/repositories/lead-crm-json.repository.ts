import LeadRepository from "~/contracts/lead.repository";
import dataset from "~/data/crm.dataset.json";
import Lead from "~/types/lead.type";

export default class LeadCrmJsonRepository implements LeadRepository {
  async findAll(): Promise<Lead[]> {
    return dataset.leads.map((lead) => {
      return {
        name: lead.nombre,
        acquisitionPrice: lead.costoAdquisición,
        lifeValue: lead.valorDeVida,
      };
    });
  }
}

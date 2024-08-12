import Population from "~/types/population.type";

export default interface PopulationRepository {
  findAll: () => Promise<Population[]>;
}

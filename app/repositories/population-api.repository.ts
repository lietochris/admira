import PopulationRepository from "~/contracts/population.repository";
import Population from "~/types/population.type";

export default class PopulationApiRepository implements PopulationRepository {
  private url: string = "https://datausa.io/api";

  async findAll(): Promise<Population[]> {
    const url = this.url + "/data?drilldowns=Nation&measures=Population";
    const options = { method: "GET" };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`No se logro obtener el resultado: ${response.statusText}`);
    }

    const result = await response.json();

    return result.data
      .map((item: never) => ({
        id: item["ID Nation"],
        nation: item["Nation"],
        year: item["Year"],
        population: item["Population"],
        slug: item["Slug Nation"],
      }))
      .sort((a: { year: number }, b: { year: number }) => a.year - b.year);
  }
}

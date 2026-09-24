import { api } from "@/lib/axios";
import { Property } from "@/types/property";


export async function getProperties(): Promise<Property[]> {

    const response = await api.get<Property[]>('/properties')
    return response.data
    console.log(response.data)

}

export async function getPropertyById(id: string): Promise<Property | null> {
  try {
    const response = await api.get<Property>(`/properties/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch property with id ${id}:`, error);
    return null;
  }
}
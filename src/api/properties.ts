import { api } from "@/lib/axios";
import { Property } from "@/types/property";


export async function getProperties(): Promise<Property[]> {

    const response = await api.get<Property[]>('/properties')
    return response.data
    console.log(response.data)

}

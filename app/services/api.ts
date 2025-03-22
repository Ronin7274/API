const API_HOST = 'https://dattebayo-api.onrender.com'

export async function fetchcharacter() 
{
    try {
        const response = await fetch(`${API_HOST}/characters`)
        if(!response.ok){
            throw Error (`${response.status} - ${response.statusText}`);
        }
        return await response.json();
    }catch (error) {
        console.log("erro ao buscar personagem:", error)
        return [];
    }
}

// services/api.ts

export async function fetchcharacterDetails(id: number) {
    const response = await fetch(`https://api.dattebayo.com/character/${id}`);
    const data = await response.json();
    return data.character; // Supondo que o campo retornado seja 'character'
}

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

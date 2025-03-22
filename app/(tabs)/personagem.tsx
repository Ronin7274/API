import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { fetchcharacterDetails } from '../services/api'; // Função para buscar detalhes do personagem
import { Image, Text, View, StyleSheet } from 'react-native';

// Define a interface para os detalhes do personagem
interface PersonagemDetalhes {
  id: number;
  name: string;
  images: [string];
  clan: string;
  family: string;
}

export default function PersonagemDetalhes() {
  // Usando o useRoute para pegar os parâmetros da URL
  const router = useRouter();
  const { id } = <router className="params"></router>; // Acessa o parâmetro "id" da URL

  const [personagem, setPersonagem] = useState<PersonagemDetalhes | null>(null);

  useEffect(() => {
    async function carregarPersonagem() {
      if (id) {
        const dados = await fetchcharacterDetails(id); // Busca os detalhes do personagem
        setPersonagem(dados);
      }
    }

    carregarPersonagem();
  }, [id]);

  if (!personagem) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={style.container}>
      <Image source={{ uri: personagem.images[0] }} style={style.Image} />
      <Text style={style.name}>{personagem.name}</Text>
      <Text>Clã: {personagem.clan}</Text>
      <Text>Família: {personagem.family}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
  },
  Image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

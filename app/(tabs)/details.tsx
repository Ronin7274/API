import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { fetchcharacter } from "../services/api";
import { Image, Text, FlatList, View, StyleSheet, Button  } from "react-native";

interface personagem{
    id:number;
    name:string;
    images:[string]
}

export default function home() {
    const router = useRouter();
    const [personagens, setPersonagens] = useState<personagem[]>([])

    useEffect(() => {
        async function carregarPersonagens(){
            const dados = await fetchcharacter();
            setPersonagens(dados.characters);
        }

        carregarPersonagens();
        
    }, [])

    return(
        <View style={style.container}>
            <Text>Página detalhes</Text>
            <FlatList
                data={personagens}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={style.card}>
                        <Image source={{uri: item.images[0]}} style={style.Image}/>
                        <Text style={style.name}>{item.name}</Text>
                        <Button title="ver detalhes"
                        onPress={() => router.push('/personagem')}/>
                    </View>
                )}
                />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        padding: 15
    },
    card: {
        backgroundColor: "#F4F4F4",
        padding: 10,
        marginVertical: 8,
        borderRadius: 10,
        alignItems: "center"    
    },
    Image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 5
    },
    name: {
        fontSize: 18,
        fontWeight: "bold"
    }
})
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home(){
    const router = useRouter();

    return(
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}> 
            <Text>home</Text>
            <Button title="ver detalhes"
            onPress={() => router.push('/details')}/>
        </View>
    )
   
}
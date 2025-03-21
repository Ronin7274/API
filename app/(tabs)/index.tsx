import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function homeScreen(){
  const router = useRouter();
  const [count, setCount ] = useState(0);

  useEffect(() => {
    console.log("componente montado!");
  }, [])

  return(
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text>Bem vindo a vila da folha</Text>
      <Text>contador: {count}</Text>
      <Button title="aumentar" onPress={() => setCount(count+1)}/>
      <Button title="ir para home" onPress={() => router.push('/home')}/>
    </View>
  )
}
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [text1, settext1]=useState('');
  const [text2, settext2]=useState('');
  const [text3, settext3]=useState('');
  const [resultado, setresultado]=useState('');

  function sumar(n1, n2, n3){
    var a=parseFloat(n1);
    var b=parseFloat(n2);
    var c=parseFloat(n3);
    var x1= (( -b + Math.sqrt((Math.pow(b,2) - (4)*(a)*(c)))) / (2)*(a));
    var x2= (( -b - Math.sqrt((Math.pow(b,2) - (4)*(a)*(c)))) / (2)*(a));

    var resul="resultado X1: "+x1+" X2: "+x2;
    setresultado(resul);
  }

  return (
    <View style={styles.container}>
      <Text style= {{padding:15, fontSize:24, backgroundColor:'green', color:'white', textAlign:'center'}}>
      Formula de la cuadratica
      </Text>

      <TextInput style={{
        padding:5,
        height:40,
        borderColor:'black',
        borderWidth:2,
        marginTop:10,
        width:240
        }}
        placeholder='valor a'
        keyboardType='numeric'
        onChangeText={(text1)=>settext1(text1)}
        ></TextInput>

<TextInput style={{
        padding:5,
        height:40,
        borderColor:'black',
        borderWidth:2,
        marginTop:10,
        width:240
        }}
        placeholder='valor b'
        keyboardType='numeric'
        onChangeText={(text2)=>settext2(text2)}
        ></TextInput>

<TextInput style={{
        padding:5,
        height:40,
        borderColor:'black',
        borderWidth:2,
        marginTop:10,
        width:240
        }}
        placeholder='valor c'
        keyboardType='numeric'
        onChangeText={(text3)=>settext3(text3)}
        ></TextInput>

        <TouchableOpacity
        style={{height:60,backgroundColor:'brown', marginTop:10}}
        onPress={()=>{sumar(text1, text2, text3)}}
        >
        <Text style={{color:'white', fontSize:24, textAlign:'center'}}>Solucion</Text>
        </TouchableOpacity>

        <Text style={{fontSize:32, backgroundColor:"yellow", marginTop:10}}>
          {resultado}
        </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
});
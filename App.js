import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [accountCorrect, setAccountCorrect] = useState('');
  const [time, setTime] = useState(0);
  const check = () => {
    const userAccount = "user123";
    const userPassword = "user123";
    if(account == '' || password == '') setTime(1);
    else setTime(2);
    if(account == userAccount && password == userPassword){
      setAccountCorrect(true);
    }else{
      setAccountCorrect(false);
    }
  }
  const getNumber = () => {
    if(time == 1){
      return <Text style={{color:"red"}}>請輸入密碼!</Text>
    }else if(accountCorrect === true && time == 2){
      return <Text style={{color:"green"}}>登入成功</Text>
    }else if(accountCorrect === false && time == 2){
      return <Text style={{color:"red"}}>帳號或密碼輸入錯誤</Text>
    }
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize:35,color:"white",margin:25}}>密碼登入App</Text>
      <Text style={{fontSize:20,color:"white",marginRight:280}}>帳號:</Text>
      <TextInput style={styles.textInput} onChangeText = {(text) => setAccount(text)} value={account}></TextInput>
      <Text style={{fontSize:20,color:"white",marginRight:280}}>密碼:</Text>
      <TextInput style={styles.textInput} onChangeText = {(text) => setPassword(text)} value={password} secureTextEntry ={true}></TextInput>
      {getNumber()}
      <TouchableOpacity style={styles.button} onPress={() => check()}>
        <Text style={styles.buttonText}>登入</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"black",
  },
  textInput:{
    margin:20,
    height:40,
    width:345,
    fontSize:30,
    backgroundColor:'gray',
    borderRadius:10,
  },
  button:{
    margin:20,
    width:345,
    height:40,
    borderRadius:10,
    backgroundColor:"#daa520",
  },
  buttonText:{
    textAlign:"center",
    fontSize:25,
    color:"white",
  }
});

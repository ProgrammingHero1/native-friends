import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import User from './compoents/User/User';

export default function App() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <View style={styles.container}>
      <Text>Total Friends: {users.length}</Text>
      {
        users.map(user => <User user={user}>{user.name}</User>)
      }
      <Text style={{fontSize:40}}>{name}</Text>
      <Image
          source={{
            uri: 'https://www.programming-hero.com/assets/img/hero-header/iphone/features-v2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
        <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        onChangeText={text => setName(text)}
        defaultValue=""
      />
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
  },
});

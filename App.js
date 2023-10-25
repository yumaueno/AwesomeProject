import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [currentDirective, setCurrentDirective] = useState("");
  const [inputDirective, setInputDirective] = useState("");
  const [directives, setDirectives] = useState([
    "隣の人と乾杯！",
    "全員で乾杯！",
    "左隣の人に感謝の言葉を！",
    "右隣の人とハイタッチ！",
    "対面の人と握手！",
  ]);

  const getRandomDirective = () => {
    const randomIndex = Math.floor(Math.random() * directives.length);
    setCurrentDirective(directives[randomIndex]);
  };

  const addDirective = () => {
    if (inputDirective.trim() !== "") {
      setDirectives([...directives, inputDirective]);
      setInputDirective("");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>飲み会司令アプリ</Text>
      <Text style={styles.directiveText}>{currentDirective}</Text>
      <TouchableOpacity style={styles.button} onPress={getRandomDirective}>
        <Text style={styles.buttonText}>司令を出す</Text>
      </TouchableOpacity>
      <TextInput 
        style={styles.input}
        value={inputDirective}
        onChangeText={setInputDirective}
        placeholder="新しい司令を入力..."
      />
      <TouchableOpacity style={[styles.button, styles.addButton]} onPress={addDirective}>
        <Text style={styles.buttonText}>司令を追加</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F2F2F2',
  },
  header: {
    fontSize: 26,
    marginBottom: 50,
    color: '#333',
    fontWeight: 'bold',
  },
  directiveText: {
    fontSize: 22,
    marginBottom: 30,
    textAlign: 'center',
    color: '#555',
  },
  input: {
    width: '100%',
    height: 40,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007BFF',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addButton: {
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

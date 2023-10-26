import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [currentDirective, setCurrentDirective] = useState("");
  const [inputDirective, setInputDirective] = useState("");
  const [directives, setDirectives] = useState([
    "自分だけ豪快にイッキ！",
    "右隣の人と乾杯してイッキ！",
    "左隣の人と乾杯してイッキ！",
    "全員で乾杯してイッキ！",
    "男性全員で乾杯してイッキ",
    "女性全員で乾杯してイッキ",
    "飲ませたい人を指差してイッキ",
    "全員で飲ませたい人を指差してイッキ",
    "たけのこニョッキッキで負けた人イッキ",
    "山手線ゲームで負けた人イッキ",
    "黒い服を着ている人イッキ！",
    "白い服を着ている人イッキ！",
    "メガネをかけている人イッキ！",
    "ジャンケンで負けた人イッキ！",
    "ジャンケンで勝った人イッキ！",
    "年齢が奇数の人イッキ！",
    "年齢が偶数の人イッキ！",
    "今月誕生日の人イッキ！",
    "全員左隣の人の飲み物をイッキ！",
    "全員右隣の人の飲み物をイッキ！",
    "ピアスをしている人イッキ！",
    "帽子をかぶっている人イッキ！",
    "今日初めて会った人と乾杯してイッキ！",
    "ビールを飲んでいる人イッキ！",
    "ワインを飲んでいる人イッキ！",
    "最初に席に座った人イッキ！",
    "最後に席に座った人イッキ！",
    "今、笑顔の人イッキ！",
    "足を組んでいる人イッキ！",
    "最も遠くから来た人イッキ！",
    "最も近くから来た人イッキ！",
    "ペットを飼っている人イッキ！",
    "一番直近で旅行に行った人イッキ！",
    "携帯の残量が50%以下の人イッキ！",
    "名前に「こ」が入っている人イッキ！",
    "髪の毛が一番長い人イッキ！",
    "髪の毛が一番短い人イッキ！",
    "Instagramのフォロワーが500人以上の人イッキ！",
    "Twitterのフォロワーが500人以上の人イッキ！",
    "最も身長が高い人イッキ！",
    "全員でお酒が強い人を指して一番集まった人イッキ！",
    "一番遠くの国を訪れたことがある人イッキ！",
    "一番多くの国を訪れたことがある人イッキ！",
    "時計をしている人イッキ！",
    "最も早く起きた人イッキ！",
    // 若干ハード要素
    "一番エッチしたい人とイッキ！",
    "一番キスしたい人とイッキ！",
    "一番デートしたい人とイッキ！",
    "一番付き合いたい人とイッキ！",
    "一番結婚したい人とイッキ！",
    "一番旅行に行ったら楽しそうな人とイッキ！",
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

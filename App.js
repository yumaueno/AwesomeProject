import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Modal, Image } from 'react-native';

export default function App() {
  const [currentDirective, setCurrentDirective] = useState("");
  const [inputDirective, setInputDirective] = useState("");
  const [directives, setDirectives] = useState([
    "デートで行くならディズニーシー派？ディズニーランド派？",
    "デートで行くなら水族館派？動物園派？",
    "朝食にはパン派ご飯派？",
    "コーヒーはブラック派？それともミルク入り？",
    "映画を見るなら家派？それとも映画館派？",
    "旅行するなら海派？それとも山派？",
    "音楽を聴くならJ-POPか洋楽？",
    "スポーツは観戦派？それとも実際にやる派？",
    "休日はアクティブに過ごす派？それともゆっくり派？",
    "読書は紙の本派？それとも電子書籍派？",
    "夏休みは海外旅行派？それとも国内旅行派？",
    "食事は和食派？それとも洋食派？",
    "スイーツはケーキ派？それともアイスクリーム派？",
    "猫派？それとも犬派？",
    "夜更かし派？それとも早寝早起き派？",
    "ショッピングはオンライン派？それとも実店舗派？",
    "映画はアクション派？それともロマンス派？",
    "料理は自炊派？それとも外食派？",
    "冬の旅行はスキー派？それとも温泉派？",
    "パソコンはMac派？それともWindows派？",
    "服装はカジュアル派？それともフォーマル派？",
    "勉強は図書館やカフェ派？それとも自宅派？",
    "テレビはバラエティ派？それともドラマ派？",
    "スマートフォンはiOS派？それともAndroid派？",
    "休日は友達と過ごす派？それとも一人で過ごす派？",
    "趣味は室内派？それとも屋外派？",
    "写真はスマホで撮る派？それともカメラで撮る派？",
    "映画のジャンルはコメディ派？それともサスペンス派？",
    "連絡はこまめに派？それともたまに派？",
    "連絡は短文派？それとも長文派？",
    "旅行は計画的に派？それとも突然派？",
    "食べ物は辛い派？それとも甘い派？",
    "運動はチームスポーツ派？それとも個人スポーツ派？",
    "休日は早起き派？それとも二度寝派？",
    "飲み物はコーヒー派？それとも紅茶派？",
    "買い物は計画的に派？それとも衝動買い派？",
    "服装は明るい色派？それとも暗い色派？",
    "朝食はしっかり派？それとも軽食派？",
    "仕事はチームで派？それとも単独で派？"
    
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  const getRandomDirective = () => {
    const randomIndex = Math.floor(Math.random() * directives.length);
    setCurrentDirective(directives[randomIndex]);
  };

  const addDirective = () => {
    if (inputDirective.trim() !== "") {
      setDirectives([...directives, inputDirective]);
      setInputDirective("");
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>あなたはどっち！？</Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.directiveText}>{currentDirective || "質問を出すボタンを押してください"}</Text>
        <TouchableOpacity style={styles.button} onPress={getRandomDirective}>
          <Text style={styles.buttonText}>質問を出す</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.addButton]} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>質問を追加</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput 
              style={styles.input}
              value={inputDirective}
              onChangeText={setInputDirective}
              placeholder="新しい質問を入力..."
            />
            <TouchableOpacity style={styles.button} onPress={addDirective}>
              <Text style={styles.buttonText}>追加する</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>閉じる</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Image
        source={require('./assets/beer-image.png')}
        style={styles.beerImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#FFF3E0',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFB300',
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#FFFDE7',
  },
  directiveText: {
    fontSize: 24,
    textAlign: 'center',
    color: '#FF6F00',
    fontWeight: 'bold',
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#FFFDE7',
    margin: 20,
    minHeight: 100,
  },
  input: {
    width: '80%',
    height: 40,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FFB300',
    backgroundColor: '#FFFDE7',
  },
  button: {
    backgroundColor: '#FFB300',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    margin: 10,
    alignSelf: 'center',
  },
  addButton: {
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFDE7',
    fontSize: 18,
    fontWeight: '600',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '90%', // モーダルの横幅を調整
    backgroundColor: '#FFFDE7',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  beerImage: {
    width: '100%',
    height: 200,
    marginBottom: 150
  },
});

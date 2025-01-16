import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>This is a modal...</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show modal message</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    shadowColor: "#000",
    elevation: 3,
  },
  textStyle: {
    textAlign: "center",
  },
  modalText: {
    marginBottom: 40,
    textAlign: "center",
  },
});

export default App;

import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import io from "socket.io-client";
import styles from "./Styles"; // 👈 importación de estilos externos

const socket = io("/");

//const socket = io("http://192.168.43.105:3001"); // Cambia a tu IP local


export default function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", receiveMessage);
        console.log("✅ Socket conectado");

    return () => socket.off("message", receiveMessage);
  }, []);

  const receiveMessage = (message) =>
    setMessages((prev) => [message, ...prev]);

  const handleSubmit = () => {
    if (!message.trim()) return;
    const newMessage = {
      body: message,
      from: "Me",
    };
    setMessages((prev) => [newMessage, ...prev]);
    setMessage("");
    socket.emit("message", newMessage.body);
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.message,
        item.from === "Me" ? styles.myMessage : styles.otherMessage,
      ]}
    >
      <Text style={styles.sender}>{item.from}:</Text>
      <Text>{item.body}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Text style={styles.title}>Chat React Native</Text>
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          inverted
          contentContainerStyle={{ padding: 10 }}
        />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Write your message..."
            value={message}
            onChangeText={setMessage}
            style={styles.input}
          />
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

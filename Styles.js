// styles.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 50,
    borderTopWidth: 1,
    borderColor: "#444",
    backgroundColor: "#2c2c2c",
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    marginLeft: 10,
    backgroundColor: "#1e90ff",
    borderRadius: 5,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  message: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: "80%",
  },
  myMessage: {
    backgroundColor: "#1e90ff",
    alignSelf: "flex-end",
  },
  otherMessage: {
    backgroundColor: "#444",
    alignSelf: "flex-start",
  },
  sender: {
    fontWeight: "bold",
    marginBottom: 3,
    color: "#eee",
  },
});

export default styles;

import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Switch,
} from "react-native";
import Slider from "@react-native-community/slider";


import fundoImg from "../../assets/img/cadfundo.png";
import logoImg from "../../assets/img/Blooms.png";

const { width, height } = Dimensions.get("window");

export default function App() {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState(500);
  const [disponivel, setDisponivel] = useState(false);

  const isWeb = typeof navigator !== "undefined" && navigator.userAgent;

  function enviarDados() {
    if (nome === "" || tipo === "" || quantidade === "") {
      alert("Preencha todos os dados corretamente");
      return;
    }

    alert(
      "Flores cadastradas perfeitamente! \n\n" +
        "Nome: " + nome + "\n" +
        "Preço: R$" + preco.toFixed(2) + "\n" +
        "Tipo: " + tipo + "\n" +
        "Quantidade" + Quantidade + "\n" +
        "Disponível: " + (disponivel ? "Sim" : "Não")
    );
    setNome("");
    setTipo("");
    setQuantidade("");
    setPreco(500);
    setDisponivel(false);
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imagemfundo}
        source={fundoImg}
      >
        <Text style={styles.Logo}>Bloom's</Text>
        <Image style={styles.image} source={logoImg} />
        <ScrollView contentContainerStyle={styles.areaformulario}>
          <Text style={styles.textoNome}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite a espécie da Flor:"
            onChangeText={setNome}
            value={nome}
          />

          <Text style={styles.textoNome}>Tipo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o tipo:"
            onChangeText={setTipo}
            value={tipo}
          />

          <Text style={styles.textoNome}>Série:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite a quantidade (em grupo de 100) das flores:"
            onChangeText={setQuantidade}
            value={quantidade}
          />

          <View style={styles.limiteArea}>
            <Text style={styles.textoNome}>Preço:</Text>
            <Text style={styles.limiteTexto}>R${preco.toFixed(2)}</Text>
          </View>

          <View style={styles.areaSlider}>
            <Slider
              minimumTrackTintColor="#a38d52"
              minimumValue={250}
              maximumValue={4000}
              value={preco}
              onValueChange={setPreco}
            />
          </View>

          <View style={styles.areaDisponivel}>
            <Text style={styles.textoNome}>Disponível:</Text>
            <Switch
              style={isWeb ? { transform: [{ translateY: -2 }] } : {}}
              trackColor={{ false: "#948946", true: "#0c4f59" }}
              thumbColor={"#470b13"}
              value={disponivel}
              onValueChange={setDisponivel}
            />
          </View>

          <TouchableOpacity style={styles.botao} onPress={enviarDados}>
            <Text style={styles.botaoTexto}>Cadastrar as flores</Text>
          </TouchableOpacity>
          
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  imagemfundo: {
    flex: 1,
    resizeMode: "cover",
    width: width,
    height: height,
    alignItems: "center",
  },
  Logo: {
    paddingTop: 35,
    textAlign: "center",
    fontSize: 48,
    fontFamily: "Broadway",
    color: "#4e0952",
  },
    image: {
      width: 150,
      height: 150,
      resizeMode: "contain",
      alignSelf: "center",
      marginBottom: 10,
    },

  areaformulario: {
    width: "90%",
    paddingBottom: 20,
    gap: 20,
  },
  textoNome: {
    fontSize: 18,
    color: "#ae57b3",
    fontWeight: "bold",
    marginBottom: -10,
  },
  input: {
    backgroundColor: "#fff",
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    color: "#000",
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  limiteArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  limiteTexto: {
    color: "#ae57b3",
    fontSize: 17,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  areaSlider: {
    paddingHorizontal: 10,
  },
  areaDisponivel: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  botao: {
    backgroundColor: "#ae57b3",
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    alignItems: "center",
  },
});

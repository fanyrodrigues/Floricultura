import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  Animated,
  ImageBackground,
  Platform,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function Login({ navigation }) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 90 }));
  const [opac] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true,
      }),
      Animated.timing(opac, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <ImageBackground source={require('../../assets/img/loginfun.png')} style={styles.imgBg}>
      <KeyboardAvoidingView
        style={styles.background}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.logo}>
            <Image
              style={{ width: 250, height: 250 }}
              resizeMode="contain"
              source={require('../../assets/img/Blooms.png')}
            />
          </View>

          <Animated.View
            style={[
              styles.formulario,
              {
                opacity: opac,
                transform: [{ translateY: offset.y }],
              },
            ]}
          >
            <TextInput
              style={styles.input}
              placeholder="Usuário"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={() => {}}
            />

            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              autoCorrect={false}
              onChangeText={() => {}}
            />

            <View style={styles.viewBotao}>
              <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('HomeTabs')}
              >
                <Text style={styles.textoBotao}>Entrar</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.botaoRecuperar}
              onPress={() => navigation.navigate('HomeTabs')}
            >
              <Text style={styles.textoRecuperar}>Clique no Botão Entrar</Text>
            </TouchableOpacity>
          </Animated.View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  logo: {
    marginBottom: 20,
    alignItems: 'center',
  },
  formulario: {
    alignItems: 'center',
    width: '90%',
    paddingBottom: 30,
  },
  input: {
    backgroundColor: '#FFF',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    width: '100%',
  },
  viewBotao: {
    width: '100%',
    borderRadius: 7,
  },
  botao: {
    backgroundColor: '#1a7487',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    padding: 10,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 18,
  },
  botaoRecuperar: {
    marginTop: 15,
  },
  textoRecuperar: {
    color: '#FFF',
  },
  imgBg: {
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 1,
    justifyContent: 'flex-start',
  },
});

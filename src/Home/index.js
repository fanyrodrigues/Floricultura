import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-reanimated-carousel';
import { useNavigation } from '@react-navigation/native';

const { width: larguraTela, height: alturaTela } = Dimensions.get('window');

export default function Home() {
  const navigation = useNavigation();

  const [lista] = useState([
    {
      title: "Arranjo de rosas",
      text: "",
      valor: 180,
      img: 'https://static.cestasmichelli.com.br/images/product/26100gg.jpg?ims=750x750'
    },
    {
      title: "Motos",
      text: "Aprenda tudo sobre motos na estrada, viagens e conhecimentos de mecânica",
      valor: 40,
      img: 'https://cdn.pixabay.com/photo/2022/06/08/05/43/motorbike-7249769_960_720.jpg'
    },
    {
      title: "React com Mysql",
      text: "Neste curso é mostrado o passo a passo de como conectar os aplicativos android e ios criados pelo React com um banco de dados mysql",
      valor: 50,
      img: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-mobile-banking-app-welcome-page-startup-page-h5-background-psd-image_153932.jpg'
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity key={item.title} style={styles.carouselItem}>
      <Image source={{ uri: item.img }} style={styles.carouselImg} />
      <Text style={styles.carouselText}>{item.title}</Text>
      <Icon
        name="play-circle-outline"
        size={30}
        color="#FFF"
        style={styles.carouselIcon}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/img/loginfun.png')}
        style={styles.imgBg}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          nestedScrollEnabled={true}
        >
          <View style={styles.searchContainer}>
            <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar..."
              placeholderTextColor="#999"
            />
          </View>

          <Text style={styles.titulo}>Produtos em destaque</Text>

          <View style={styles.slideView}>
            <Carousel
              loop
              ref={carouselRef}
              width={200}
              height={300}
              data={lista}
              scrollAnimationDuration={1000}
              renderItem={renderItem}
              onSnapToItem={(index) => setActiveIndex(index)}
            />
          </View>

          <View style={styles.moreInfo}>
            <View style={{ flex: 1 }}>
              <View style={styles.headerTitleInfo}>
                <Text style={styles.movieTitle}>{lista[activeIndex].title}</Text>
                <Text style={styles.priceTitle}>R$ {lista[activeIndex].valor},00</Text>
              </View>
              <Text style={styles.movieDesc}>{lista[activeIndex].text}</Text>
            </View>

            <TouchableOpacity
              style={styles.btnCarrinho}
              onPress={() => alert('Você enviou pro carrinho')}
            >
              <Icon name="queue" color="#131313" size={30} />
            </TouchableOpacity>
          </View>

          <View style={styles.viewBotao}>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => navigation.navigate('Cadastro')}
            >
              <Text style={styles.textoBotao}>Cadastrar {lista[activeIndex].title}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  imgBg: {
    flex: 1,
    width: larguraTela,
    minHeight: alturaTela,
    justifyContent: 'flex-start',
    backgroundColor: '#000'
  },
  titulo: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
  },
  slideView: {
    width: larguraTela,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  carouselItem: {
    position: 'relative',
  },
  carouselImg: {
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  carouselText: {
    padding: 15,
    color: '#FFF',
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontWeight: 'bold'
  },
  carouselIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  moreInfo: {
    backgroundColor: '#FFF',
    width: larguraTela * 0.9,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  headerTitleInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#131313',
    flex: 1,
  },
  priceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#055a02',
    marginLeft: 10
  },
  movieDesc: {
    color: '#131313',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  btnCarrinho: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  viewBotao: {
    alignItems: 'center',
    marginTop: 20
  },
  botao: {
    backgroundColor: '#470b13',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

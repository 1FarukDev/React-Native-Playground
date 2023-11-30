import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";

const { width, height } = Dimensions.get("window");

const COLORS = { primary: "#282534", white: "#fff" };

const slides = [
  {
    id: "1",
    // image: require("../images/image1.png"),
    image: require("../images/image1.png"),
    title: "Best Digital Solution",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "2",
    image: require("../images/image2.png"),
    title: "Achieve Your Goals",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "3",
    image: require("../images/image3.png"),
    title: "Increase Your Value",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={item.image}
        style={{ height: "75%", width, resizeMode: "contain" }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
};

const OnBoardingScreen = () => {
  const [currentSlidesIndex, setCurrentSlidesIndex] = useState(0);
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlidesIndex(currentIndex);
    console.log(currentIndex);
  };
  const goNextSlide = () => {
    const nextSlideIndex = currentSlidesIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlidesIndex(nextSlideIndex);
    }
  };

  const skipSlides = () => {
    const lastSlides = slides.length - 1;
    const offset = lastSlides * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentSlidesIndex(lastSlides); 
  };

  const ref = useRef(null);
  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlidesIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>
        <View style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={[
                styles.btn,
                {
                  backgroundColor: "transparent",
                  borderWidth: 1,
                  borderColor: COLORS.white,
                },
              ]}
              onPress={skipSlides}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  color: COLORS.white,
                }}
              >
                SKIP
              </Text>
            </TouchableOpacity>
            <View style={{ width: 15 }}></View>
            <TouchableOpacity style={[styles.btn]} onPress={goNextSlide}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[
        {
          paddingTop: Platform.OS === "android" ? 30 : 0,
          //   paddingLeft: 30,
          //   paddingRight: 30,
          flex: 1,
          backgroundColor: COLORS.primary,
        },
        styles.container,
      ]}
    >
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        data={slides}
        ref={ref}
        contentContainerStyle={{ height: height * 0.75 }}
        pagingEnabled //To make the page snap
        horizontal
        onMomentumScrollEnd={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "gray",
    marginHorizontal: 3,
    borderRadius: 2,
  },

  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
});

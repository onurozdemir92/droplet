import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Styles from './styles';
const data = [
  {
    a:
      'https://images.unsplash.com/photo-1533975022683-50b01a696767?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTIzfHxwcm9maWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    a:
      'https://images.unsplash.com/photo-1589277995417-5a8ba4903bf0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTM1fHxwcm9maWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    a:
      'https://images.unsplash.com/photo-1600872251019-352f11aff0e2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTU5fHxwcm9maWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    a:
      'https://images.unsplash.com/photo-1535800149805-4f38bbc13707?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTY3fHxwcm9maWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    a:
      'https://images.unsplash.com/photo-1530834395125-2a7eb8848ac0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTc3fHxwcm9maWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    a:
      'https://images.unsplash.com/photo-1531139308064-ba919938a305?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTgwfHxwcm9maWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    a:
      'https://images.unsplash.com/photo-1531299102504-fc718f23c100?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTgxfHxwcm9maWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    a:
      'https://images.unsplash.com/photo-1527609617096-4d1e03b4fcb9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTg1fHxwcm9maWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    a:
      'https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTkwfHxwcm9maWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    a:
      'https://images.unsplash.com/photo-1551631304-666fa9eb8641?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTk1fHxwcm9maWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    a:
      'https://images.unsplash.com/photo-1555027908-c451b6273d71?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjAzfHxwcm9maWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    a:
      'https://images.unsplash.com/photo-1555437761-09b788333c79?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA1fHxwcm9maWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    a:
      'https://images.unsplash.com/photo-1556383689-05d0c7b8abf1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA5fHxwcm9maWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    a:
      'https://images.unsplash.com/photo-1491545437994-ebc9551b87d7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjIwfHxwcm9maWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
];
const Home = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.logo}>Droplet</Text>
        <TouchableOpacity>
          <FontAwesome name="send" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={Styles.storyScroll}>
          {data.map((item: any) => {
            return (
              <TouchableOpacity style={Styles.storyContainer}>
                <Image
                  style={Styles.storyImage}
                  source={{
                    uri: item.a,
                  }}
                />
                <View style={Styles.storyUserAvatarContainer}>
                  <Image
                    source={{
                      uri:
                        'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    }}
                    style={Styles.storyAvatarImage}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        {data.map(() => {
          return <View style={Styles.postContainer}></View>;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

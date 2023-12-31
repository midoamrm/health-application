import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../assets/values/Colors';
import { CustomCard } from '../components';
const Tab = createBottomTabNavigator();

export default function MedicalServicesScreen({ navigation }: any) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.white,
          borderTopWidth: 0,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: Colors.primary1,
        tabBarInactiveTintColor: Colors.grey,
      }}>
      <Tab.Screen
        name="MyCalender"
        component={MyCalender}
        options={{
          title: 'تقويمي',
          tabBarIcon: ({ color, size }: any) => (
            <FontAwesome5 name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={MedicalServicesContent}
        options={{
          title: 'الرئيسية',
          tabBarIcon: ({ color, size }: any) => (
            <FontAwesome5 name="star" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'الملف الشخصي',
          tabBarIcon: ({ color, size }: any) => (
            <FontAwesome5 name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MedicalServicesContent({ navigation }: any) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>خدمات المدينة الطبية</Text>
        <View style={styles.cardContainer}>
          <CustomCard
            title={list[0]}
            icons={
              <Image
                source={require('../assets/images/medical_icon1.png')}
                style={styles.image}
              />
            }
            onPress={() => navigation.navigate('MedicalServices')}
          />
          <CustomCard
            title={list[1]}
            icons={
              <Image
                source={require('../assets/images/medical_icon2.png')}
                style={styles.image}
              />
            }
            onPress={() => navigation.navigate('MedicalServices')}
          />
          <CustomCard
            title={list[2]}
            icons={
              <Image
                source={require('../assets/images/medical_icon3.png')}
                style={styles.image}
              />
            }
            onPress={() => navigation.navigate('MedicalServices')}
          />
          <CustomCard
            title={list[3]}
            icons={
              <Image
                source={require('../assets/images/medical_icon4.png')}
                style={styles.image}
              />
            }
            onPress={() => navigation.navigate('MedicalServices')}
          />
          <CustomCard
            title={list[4]}
            icons={
              <Image
                source={require('../assets/images/medical_icon5.png')}
                style={styles.image}
              />
            }
            onPress={() => navigation.navigate('LabResultsStack')}
          />
          <CustomCard
            title={list[5]}
            icons={
              <Image
                source={require('../assets/images/medical_icon6.png')}
                style={styles.image}
              />
            }
            onPress={() => navigation.navigate('MedicalServices')}
          />
          <CustomCard
            title={list[6]}
            icons={
              <Image
                source={require('../assets/images/medical_icon7.png')}
                style={styles.image}
              />
            }
            onPress={() => navigation.navigate('MedicalServices')}
          />
          <CustomCard
            title={list[7]}
            icons={
              <Image
                source={require('../assets/images/medical_icon8.png')}
                style={styles.image}
              />
            }
            onPress={() => navigation.navigate('MedicalServices')}
          />
          <CustomCard
            title={list[8]}
            icons={
              <Image
                source={require('../assets/images/medical_icon9.png')}
                style={styles.image}
              />
            }
            onPress={() => navigation.navigate('MedicalServices')}
          />
        </View>
      </ScrollView>
    </View>
  );
}
function MyCalender() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>تقويمي</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>الملف الشخصي</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary2,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  text: {
    color: Colors.primary1,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  user: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: Colors.secondary1,
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
  },
  infoText: {
    color: Colors.grey,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  image: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
  },
});
const list = [
  'التقارير',
  'الصيدلية',
  'المواعيد',
  'ذكرني',
  'النتائج المخبرية',
  'طلباتي',
  'حل مشكلة اجتماعية',
  'سكن داخلي',
  'طلب مواصلات',
];

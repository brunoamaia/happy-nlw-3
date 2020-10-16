import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

interface HeaderProps {
  title: string
}

export default function Header(props: HeaderProps ) {
  const navigation = useNavigation();

  function handleGoBackToAppHomepage() {
    navigation.navigate('OrphanagesMap')
  }

  return(
    <View style={styles.container} >
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15B6D6" />
      </BorderlessButton>
      
      <Text style={styles.title} > {props.title} </Text>

      <BorderlessButton onPress={handleGoBackToAppHomepage}>
        <Feather name="x" size={24} color="#FF669D" />
      </BorderlessButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderColor: '#dde3f0',
    paddingTop: 44,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  title: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#8FA7B3',
    fontSize: 16
  }
})
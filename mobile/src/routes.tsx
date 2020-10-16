import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap'
import OrphanageDetails from './pages/OrphanageDetails'

import OrphanageData from './pages/CreateOrphanage/OrphanageData'
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition'
import Header from './components/Header';


export default function Routes() {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false, cardStyle: {backgroundColor: '#f2f3f5'} }}>
        <Screen name="OrphanagesMap" component={OrphanagesMap} />   
        {/* propriedade **options={{ headeheaderShown: false}}** // desabilitar o "header" em apenas uma oágina específica */}
        
        <Screen
          name="OrphanageDetails"
          component={OrphanageDetails}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Orfanato" />
          }}
        />

        <Screen
          name="OrphanageData"
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" />
          }}
        />
        <Screen
          name="SelectMapPosition"
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title="Selecione um ponto" />
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

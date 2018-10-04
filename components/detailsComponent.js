import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default class DetailsScreen extends React.Component {

  render() {
    const { navigation } = this.props;
    const userData = navigation.getParam('userData', null);
    
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'Tramite', data: [userData.procedure]},
            {title: 'Nombre', data: [[userData.firstname, ' ', userData.lastname]]},
            {title: 'Sexo', data: [userData.gender]},
            {title: 'DNI', data: [userData.id]},
            {title: 'Ejemplar', data: [userData.copy]},
            {title: 'Fecha de Nacimiento', data: [userData.birthdate]},
            {title: 'Fecha de Emisión', data: [userData.creation_date]},
            {title: 'Número X', data: [userData.x_number]},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 16,
      height: 44,
      backgroundColor: '#FFF'
    },
  })
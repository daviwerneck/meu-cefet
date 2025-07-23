import React, { useState } from 'react';
import { View, TextInput, Text, StatusBar, Button, ScrollView, Linking, StyleSheet } from 'react-native';

export function Inicio({ navigation }: any) {
    const [nome, setNome] = useState ("")

    function EnviarNome(){
        navigation.navigate('Horários', {
            aluno: nome
        })
    }

    return (
        <View>

        <ScrollView  contentContainerStyle={styles.container}>
            <Text style={styles.boasVindas}>Meu CEFET-MG</Text>
            <TextInput 
                placeholder="Insira seu nome..."
                value={nome}
                onChangeText={setNome}
            />
            <Button 
            title='Ver meus horários'
            onPress={EnviarNome} color="#ffa500"/>
            <StatusBar />

            <Text style={styles.secao}>Notícias</Text>
            <Text
        style={styles.noticia}
        onPress={() => Linking.openURL('https://www.cefetmg.br')}>
        🔗 Inscrições abertas para monitoria 2025.2!
      </Text>
      <Text
        style={styles.noticia}
        onPress={() => Linking.openURL('https://www.cefetmg.br')}>
        🎓 Resultados do ENEM Técnico divulgados!
      </Text>

        </ScrollView>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#f2f2f2',
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center', // Adicionado para centralizar horizontalmente
    },
    boasVindas: {
      fontSize: 22,
      marginBottom: 20,
      color: '#ffa500',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    secao: {
      fontSize: 18,
      marginBottom: 10,
      color: '#333',
      textAlign: 'center', // Centraliza o texto da seção
    },
    noticia: {
      fontSize: 16,
      marginBottom: 10,
      color: '#0000ee',
      textDecorationLine: 'underline',
      textAlign: 'center', // Centraliza o texto da notícia
    }
  });
  
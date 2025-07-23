import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default function Ajuda() {
  function handleFaleConosco() {
    Alert.alert('Fale conosco', 'Entre em contato pelo e-mail suporte@cefetmg.br');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perguntas Frequentes</Text>

      <Text style={styles.item}>Como acessar o SIGAA?</Text>
      <Text style={styles.item}>Como solicitar declaração de matrícula?</Text>
      <Text style={styles.item}>Onde consultar minhas notas?</Text>

      <Text style={styles.info}>
        💡 Se você ainda não inseriu seu nome na aba Início, o seu cronograma será padrão.
      </Text>

      <View style={styles.button}>
        <Button title="Fale conosco" onPress={handleFaleConosco} color="#ffa500" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    color: '#ffa500',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    fontSize: 16,
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  info: {
    fontSize: 14,
    color: '#777',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 10,
    width: '60%',
  },
});

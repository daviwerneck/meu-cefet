// src/screens/Horarios.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Horarios({ route }: any) {
  const nome = route?.params?.aluno;

  const horarios = [
    { dia: 'Segunda', materia: 'Matemática', horario: '08h às 09h40' },
    { dia: 'Terça', materia: 'Física', horario: '10h às 11h40' },
    { dia: 'Quarta', materia: 'Programação', horario: '13h às 14h40' },
    { dia: 'Quinta', materia: 'História', horario: '08h às 09h40' },
    { dia: 'Sexta', materia: 'Inglês', horario: '10h às 11h40' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {nome ? `Olá, ${nome}! Aqui estão seus horários:` : 'Horários de aula não personalizados.'}
      </Text>

      {nome ? (
        <View style={styles.listContainer}>
          {horarios.map((item, index) => (
            <Text key={index} style={styles.item}>
              {item.dia}: {item.materia} - {item.horario}
            </Text>
          ))}
        </View>
      ) : (
        <Text style={styles.info}>
          💡 Vá até a aba Início e informe seu nome para visualizar seus horários personalizados.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: '#ffa500',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    alignItems: 'center',
  },
  item: {
    fontSize: 16,
    marginBottom: 12,
    color: '#333',
    textAlign: 'center',
  },
  info: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
});

import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, Linking, ActivityIndicator } from 'react-native';
import * as yup from 'yup';

import { Page, Card, Form, Input, Button } from 'components';

import { Colors } from 'styles';

import styles from './style';

const questions = [
  {
    question: 'Fiz os exames, assim que sair o resultado te passo pra vc dar uma olhada. Outra dúvida: Continuando com o cipionato após o ciclo, algo em torno de 120mg/sem, faz-se necessário algum tipo de TPC?',
    answer: `Boa tarde! =)
    Bom?

    Beleza Gui!!

    Faz sim, SERMs mesmo.
    Bom final de semana com juízo!
    Abraço`,
  },
  {
    question: 'Fiz os exames, assim que sair o resultado te passo pra vc dar uma olhada. Outra dúvida: Continuando com o cipionato após o ciclo, algo em torno de 120mg/sem, faz-se necessário algum tipo de TPC?',
    answer: `Boa tarde! =)
    Bom?

    Beleza Gui!!

    Faz sim, SERMs mesmo.
    Bom final de semana com juízo!
    Abraço`,
  },
  {
    question: 'Fiz os exames, assim que sair o resultado te passo pra vc dar uma olhada. Outra dúvida: Continuando com o cipionato após o ciclo, algo em torno de 120mg/sem, faz-se necessário algum tipo de TPC?',
    answer: `Boa tarde! =)
    Bom?

    Beleza Gui!!

    Faz sim, SERMs mesmo.
    Bom final de semana com juízo!
    Abraço`,
  },
  {
    question: 'Fiz os exames, assim que sair o resultado te passo pra vc dar uma olhada. Outra dúvida: Continuando com o cipionato após o ciclo, algo em torno de 120mg/sem, faz-se necessário algum tipo de TPC?',
    answer: `Boa tarde! =)
    Bom?

    Beleza Gui!!

    Faz sim, SERMs mesmo.
    Bom final de semana com juízo!
    Abraço`,
  },
];

const Questions = () => {
  const [suggestion, setSuggestion] = useState(null);

  const renderForm = () => {
    const initialValues = {
      question: '',
    };

    const onSubmit = (values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
      }, 3000);
    };

    const validationSchema = yup.object().shape({
      question: yup
        .string()
        .required('Digite sua pergunta antes de enviar!'),
    });

    const handleOnChangeText = (text) => {
      if (!text) {
        setSuggestion(null);
      }

      if (text.toLowerCase().indexOf('gordura localizada') > -1) {
        setSuggestion({});

        setTimeout(() => {
          setSuggestion({
            url: 'https://www.youtube.com/watch?v=fXcAw7EDbzo',
            thumb: 'https://i.ytimg.com/vi/fXcAw7EDbzo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDgTgi97uLdmRiz0toIRUdH5q6NiQ',
            title: 'Queima de gordura localizada *aprenda agora*',
          });
        }, 2000);
      }
    }

    return (
      <Form
        style={styles.form}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
        <Input
          type="textarea"
          styleContainer={styles.questionInputContainer}
          styleInput={styles.questionInput}
          name="question"
          placeholder={'Digite sua pergunta aqui'}
          onChangeText={handleOnChangeText}
          />
        <Button
          type="submit"
          text="Enviar"
          upperCase
        />
      </Form>
    );
  }

  const renderSuggestion = () => {
    if (!suggestion) {
      return null;
    }

    if (!suggestion.url) {
      return (
        <Card style={styles.loading}>
          <ActivityIndicator color={Colors.lightgray} />
        </Card>
      );
    }

    return (
      <TouchableOpacity onPress={() => Linking.openURL(suggestion.url)}>
        <Card style={styles.suggestion}>
          <Image style={styles.suggestionImage} source={{ uri: suggestion.thumb }} />
          <Text style={styles.suggestionTitle}>{suggestion.title}</Text>
          <Text style={styles.suggestionTip}>Já assistiu este vídeo? Talvez eu já tenha respondido sua dúvida.</Text>
        </Card>
      </TouchableOpacity>
    );
  }

  const renderQuestions = () => {
    const clearText = (text) => {
      return text
        .split('\n')
        .map(t => t.trim())
        .join('\n');
    }

    return questions.map((question, i) =>
      <Card key={i}>
        <Text style={styles.question}>{question.question}</Text>
        <View style={styles.dash} />
        <Text style={styles.answer}>{clearText(question.answer)}</Text>
      </Card>
    );
  }

  return (
    <Page
      style={styles.main}
      showHeader
      title="Perguntas"
    >
      {renderForm()}
      {renderSuggestion()}
      <Text style={styles.historyTitle}>Últimas Perguntas</Text>
      {renderQuestions()}
    </Page>
  );
}

export default Questions;

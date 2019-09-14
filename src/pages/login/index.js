import React, { useState } from 'react';
import { Image } from 'react-native';
import * as yup from 'yup';

import { Page, Form, Input, Button } from 'components';

import styles from './style';

const Login = ({ navigation }) => {
  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values, { setFieldError, setSubmitting }) => {
    setTimeout(() => {
      // setFieldError('email', 'E-mail informado já está em uso!');
      setSubmitting(false);

      navigation.navigate('Workouts');
    }, 3000);
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required('O e-mail é obrigatório!')
      .email('O e-mail informado é inválido!'),
    password: yup
      .string()
      .required('A senha é obrigatória!'),
  });

  return (
    <Page>
      <Form
        style={styles.container}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
        <Image
          style={styles.logo}
          source={require('assets/logo.png')}
          />
        <Input
          type="email"
          name="email"
          placeholder={'E-mail'}
          />
        <Input
          type="password"
          name="password"
          placeholder={'Senha'}
          />
        <Button
          type="submit"
          text="Acessar"
          upperCase
        />
      </Form>
    </Page>
  );
}

export default Login;

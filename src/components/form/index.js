import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';

import Input from 'components/input';
import Button from 'components/button';

import styles from './style';

const Form = ({ children, style, ...props }) => {
  return (
    <Formik {...props}>
      {({ handleSubmit, handleChange, handleBlur, values, errors, isSubmitting, ...rest }) => (
        <View style={style}>
          {
            children.map((child, i) => {
              console.log(rest);
              console.log(isSubmitting);
              if (child.type === Input && child.props.name) {
                const {
                  name,
                  onChangeText = () => {},
                  onBlur = () => {},
                  tooltip = '',
                } = child.props;

                const change = (name) => (e) => {
                  onChangeText(e);
                  handleChange(name)(e);
                }

                const blur = (name) => (e) => {
                  onBlur(e);
                  handleBlur(name)(e);
                }

                const error = errors[name] ? errors[name] : tooltip;

                return (
                  <Input
                    key={i}
                    {...child.props}
                    onChangeText={change(name)}
                    onBlur={blur(name)}
                    value={values[name]}
                    tooltip={error}
                    />
                );
              } else
              if (child.type === Button && child.props.type === 'submit') {
                return (
                  <Button
                    key={i}
                    {...child.props}
                    loading={isSubmitting}
                    onPress={handleSubmit}
                    />
                );
              }

              return child;
            })
          }
        </View>
      )}
    </Formik>
  );
}

export default Form;

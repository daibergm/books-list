import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

// @Assets
import { GeneralStyles } from '../../assets/';

// @Types
import { User } from '../../types/session';

// @Components
import { Button, Input, Text } from '../common';

// Variables
const initialValues = {
  name: '',
  lastName: '',
  email: '',
  age: '',
  termsAndConditions: '',
};

const validationSchema = yup.object().shape({
  name: yup.string().trim().required('The name is required'),
  lastName: yup.string().trim().required('The last name is required'),
  email: yup
    .string()
    .required('The email is required')
    .email('Please enter a valid email'),
});

interface Props {
  submitFunction: (values: User) => void;
  loading: boolean;
}

function LoginComponent(props: Props) {
  const { submitFunction, loading } = props;

  const onSubmit = (values: User) => submitFunction(values);

  return (
    <View style={[GeneralStyles.flex1]}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          isValid,
          handleSubmit,
          touched,
          dirty,
        }) => (
          <ScrollView
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
            style={[GeneralStyles.width100, GeneralStyles.paddingH15]}
            contentContainerStyle={[GeneralStyles.flex1]}
            keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              style={[GeneralStyles.flex1, GeneralStyles.justifyCenter]}
              behavior={Platform.select({
                ios: 'padding',
                android: undefined,
              })}>
              <View style={GeneralStyles.marginT30}>
                <Input
                  value={values.name}
                  placeholder="Name"
                  errorMessage={touched.name ? errors.name : undefined}
                  onChangeText={handleChange('name')}
                  onBlur={() => setFieldTouched('name')}
                />

                <Input
                  value={values.lastName}
                  placeholder="Last name"
                  errorMessage={touched.lastName ? errors.lastName : undefined}
                  onChangeText={handleChange('lastName')}
                  onBlur={() => setFieldTouched('lastName')}
                />

                <Input
                  value={values.email}
                  placeholder="Email"
                  errorMessage={touched.email ? errors.email : undefined}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />

                <View style={[GeneralStyles.marginT30]}>
                  <Button
                    title="LOGIN"
                    testID="loginButton"
                    disabled={loading || !isValid || !dirty}
                    onPress={handleSubmit}
                    loading={loading}
                  />
                </View>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
}

export default LoginComponent;

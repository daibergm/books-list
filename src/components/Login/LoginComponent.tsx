import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Text } from 'react-native-elements';
import { Formik } from 'formik';

// @Assets
import { GeneralStyles } from '../../assets/';
import Styles from './styles';

// @Types
import { User } from '../../types/session';

// @Components
import { Button, Input } from '../common';

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
        initialValues={{
          name: '',
          lastName: '',
          email: '',
          age: '',
          termsAndConditions: '',
        }}
        onSubmit={onSubmit}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
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
              <View style={GeneralStyles.alignCenter}>
                <Text h3>LOGIN</Text>
              </View>
              <View>
                <Input
                  value={values.name}
                  placeholder="Name"
                  errorMessage="The name is required"
                  onChangeText={handleChange('name')}
                  onBlur={() => setFieldTouched('name')}
                />

                <Input
                  value={values.lastName}
                  placeholder="Last name"
                  errorMessage="The last name is required"
                  onChangeText={handleChange('lastName')}
                  onBlur={() => setFieldTouched('lastName')}
                />

                <Input
                  value={values.email}
                  placeholder="Email"
                  errorMessage="The email is required"
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                />

                <View style={[GeneralStyles.marginT30]}>
                  <Button
                    title="LOGIN"
                    testID="loginButton"
                    disabled={loading && !isValid}
                    onPress={handleSubmit}
                    loading={loading}
                  />
                </View>
                {touched.name && errors.name && (
                  <Text style={Styles.errorLabel}>{errors.name}</Text>
                )}
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
}

export default LoginComponent;

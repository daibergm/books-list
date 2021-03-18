import React from 'react';
import { View, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { moderateScale } from 'react-native-size-matters';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

// @Assets
import { GeneralStyles, Colors } from '../../assets/';
import Styles from './styles';

// @Types
import { User } from '../../types/user';
import { AgeDropdownItem } from '../../types/';

// @Components
import { Button, Input, Switch, Text } from '../common';

// @Utils
import { ageGenerator } from '../../utils/';

// @Constants
import { tKeys, testIds } from '../../constants/';

// Variables
const initialValues = {
  name: '',
  lastName: '',
  email: '',
  age: '0',
  termsAndConditions: false,
};

const validationSchema = yup.object().shape({
  name: yup.string().trim().required(tKeys.nameError),
  lastName: yup.string().trim().required(tKeys.lastNameError),
  email: yup.string().required(tKeys.emailError).email(tKeys.emailInvalid),
  age: yup.string().test('required', tKeys.ageError, (val: any) => val !== '0'),
  termsAndConditions: yup.bool().oneOf([true], 'Field must be checked'),
});

interface Props {
  submitFunction: (values: User) => void;
  loading: boolean;
}

const LoginComponent = (props: Props) => {
  const { submitFunction, loading } = props;
  const { t } = useTranslation();

  const onSubmit = (values: User) => submitFunction(values);

  const onHandlerPickerChange = (value: AgeDropdownItem, onChange: any) => {
    onChange({
      target: { value: value.value, name: 'age' },
    });
  };

  const onHandlerSwitchChange = (value: boolean, onChange: any) => {
    onChange({
      target: { value, name: 'termsAndConditions' },
    });
  };

  return (
    <View
      style={[
        GeneralStyles.flex1,
        GeneralStyles.flexRow,
        GeneralStyles.alignCenter,
      ]}>
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
            keyboardShouldPersistTaps="handled">
            <View style={[GeneralStyles.flex1]}>
              <Input
                value={values.name}
                placeholder={t(tKeys.namePlaceholder)}
                errorMessage={
                  touched.name ? t(errors.name as string) : undefined
                }
                onChangeText={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
              />
              <Input
                value={values.lastName}
                placeholder={t(tKeys.lastNamePlaceholder)}
                errorMessage={
                  touched.lastName ? t(errors.lastName as string) : undefined
                }
                onChangeText={handleChange('lastName')}
                onBlur={() => setFieldTouched('lastName')}
              />
              <Input
                value={values.email}
                placeholder={t(tKeys.emailPlaceholder)}
                errorMessage={
                  touched.email ? t(errors.email as string) : undefined
                }
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <DropDownPicker
                labelStyle={[
                  GeneralStyles.defaultFont,
                  GeneralStyles.fontSize16,
                  Styles.pickerLabel,
                ]}
                activeItemStyle={Styles.activeItem}
                items={ageGenerator(t)}
                defaultValue="0"
                containerStyle={Styles.pickerContainerStyle}
                style={[Styles.pickerStyle]}
                dropDownStyle={Styles.pickerDropDown}
                arrowColor={Colors.primary}
                arrowSize={moderateScale(25, 0.3)}
                onChangeItem={(value) =>
                  onHandlerPickerChange(value, handleChange)
                }
              />
              {errors.age && (
                <Text style={Styles.pickerErrorLabel} danger>
                  {t(errors.age)}
                </Text>
              )}
              <View style={GeneralStyles.marginT15}>
                <Switch
                  label={t(tKeys.termsAndConditionsLabel)}
                  value={values.termsAndConditions}
                  onValueChange={(value) =>
                    onHandlerSwitchChange(value, handleChange)
                  }
                />
              </View>
              <View style={[GeneralStyles.marginT30, GeneralStyles.paddingB15]}>
                <Button
                  title={t(tKeys.loginLabel).toUpperCase()}
                  testID={testIds.loginBtn}
                  disabled={loading || !isValid || !dirty}
                  onPress={handleSubmit}
                  loading={loading}
                />
              </View>
            </View>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default LoginComponent;

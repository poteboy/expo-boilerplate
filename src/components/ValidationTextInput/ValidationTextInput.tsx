import React, { FC } from 'react';
import { Input, IInputProps, Box, Text, Pressable, Icon } from 'native-base';
import { FieldValues, Controller, UseControllerProps } from 'react-hook-form';
import { colors } from '@src/styles';

export type ValidationInputProps = IInputProps & UseControllerProps;

export const ValidationTextInput: FC<ValidationInputProps> = ({
  control,
  name,
  rules,
  defaultValue,
  placeholder,
  variant,
  value,
  onChangeText,
  ...styles
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, onBlur }, formState: { errors } }) => {
        const isInValid = errors[name]?.message;
        return (
          <Box width="100%" my={1}>
            <Input
              {...styles}
              {...control?.register(name)}
              variant={variant}
              borderRadius={4}
              placeholder={placeholder}
              value={value}
              fontSize={16}
              isInvalid={isInValid}
              onChangeText={onChangeText}
              onChange={onChange}
            />
            {isInValid && (
              <Text
                mt="8px"
                fontSize="14px"
                color={colors.error}
                alignSelf="flex-start"
                fontWeight="700"
              >
                {errors[name]?.message}
              </Text>
            )}
          </Box>
        );
      }}
    />
  );
};

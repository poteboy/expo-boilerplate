/* eslint-disable no-undef */
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('@sentry/react-native', () => ({ init: () => jest.fn() }));
jest.mock('sentry-expo', () => ({ init: () => jest.fn() }));

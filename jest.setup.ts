/* eslint-disable import/no-extraneous-dependencies */
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import 'jest-enzyme';

configure({
 adapter: new Adapter(),
});

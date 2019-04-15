import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

import ProcessFields from '../src/components/ProcessFields';
import StepFields from '../src/components/StepFields';
import process from '../data/process';
import steps from '../data/steps';


const adapter = new Adapter();
Enzyme.configure({ adapter });


describe('The `Fields` React Components', () => {

    describe('<ProcessFields/> component', () => {
        let processWrapper, shallow;

        before('Create component', () => {
            shallow = createShallow();
        })

        it('renders', () => {
            processWrapper = shallow(<ProcessFields process={process} steps={steps}/>)
        })

    })

    describe('<StepFields/> component', () => {
        let stepWrapper, shallow;

        before('Create component', () => {
            shallow = createShallow();
        })

        it('renders', () => {
            stepWrapper = shallow(<StepFields steps={steps}/>)
        })

    })
})

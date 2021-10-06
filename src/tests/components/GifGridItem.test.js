import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Test for component <GifGridItem />', ()=>{
    test('must display the information correctly', ()=>{

        const wrapper = shallow( <GifGridItem />  );
        expect( wrapper ).toMatchSnapshot();

    })
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import MissionForm from './MissionForm';

describe('MissionForm Tests', ()=>{
    test('render without error', ()=>{
        render(<MissionForm/>);
        
        //Arrange
        //Act
        //Assert
    });

    test('renders message when isFetchingData is true', ()=>{
        
        render(<MissionForm isFetchingData={true}/>)
        screen.getByText(/we are fetching data/i);
        expect(screen.queryByText(/get data/i)).toBeNull();

    })

    test('renders function when isFetchingData is false', ()=>{

        render(<MissionForm isFetchingData={true}/>)

    })

    test('calls getData when button is pressed', ()=>{

        render(<MissionForm isFetchingData={true}/>)

    })


});
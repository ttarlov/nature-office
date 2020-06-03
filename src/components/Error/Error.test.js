import React from 'react';
import { render, getByText, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Error from './Error.jsx';
import { BrowserRouter } from 'react-router-dom'

const mockBackToLogIn = jest.fn()


describe ('Error Component', () => {

 


    it('Render Error Component', () => {
        const { getByText } =  render(
            <BrowserRouter>
                 <Error />
            </BrowserRouter>
        )
    });





}) // <--- Describe Closes Here 
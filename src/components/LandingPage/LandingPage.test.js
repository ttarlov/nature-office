  import React from 'react';
import { render, getByPlaceholderText, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage.jsx'
import { Provider } from 'mobx-react'
// import GlobalStore from '../../store/GlobalStore'
import { observable, action, decorate } from "mobx"

describe('Login Component', () => {

    class GlobalStore {
        title = "test title"
        userName = ''
        userEmail = ''
        zipCode = ''
       isFormCompleted = false;
       loginError = ''

        handleChange = (event) => {
           this[event.target.name] = event.target.value
         }

        validateUser = (event) => {
           this.isFormCompleted = false
           event.preventDefault()

           if (this.userName === '' || this.userEmail === '' || (this.zipCode.length !== 5) ){
             this.loginError = 'Please fill all Inputs'
             console.log("Test Store Login Error", this.loginError);
           } else {
             this.loginError = ''
             this.isFormCompleted = true;

        }
       }

   }


   const DecoratedGlobalStore = decorate(GlobalStore, {
       title: observable,
       userName: observable,
       userEmail: observable,
       zipCode: observable,
       isFormCompleted: observable,
       loginError: observable,
       handleChange: action,
       validateUser: action
   });


   it('should render Landing Component ', () => {
    const globalStore = new DecoratedGlobalStore()

    const { getByText, getByPlaceholderText, debug, getByTestId } = render(
        <Provider GlobalStore= {globalStore}>
        <BrowserRouter>
            <LandingPage />
        </BrowserRouter>
        </Provider>
        )
        debug()
   });




}) //<--- Describe Closes Here

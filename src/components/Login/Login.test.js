import React from 'react';
import { render, getByPlaceholderText, fireEvent, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login.jsx'
import { Provider } from 'mobx-react'
// import GlobalStore from '../../store/GlobalStore'
import { observable, action, decorate } from "mobx"

// afterEach(cleanup);




describe('Login Component', () => {

    class GlobalStore {
        title = "test title"
        userName = 'Chuck'
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

       changeTitle = () => {
           this.title = "new title"
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
       validateUser: action,
       changeTitle: action
   });


    it('should render compenent without errors ', () => {

        const globalStore = new DecoratedGlobalStore()


        const { getByText, getByPlaceholderText, debug } = render(
                    <Provider GlobalStore = {globalStore} >
                    <BrowserRouter>
                        <Login />
                    </BrowserRouter>
                    </Provider>
                    )

        const nameEl = getByPlaceholderText('name')
        expect(nameEl).toBeInTheDocument();

        const emailEl = getByPlaceholderText('email')
        expect(emailEl).toBeInTheDocument()

        const zipEl = getByPlaceholderText('80202')
        expect(zipEl).toBeInTheDocument()

        const loginBtn = getByText('Go!')
        expect(loginBtn).toBeInTheDocument();

        const title = getByText('nature office')
        expect(title).toBeInTheDocument();
    });

    it('Test the Store ', () => {
        const globalStore = new DecoratedGlobalStore()
        globalStore.changeTitle()
        console.log(globalStore.title)

    });



    it('should login user with correct information', async () => {

       const globalStore = new DecoratedGlobalStore()

        const validateUser = jest.fn();
        const handleChange = jest.fn();

        const { getByText, getByPlaceholderText, debug, getByTestId } = render(
            <Provider GlobalStore= {globalStore}>
            <BrowserRouter>
                <Login />
            </BrowserRouter>
            </Provider>
            )

        const nameEl = getByPlaceholderText('name')
        expect(nameEl).toBeInTheDocument();
        const loginBtn = getByText('Go!')
        expect(loginBtn).toBeInTheDocument();


        fireEvent.change(getByPlaceholderText('name'), {target: {value: 'Chuck Norris'}});
        fireEvent.change(getByPlaceholderText('email'), {target: {value: 'norris@aol.com'}});
        fireEvent.change(getByPlaceholderText('80202'), {target: {value: '80202'}});

        fireEvent.click(getByText('Go!'))
        const button = await waitFor(()=> getByText("USER PAGE"))
        fireEvent.click(button)
        expect(getByText('Chuck Norris')).toBeInTheDocument()
        console.log("Test Store");
        // expect(handleChange).toHaveBeenCalled()
        expect(validateUser).toHaveBeenCalled()
        // expect(validateUser).toHaveBeenCalledWith({name: 'Chuck Norris', email: 'norris@aol.com', })

        debug()
    });

    it('should display error message if login inputs are empty', ()=>{

    })







}) //<--- Describe block closes here

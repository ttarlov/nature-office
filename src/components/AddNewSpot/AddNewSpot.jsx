import React from 'react'
import { inject, observer } from 'mobx-react'

const AddNewSpot = inject('GlobalStore')(observer(() => {
//   this.state = {
//     name: '',
//     date: '',
//     time: '',
//     number: ''
//   }
// }
//
// handleChange = (event) => {
//   const { name, value } = event.target
//   this.setState({
//     [name]: value
//   })
//   // this.setState({ [e.target.name]: e.target.value})
// }
//
// submitReservation = (event) => {
//   event.preventDefault();
//   const { addReservation } = this.props;
//   console.log(this.state.guests)
//   const newReservation = { ...this.state, id: Date.now()};
//   addReservation(newReservation);
//   this.resetInputs();
// }
//
// resetInputs = () => {
//   this.setState({
//     name: '',
//     date: '',
//     time: '',
//     number: ''
//   })
// }

  return (
    <section className="login-form-background">
    <h2>Add a new spot!</h2>
    {// <section className="login-form-container">
    // <form className="login-form">
    // <input
    //   type='text'
    //   placeholder='name'
    //   value={this.state.name}
    //   name='name'
    //   onChange={this.handleChange}
    // />
    //   <input
    //     type='date'
    //     placeholder='Date (mm/dd)'
    //     value={this.state.date}
    //     name='date'
    //     onChange={this.handleChange}
    //   />
    //   <input
    //     type='text'
    //     placeholder='Time'
    //     value={this.state.time}
    //     name='time'
    //     onChange={this.handleChange}
    //   />
    //   <input
    //     type= 'number'
    //     placeholder='Number of guests'
    //     value={this.state.number}
    //     name='number'
    //     onChange={this.handleChange}
    //   />
    //   <button
    //     onClick={this.submitReservation}
    //   >
    //     Make Reservation
    //   </button>
    // </form>
    // </section>
  }
    </section>
      )
}))

export default AddNewSpot

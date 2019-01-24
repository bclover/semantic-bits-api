import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      patients: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:9000/patients')
      .then(res => {
        this.setState({ patients: res.data.patients } );
      });
  }

  getPatients() {
    const patients = this.state.patients.map((patient => {
      return (
          <div className="patient">
            <li key={patient.id} className="patient-item">
              <div>
                Patient ID: {patient.id}:
              </div>
              <div>
                First Name: {patient.first_name}
              </div>
              <div>
                Last Name: {patient.last_name}
              </div>
            </li>
          </div>
      );
    }));
    return patients;
  }

  render() {
    return (
        <div className="App">
          <section>
            <ul className="patients-list">
              {this.getPatients()}
            </ul>
          </section>
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contact: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/contacts') //+this.props.match.params.id
      .then(res => {
        this.setState({ contact: res.data });
        console.log(this.state.contact);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/contacts/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Contact Details
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>Lista Futuri Eventi</Link></h4>
            <dl>
              <dt>Nome Locale:</dt>
              <dd>{this.state.contact.name}</dd>
              <dt>Address:</dt>
              <dd>{this.state.contact.address}</dd>
              <dt>City:</dt>
              <dd>{this.state.contact.city}</dd>
              <dt>Phone Number:</dt>
              <dd>{this.state.contact.phone}</dd>
              <dt>Email Address:</dt>
              <dd>{this.state.contact.email}</dd>
            </dl>
            <Link to={`/edit/${this.state.contact.id}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.contact.id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;

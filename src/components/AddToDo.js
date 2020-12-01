import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddToDo extends Component {

    state = {
        title:''
    }

    onChange = (e) => this.setState( {title: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({title: ''});
    };

    render() {
        return (
            <form onSubmit = {this.onSubmit} style = {{display: 'flex'}}>
                <input type = "text" name = "title" placeholder="Add Todo ..." style = {{flex:10,padding:'5px'}} value={this.state.title} onChange={this.onChange}/>
                <input type="submit" value="Submit" className = "btn" style = {{flex:1}}/>
            </form>
        )
    }
}

//PropTypes
AddToDo.propTypes = {
    addToDo: PropTypes.func.isRequired
}

export default AddToDo

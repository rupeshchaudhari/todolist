import React from 'react'
import PropTypes from 'prop-types';

export default function TodoItem(props) {

    const {id,title} = props.todo;

    return (
        <div style = {getStyle(props)}>
            <p>
                <input type="checkbox" onChange={() => props.markComplete(id)}/> {' '}
                {title}
                <button style = {btnStyle} onClick={() => props.delToDo(id)}>x</button>
            </p>
        </div>
    )
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delToDo: PropTypes.func.isRequired
}

const getStyle = (props) => {
    return{
        background: '#f4f4f4',
        padding : '10px',
        borderBottom : '1px #ccc dotted',
        textDecoration : props.todo.completed ? 'line-through' : 'none'
    }
}

const btnStyle = {
        background : '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 9px',
        borderRadius:'50%',
        cursor:'pointer',
        float:'right'
}
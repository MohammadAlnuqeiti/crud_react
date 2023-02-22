import React, { Component } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';



export default class Todolist extends Component {

    constructor(props){
        super(props);

        this.state = {
            lists:[],
        }
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const lists=this.state.lists;
        let list = e.target.list.value;
        lists.push(list)
        this.setState({
            lists: lists,
        })
        console.log(this.state.lists);

    }

  render() {

    // console.log(this.props)
    // let { id } = this.props.match.params; 
    // console.log(id);
      
      
      
      return (
          <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name='list'  />
            <button type='submit'>submit</button>
        </form>
        {/* <form>

            <button type='submit' onClick={this.ProductScreen} >id</button>
        </form> */}
         {this.state.lists.map((ele,index)=>{
                return <p key={index}>{ele}</p> 
            })}
        </div>
    )
  }
}

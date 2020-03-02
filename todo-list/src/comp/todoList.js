import React, {Component} from "react";

class todoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            newItem:"",
            list:[],
            d: new Date()
        }
    }

    updateInput(key,value){
        this.setState({
            [key]:value
        });
    }

    addItem(){
        const newItem ={
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        }
        const list = [...this.state.list];
        list.push(newItem);
        
        this.setState({
            newItem:"",
            list
        });
    }
    deleteItem(id){
        console.log("delete");
        const list =[...this.state.list];
        const updatedList = list.filter(item => item.id !== id);
        console.log(updatedList);
        this.setState({
            list:updatedList
        });
    }
    

    render(){
        return(
            <div>
                <input type="text"
                       placeholder="Type Task"
                       value = {this.state.newItem}
                       onChange ={e=>this.updateInput("newItem", e.target.value)}
                />
                <button onClick={() => this.addItem()}> Add Item</button>
                
                <br/>
                <ul>
                    {this.state.list.map(item =>{
                        return(
                            <li key={item.id}>
                                   {item.value} 
                                   <button onClick={() => this.deleteItem(item.id)}> Delete Item</button>
                            </li>
                        )
                    })}
                    
                </ul>
           </div>
        )
    }

}

export default todoList;

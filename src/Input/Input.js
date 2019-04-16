import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './Input.css';

class Input extends Component {

    constructor(props){
        super(props);
        this.state = {
            nome: '',
            idade: '',
        }
    }

    handleChange = (id) => event => {
        this.setState({[id]: event.target.value});
    }

    handleClick = () => {
        const {onClick} = this.props;
        const {nome, idade} = this.state;
        onClick(nome, idade);

    }

    render() {
        return (
        <div className="Input">
            <TextField id="nome" label="Nome" value={this.state.nome} onChange={this.handleChange('nome')}/>
            <TextField id="idade" label="Idade" value={this.state.idade} onChange={this.handleChange('idade')} />
            <Button onClick={this.handleClick}>Salvar</Button>
        </div>
        );
    }
}

// const input = () => {
//     return "hello world";
// };

export default Input;


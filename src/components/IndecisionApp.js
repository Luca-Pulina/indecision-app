import React from 'react'

import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this)
        this.state = {
            options: props.options,
            selectedOption: undefined
        }
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This item alredy exists'
        }

        this.setState((prevState) => (
            {
                options: prevState.options.concat([option])
            }
        ))
    }

    handleDeleteOptions() {
        this.setState(
            {
                options: []
            }
        )
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => (
            {
                options: prevState.options.filter((option)=> {
                    return option !== optionToRemove
                })
            }
        ))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(() => (
            {selectedOption : option}
            ))
    }

    handleClearSelectedOption() {
        this.setState(()=> (
            {
                selectedOption: undefined
            }
        ))
    }

    render() {
        const title = "Indecision App"
        const subTitle = "Put your life in the hands of a computer"
        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <div className="container">
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} />
                <div className="widget">
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} 
                    handleDeleteOption={this.handleDeleteOption} />
                <AddOption handleAddOption={this.handleAddOption} />
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption= {this.handleClearSelectedOption}
                />
                </div>

                </div>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: [

    ]
}
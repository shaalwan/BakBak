import React, {Component} from 'react';
import './ChatInput.scss';

class ChatInput extends Component{
  render(){
    return(
      <div className='ChatInut'>
        <input onKeyDown={this.props.send}/>
      </div>
    );
  }
}

export default ChatInput;
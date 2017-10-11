import React, {h} from 'react';
import classNames from 'classnames';

class Input extends React.Component {
  getClassName = () => {
    const {className} = this.props;
    return classNames('cc-input', className);
  };
  onChange = (e) => {
    const {onChange} = this.props;
    this.setState({value: e.target.value}, () => {
      (typeof onChange === 'function') && onChange(this.state.value);
    });
  };
  render() {
    const {value = ''} = this.state;
    const props = {
      className: this.getClassName(),
      value,
      onChange: this.onChange
    };
    return (
      <input {...props} />
    )
  }
}

export default Input;

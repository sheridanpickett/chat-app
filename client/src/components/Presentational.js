import React from 'react';

class Presentational extends React.Component {
  state = {
    value: ''
  }

  updateValue = e => {
    this.setState({value: e.target.value});
  }

  render () {
    const { name, onClick } = this.props;
    return (
      <div>
        <form>
          <input type="text" value={this.state.value} onChange={this.updateValue} />
          <button onClick={e => {
            e.preventDefault();
            onClick(this.state.value);
          }}/>
        </form>
        {name}
      </div>
    )
  }
}

export default Presentational;

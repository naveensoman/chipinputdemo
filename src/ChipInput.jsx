//Primary Chip Component

import React, { Component } from 'react'
import Chips from './Chips'
import CustomChip from './CustomChip'

const data = [
  {name: 'Adam', image: 'https://picsum.photos/200'},
  {name: 'John', image: 'https://picsum.photos/200/?' },
  {name: 'May', image: 'https://picsum.photos/200/?1' },
  {name: 'Suresh', image: 'https://picsum.photos/200/?2' },
  {name: 'Manoj', image: 'https://picsum.photos/200/?3' },
  {name: 'Akbar', image: 'https://picsum.photos/200/?4' },
  {name: 'Mohammed', image: 'https://picsum.photos/200/?5' },
  {name: 'Yee Wong', image: 'https://picsum.photos/200/?6' },
  {name: 'Zee Zee Top', image: 'https://picsum.photos/200/?7' },
];

class ChipInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: []
    }
  }

  onChange = value => {
    this.setState({ value });
  }

  render() {
    return (
      <Chips
        value={this.state.value}
        onChange={this.onChange}
        placeholder="Type a Name"
      	suggestions={data}
        renderChip={(item) => (
          <CustomChip image={item.image}>{item.name}</CustomChip>
        )}
        fromSuggestionsOnly={true}
        renderSuggestion={(item, { query }) => (
          <div
            style={style}
            key={item.name}>
            <img src={item.image} width={24} height={24} style={{margin: 5}}/>{item.name}
          </div>
        )}
        suggestionsFilter={(opt, val) => (
          opt.name.toLowerCase().indexOf(val.toLowerCase()) !== -1
        )}
        getSuggestionValue={suggestion => suggestion.name}
        shouldRenderSuggestions={value => value.length >= 0}

      	/>
    );
  }
}

const style = {
  display: "flex",
  alignItems: "center",
  padding: '2px 7px',
}

export default ChipInput;

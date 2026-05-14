import React from 'react';

const justiceOptions = ['auto', 'start', 'center', 'end'];
const alignOptions = ['auto', 'start', 'center', 'end', 'stretch'];

function FlexBoxItem({color = 'red', text = 'RED'}) {
  const [flexing, setFlexing] = React.useState(false);
  const [alignSelf, setAlignSelf] = React.useState('auto');
  const [justifySelf, setJustifySelf] = React.useState('auto');

  const handleClick = () => {
    setFlexing((value) => !value);
  };

  const handleAlign = (event) => {
    event.target.dataset.count = Number(event.target.dataset.count) + 1;
    setAlignSelf(alignOptions[event.target.dataset.count % 5]);
  };

  const handleJustice = (event) => {
    event.target.dataset.count = Number(event.target.dataset.count) + 1;
    setJustifySelf(justiceOptions[event.target.dataset.count % 4]);
  };

  const flexBoxItemStyle = {border: '3px solid ' + color, padding: '3px', justifySelf};
  
  if (flexing) {
    flexBoxItemStyle.flex = 1;
  }

  return (
    <div style={flexBoxItemStyle}>
      <button onClick={handleClick}>
        {flexing ? 'unflex' : 'flex'}
      </button>

      <button onClick={handleJustice} data-count="0">justify-self: {justifySelf}</button>
      <button onClick={handleAlign} data-count="0">align-self: {alignSelf}</button>

      <span>{text}</span>
    </div>
  );
}

export default {
  args: {
    flexDirection: 'row',
    alignContent: 'normal',
    alignItems: 'normal',
    justifyContent: 'normal',
    justifyItems: 'normal',
  },
  argTypes: {
    flexDirection: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse']
    },
    alignContent: {
      control: 'select',
      options: ['normal', 'start', 'center', 'end', 'flex-start', 'flex-end', 'baseline', 'first baseline', 'last baseline', 'space-between', 'space-around', 'space-evenly', 'stretch']
    },
    alignItems: {
      control: 'select',
      options: ['normal', 'start', 'center', 'end', 'flex-start', 'flex-end', 'baseline', 'first baseline', 'last baseline', 'space-between', 'space-around', 'space-evenly', 'stretch']
    },
    justifyContent: {
      control: 'select',
      options: ['normal', 'start', 'center', 'end', 'flex-start', 'flex-end', 'left', 'right', 'space-between', 'space-around', 'space-evenly', 'stretch', 'safe center', 'unsafe center']
    },
    justifyItems: {
      control: 'select',
      options: ['normal', 'start', 'center', 'end', 'flex-start', 'flex-end', 'left', 'right', 'baseline', 'first baseline', 'last baseline', 'space-between', 'space-around', 'space-evenly', 'stretch', 'safe center', 'unsafe center']
    }
  }
};

export const FlexExample = {
  render: (props) => {
    const containerStyle = {
      padding: '3px',
      border: '3px solid black',
      display: 'flex',
      height: '300px',
      ...props
    };

    return (
      <div style={containerStyle}>
        <FlexBoxItem color="red" text="RED" />
        <FlexBoxItem color="green" text="GREEN" />
        <FlexBoxItem color="blue" text="BLUE" />
      </div>
    );
  }
}
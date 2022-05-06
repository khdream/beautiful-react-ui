### Basic Usage

The `Select` component is a controlled component that requires an array of options and the `onChange` handler.

The `value` prop defines the component's selected option.

```jsx
import { Select } from 'beautiful-react-ui';

const options = [
  { label: '😎 Sunglasses dude', value: 'option1' },
  { label: '😘 Loving pal', value: 'option2' },
  { label: '🖤 Blackpool magic', value: 'option3' },
  { label: '😬 Dental adv mate', value: 'option4' }
];

const UncontrolledSelect = (props) => {
  const [selected, setSelected] = React.useState();
    
  return <Select {...props} onChange={(item) => setSelected(item)} value={selected} />
}

<UncontrolledSelect options={options} />
```

### Filtrable list

To filter the options by showing a filtering input within the dropdown set the `filtrable` prop to `true`.
It is even possible to add a custom filter placeholder using the `filterInputPlaceholder` and a 'no results' message using the `filterNoResultLabel` prop.

```jsx
import { Select } from 'beautiful-react-ui';

const options = [
  { label: '😎 Sunglasses dude', value: 'option1' },
  { label: '😘 Loving pal', value: 'option2' },
  { label: '🖤 Blackpool magic', value: 'option3' },
  { label: '😬 Dental adv mate', value: 'option4' }
];

const UncontrolledSelect = (props) => {
  const [selected, setSelected] = React.useState();
    
  return <Select {...props} onChange={(item) => setSelected(item)} value={selected} />
}

<>
  <UncontrolledSelect options={options} filtrable />
  <UncontrolledSelect options={options} filtrable filterInputPlaceholder="custom filter placeholder" />
  <UncontrolledSelect options={options} filtrable filterNoResultLabel="no result found" />
</>
```

### Help Text

It's possible to show a help text giving further information right under the select
by setting a `helpText` prop.

```jsx
import { Select } from 'beautiful-react-ui';

const options = [
  { label: '😎 Sunglasses dude', value: 'option1' },
  { label: '😘 Loving pal', value: 'option2' },
  { label: '🖤 Blackpool magic', value: 'option3' },
  { label: '😬 Dental adv mate', value: 'option4' }
];

const UncontrolledSelect = (props) => {
  const [selected, setSelected] = React.useState();
    
  return <Select {...props} onChange={(item) => setSelected(item)} value={selected} />
}

<UncontrolledSelect options={options} helpText="open the dropdown list and select an option" />
```

### Placeholder

It is possible to add a `placeholder` prop to show text into the Select component.

```jsx
import { Select } from 'beautiful-react-ui';

const options = [
  { label: '😎 Sunglasses dude', value: 'option1' },
  { label: '😘 Loving pal', value: 'option2' },
  { label: '🖤 Blackpool magic', value: 'option3' },
  { label: '😬 Dental adv mate', value: 'option4' }
];

const UncontrolledSelect = (props) => {
  const [selected, setSelected] = React.useState();
    
  return <Select {...props} onChange={(item) => setSelected(item)} value={selected} />
}

<>
  <UncontrolledSelect options={options} placeholder="click to open the dropdown" />
</>
```

### Clearable

It's possible to hide the clearable icon by setting the `clearable` prop to false

```jsx
import { Select } from 'beautiful-react-ui';

const options = [
  { label: '😎 Sunglasses dude', value: 'option1' },
  { label: '😘 Loving pal', value: 'option2' },
  { label: '🖤 Blackpool magic', value: 'option3' },
  { label: '😬 Dental adv mate', value: 'option4' }
];

const UncontrolledSelect = (props) => {
  const [selected, setSelected] = React.useState();
    
  return <Select {...props} onChange={(item) => setSelected(item)} value={selected} />
}

<UncontrolledSelect options={options} clearable={false} />
```

### Grouping options

It is possible to provide an array of options grouped by a given name. 

```jsx
import { Select } from 'beautiful-react-ui';

const options = [
  {
    name: 'Italian food', 
    options: [
      { label: '🍋 Sicilian Lemon', value: 'lemon' },
      { label: '🍕 True italian Pizza', value: 'pizza' },
      { label: '🍝 Spaghetti', value: 'sushi' },
    ],
  },
  {
    name: 'Animals', 
    options: [
      { label: '🐶 Good boy', value: 'dog' },
      { label: '🐱 Catto', value: 'cat' },
      { label: '🐠 Slippy pal', value: 'fish' },
    ],
   },
];

const UncontrolledSelect = (props) => {
  const [selected, setSelected] = React.useState();
    
  return <Select {...props} onChange={(item) => setSelected(item)} value={selected} />
}

<UncontrolledSelect options={options} />
```

### Multiple values
In order to have the chance to select more values per time, it is necessary to define an onChange function that will set the internal component state to have an array of values instead of one value per time.

```jsx
import { Select } from 'beautiful-react-ui';

const options = [
  { label: '😎 Sunglasses dude', value: 'option1' },
  { label: '😘 Loving pal', value: 'option2' },
  { label: '🖤 Blackpool magic', value: 'option3' },
  { label: '😬 Dental adv mate', value: 'option4' }
];

const UncontrolledSelect = (props) => {
  const [selected, setSelected] = React.useState([]);
    
  const handleChange = (value) => {
    let nextValues;
    
    if(!value) return setSelected([]);  
  
    if(selected.includes(value)) {
      nextValues = [...selected]; 
      nextValues.splice(selected.indexOf(value), 1)
    } else {
      nextValues = [value, ...selected];
    }
    
    setSelected(nextValues);
  }
    
  return <Select {...props} onChange={handleChange} value={selected} />
}

<UncontrolledSelect options={options} />
```

### Multiple selection style

When is possible to select multiple values, it is possible to show them as a string or pill using `multiStyle` prop.
`multiStyle` prop is set to pill by design.

```jsx
import { Select } from 'beautiful-react-ui';

const options = [
  { label: '😎 Sunglasses dude', value: 'option1' },
  { label: '😘 Loving pal', value: 'option2' },
  { label: '🖤 Blackpool magic', value: 'option3' },
  { label: '😬 Dental adv mate', value: 'option4' }
];

const UncontrolledSelect = (props) => {
  const [selected, setSelected] = React.useState([]);
    
  const handleChange = (value) => {
    let nextValues;
    
    if(!value) return setSelected([]);  
  
    if(selected.includes(value)) {
      nextValues = [...selected]; 
      nextValues.splice(selected.indexOf(value), 1)
    } else {
      nextValues = [value, ...selected];
    }
    
    setSelected(nextValues);
  }
    
  return <Select {...props} onChange={handleChange} value={selected} />
}

<>
  <UncontrolledSelect options={options} />
  <UncontrolledSelect options={options} multiStyle="string"/>
</>
```

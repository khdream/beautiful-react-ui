### Basic usage

```jsx 
import { List } from 'beautiful-react-ui';

<List>
  <List.Item>Item 1</List.Item>
  <List.Item>Item 2</List.Item>
  <List.Item>Item 3</List.Item>
</List>
```

### Borders

```jsx 
import { List } from 'beautiful-react-ui';

<List bordered>
  <List.Item>Item 1</List.Item>
  <List.Item>Item 2</List.Item>
  <List.Item>Item 3</List.Item>
</List>
```

### Selectable

```jsx 
import { List } from 'beautiful-react-ui';

const SelectableList = () => {
  const [firstValue, setFirstValue] = React.useState(false);
  const [secondValue, setSecondValue] = React.useState(false);
  const [thirdValue, setThirdValue] = React.useState(false);

  const makeHandler = (method) => (event, value) => method(value);

  return (
    <List>
      <List.Item checkbox value={firstValue} onChange={makeHandler(setFirstValue)}>Item 1</List.Item>
      <List.Item checkbox value={secondValue} onChange={makeHandler(setSecondValue)}>Item 2</List.Item>
      <List.Item checkbox value={thirdValue} onChange={makeHandler(setThirdValue)}>Item 3</List.Item>
    </List>
  );
}


<SelectableList />
```

### Colors

```jsx 
import { List, Divider } from 'beautiful-react-ui';

const SelectableList = (props) => {
  const [firstValue, setFirstValue] = React.useState(false);
  const [secondValue, setSecondValue] = React.useState(false);
  const [thirdValue, setThirdValue] = React.useState(false);

  const makeHandler = (method) => (event, value) => method(value);

  return (
    <List {...props}>
      <List.Item checkbox value={firstValue} onChange={makeHandler(setFirstValue)}>Item 1</List.Item>
      <List.Item checkbox value={secondValue} onChange={makeHandler(setSecondValue)}>Item 2</List.Item>
      <List.Item checkbox value={thirdValue} onChange={makeHandler(setThirdValue)}>Item 3</List.Item>
    </List>
  );
}

<>
  <SelectableList color="primary" />
  <Divider line="dotted" />
  <SelectableList color="secondary" />
  <Divider line="dotted" />
  <SelectableList color="info" />
  <Divider line="dotted" />
  <SelectableList color="success" />
  <Divider line="dotted" />
  <SelectableList color="warning" />
  <Divider line="dotted" />
  <SelectableList color="danger" />
</>
```

### Single items colors

```jsx 
<List>
  <List.Item color="primary" checkbox value>Item 1</List.Item>
  <List.Item color="secondary" checkbox value>Item 2</List.Item>
  <List.Item color="info" checkbox value>Item 3</List.Item>
</List>
```

### Icons

```jsx 
<List>
  <List.Item icon="camera-retro" color="primary">Camera</List.Item>
  <List.Item icon="compact-disc" color="success">Compact Disc</List.Item>
  <List.Item icon="couch" color="info">Couch</List.Item>
</List>
```

### Nested

```jsx 
import { List, Title, Paragraph } from 'beautiful-react-ui';

<List condensed>
  <List.Item icon="folder">
    <Paragraph>Documents</Paragraph>
    <Paragraph tiny light>12Mb</Paragraph>
  </List.Item>
  <List.Item icon="folder">
    <Paragraph>Work</Paragraph>
    <Paragraph tiny light>542Mb</Paragraph>
  </List.Item>
  <List.Item icon="folder-open">
    <Paragraph>Photos</Paragraph>
    <Paragraph tiny light>9Mb</Paragraph>
    <List>
      <List.Item icon="file-image">
        <Paragraph>The Shard</Paragraph>
        <Paragraph tiny light>2Mb</Paragraph>
      </List.Item>
      <List.Item icon="file-image">
        <Paragraph>Victoria Park</Paragraph>
        <Paragraph tiny light>4Mb</Paragraph>
      </List.Item>
      <List.Item icon="file-image">
        <Paragraph>London Eye</Paragraph>
        <Paragraph tiny light>3Mb</Paragraph>
      </List.Item>
      <List.Item icon="folder-open">
        <Paragraph>Portraits</Paragraph>
        <Paragraph tiny light>3Mb</Paragraph>
        <List>
          <List.Item icon="file-image">
            <Paragraph>Juliet</Paragraph>
            <Paragraph tiny light>3.1Mb</Paragraph>
          </List.Item>
          <List.Item icon="file-image">
            <Paragraph>Annabelle</Paragraph>
            <Paragraph tiny light>1.87Mb</Paragraph>
          </List.Item>
        </List>
      </List.Item>
    </List>
  </List.Item>
</List>
```

### Condensed

```jsx 
import { List, Title, Paragraph } from 'beautiful-react-ui';

<List condensed>
  <List.Item icon="folder">
    Applications
  </List.Item>
  <List.Item icon="folder-open">
    Documents
    <List>
      <List.Item icon="file-word">
        Taxes
      </List.Item>
      <List.Item icon="file-word">
        Refunds
      </List.Item>
    </List>
  </List.Item>
</List>
```

### Draggable

```jsx 
import { List } from 'beautiful-react-ui';

<List>
  <List.Item draggable>Item 1</List.Item>
  <List.Item draggable>Item 2</List.Item>
  <List.Item draggable>Item 3</List.Item>
</List>
```

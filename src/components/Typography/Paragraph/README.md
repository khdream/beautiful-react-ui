### Basic usage

```jsx
import { Paragraph } from 'beautiful-react-ui';

<Paragraph>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Vivamus vitae interdum urna, vel porta neque. 
  <strong>Curabitur placerat pretium</strong> lectus id laoreet.
  Aliquam vitae consequat lectus. Vestibulum non libero urna. 
  Phasellus sodales libero risus, ac rhoncus tellus imperdiet ut. 
  Curabitur mauris urna, <i>commodo in dolor vitae, scelerisque varius nisl. 
  Cras</i> a libero dolor. Nam ut mauris nulla. Donec sit amet pharetra turpis, 
  sit amet iaculis nunc. Sed dapibus purus vitae justo interdum imperdiet. 
  In volutpat turpis sed nisl scelerisque, eu congue urna bibendum. 
  Nunc lobortis diam nec elementum finibus. Mauris sagittis tempor hendrerit.
</Paragraph>
```

### Font Family

```jsx
import { Paragraph, Divider } from 'beautiful-react-ui';

<>
  <Paragraph fontFamily="sans">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Vivamus vitae interdum urna, vel porta neque.
    Curabitur placerat pretium lectus id laoreet. 
  </Paragraph>
  <Divider line="dotted" />
  <Paragraph fontFamily="serif">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Vivamus vitae interdum urna, vel porta neque.
    Curabitur placerat pretium lectus id laoreet. 
  </Paragraph>
  <Divider line="dotted" />
  <Paragraph fontFamily="mono">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Vivamus vitae interdum urna, vel porta neque.
    Curabitur placerat pretium lectus id laoreet. 
  </Paragraph>
</>
```

### Color

```jsx
import { Paragraph } from 'beautiful-react-ui';

<>
  <Paragraph color="default">Lorem ipsum dolor sit amet</Paragraph>
  <Paragraph color="primary">Lorem ipsum dolor sit amet</Paragraph>
  <Paragraph color="secondary">Lorem ipsum dolor sit amet</Paragraph>
  <Paragraph color="info">Lorem ipsum dolor sit amet</Paragraph>
  <Paragraph color="success">Lorem ipsum dolor sit amet</Paragraph>
  <Paragraph color="warning">Lorem ipsum dolor sit amet</Paragraph>
  <Paragraph color="danger">Lorem ipsum dolor sit amet</Paragraph>
</>
```

### Text align

```jsx
import { Paragraph, Divider } from 'beautiful-react-ui';

<>
  <Paragraph textAlign="left">Lorem ipsum dolor sit amet</Paragraph>
  <Divider line="dotted" />
  <Paragraph textAlign="center">Lorem ipsum dolor sit amet</Paragraph>
  <Divider line="dotted" />
  <Paragraph textAlign="right">Lorem ipsum dolor sit amet</Paragraph>
</>
```

### Word break

```jsx
import { Paragraph, Divider } from 'beautiful-react-ui';

<>
  <Paragraph wordBreak="normal" style={{ maxWidth: '20rem', background: '#edf2f7', padding: '1rem' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vivamus vitae interdum urna, vel porta neque. 
    With a very looooooooooooooooooooooooooooooooooooooooooooooooooong word
  </Paragraph>
  <Divider line="dotted" />
  <Paragraph wordBreak="words" style={{ maxWidth: '20rem', background: '#edf2f7', padding: '1rem' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vivamus vitae interdum urna, vel porta neque. 
    With a very looooooooooooooooooooooooooooooooooooooooooooooooooong word
  </Paragraph>
  <Divider line="dotted" />
  <Paragraph wordBreak="all" style={{ maxWidth: '20rem', background: '#edf2f7', padding: '1rem' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vivamus vitae interdum urna, vel porta neque.
    With a very looooooooooooooooooooooooooooooooooooooooooooooooooong word
  </Paragraph>
  <Divider line="dotted" />
  <Paragraph wordBreak="truncate" style={{ maxWidth: '20rem', background: '#edf2f7', padding: '1rem' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vivamus vitae interdum urna, vel porta neque. 
    With a very looooooooooooooooooooooooooooooooooooooooooooooooooong word
  </Paragraph>
</>
```

### Tiny

```jsx
import { Paragraph } from 'beautiful-react-ui';

<Paragraph tiny>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Vivamus vitae interdum urna, vel porta neque. 
</Paragraph>  
```

### Light

```jsx
import { Paragraph } from 'beautiful-react-ui';

<Paragraph light>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Vivamus vitae interdum urna, vel porta neque. 
</Paragraph>
```

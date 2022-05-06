### ✅ Basic usage

```jsx
import { Card, Avatar, Paragraph } from 'beautiful-react-ui';

<Card>
  <Card.Image src="https://placeimg.com/460/250/nature" alt="A stunning title" />
  <Card.Title> 
    Pride and Prejudice
  </Card.Title>
  <Card.Content> 
    <Paragraph>
      Vanity and pride are different things, though the words are often used synonymously. 
      A person may be proud without being vain. Pride relates more to our opinion of ourselves, vanity to what we would have others think of us.
    </Paragraph> 
  </Card.Content>
  <Card.Footer> 
    <Avatar src="https://placeimg.com/96/96/people" displayName="Jane Austen" size="small" state="online" /> 
  </Card.Footer>
</Card>
```

### Fluid

The `fluid` prop will adapt the Card's width to its container.

```jsx
import { Card, Avatar, Paragraph } from 'beautiful-react-ui';

<Card fluid>
  <Card.Image src="https://placeimg.com/1024/300/nature" alt="A stunning title" />
  <Card.Title> 
    The creature
  </Card.Title>
  <Card.Content> 
    <Paragraph>
      Even broken in spirit as he is, no one can feel more deeply than he does the beauties of nature. The starry sky, the sea, and every sight afforded by these wonderful regions, seems still to have the power of elevating his soul from earth. Such a man has a double existence: he may suffer misery, and be overwhelmed by disappointments; yet, when he has retired into himself, he will be like a celestial spirit that has a halo around him, within whose circle no grief or folly ventures.
    </Paragraph> 
  </Card.Content>
  <Card.Footer> 
    <Avatar src="https://placeimg.com/120/120/people" displayName="Mary Shelley" size="small" state="online" /> 
  </Card.Footer>
</Card>
```

### Text align

the `textAlign` prop is a valid prop for both Card component and its children, except for `Card.Image`, 
it allows to horizontally align the text.

```jsx
import { Card, Avatar, Paragraph } from 'beautiful-react-ui';

<Card textAlign="right">
  <Card.Image src="https://placeimg.com/460/250/nature" alt="A stunning title" />
  <Card.Title> 
    Pride and Prejudice
  </Card.Title>
  <Card.Content> 
    <Paragraph>
      Vanity and pride are different things, though the words are often used synonymously. 
      A person may be proud without being vain. Pride relates more to our opinion of ourselves, vanity to what we would have others think of us.
    </Paragraph> 
  </Card.Content>
  <Card.Footer textAlign="left"> 
    <Avatar src="https://placeimg.com/96/96/people" displayName="Jane Austen" size="small" state="online" /> 
  </Card.Footer>
</Card>
```

### Orientation

The `orientation` prop defines the card's orientation, by default is set the `vertical`.

```jsx
import { Card, Pill, Paragraph } from 'beautiful-react-ui';

<Card orientation="horizontal">
  <Card.Image src="https://placeimg.com/150/300/nature" alt="A stunning title" />
  <Card.Title> 
    The creature
  </Card.Title>
  <Card.Content> 
    <Paragraph>
      Even broken in spirit as he is, no one can feel more deeply than he does the beauties of nature. The starry sky, the sea, and every sight afforded by these wonderful regions, seems still to have the power of elevating his soul from earth. Such a man has a double existence: he may suffer misery, and be overwhelmed by disappointments; yet, when he has retired into himself, he will be like a celestial spirit that has a halo around him, within whose circle no grief or folly ventures.
    </Paragraph> 
  </Card.Content>
  <Card.Footer> 
    <Pill color="info">#ghotic</Pill> 
    <Pill color="info">#novel</Pill>
    <Pill color="info">#english</Pill>
    <Pill color="info">#litterature</Pill>
  </Card.Footer>
</Card>
```

### Loading

By setting the `loading` prop to `true`, an overlapping opaque layer with a Spinner in the middle will appear

```jsx
import { Card, Avatar, Paragraph } from 'beautiful-react-ui';

<Card loading>
  <Card.Image src="https://placeimg.com/460/250/nature" alt="A stunning title" />
  <Card.Title> 
    Pride and Prejudice
  </Card.Title>
  <Card.Content> 
    <Paragraph>
      Vanity and pride are different things, though the words are often used synonymously. 
      A person may be proud without being vain. Pride relates more to our opinion of ourselves, vanity to what we would have others think of us.
    </Paragraph> 
  </Card.Content>
  <Card.Footer> 
    <Avatar src="https://placeimg.com/96/96/people" displayName="Jane Austen" size="small" state="online" /> 
  </Card.Footer>
</Card>
```

### Float animation

By setting the `float` prop to `true` the card will float up a bit on mouse hover

```jsx
import { Card, Avatar, Paragraph } from 'beautiful-react-ui';

<Card float>
  <Card.Image src="https://placeimg.com/460/250/nature" alt="A stunning title" />
  <Card.Title> 
    Pride and Prejudice
  </Card.Title>
  <Card.Content> 
    <Paragraph>
      Vanity and pride are different things, though the words are often used synonymously. 
      A person may be proud without being vain. Pride relates more to our opinion of ourselves, vanity to what we would have others think of us.
    </Paragraph> 
  </Card.Content>
  <Card.Footer> 
    <Avatar src="https://placeimg.com/96/96/people" displayName="Jane Austen" size="small" state="online" /> 
  </Card.Footer>
</Card>
```


### Reversed

The `reversed` prop flips the Card.Image position both from left to right or from top to bottom, according to the
defined orientation.

```jsx
import { Card, Pill, Paragraph, Icon } from 'beautiful-react-ui';

<Card orientation="horizontal" reversed>
  <Card.Image src="https://placeimg.com/150/300/nature" alt="A stunning title" />
  <Card.Title> 
    The creature
  </Card.Title>
  <Card.Content> 
    <Paragraph>
      Even broken in spirit as he is, no one can feel more deeply than he does the beauties of nature. The starry sky, the sea, and every sight afforded by these wonderful regions, seems still to have the power of elevating his soul from earth. Such a man has a double existence: he may suffer misery, and be overwhelmed by disappointments; yet, when he has retired into himself, he will be like a celestial spirit that has a halo around him, within whose circle no grief or folly ventures.
    </Paragraph> 
  </Card.Content>
  <Card.Footer> 
    <Pill color="info">#ghotic</Pill> 
    <Pill color="info">#novel</Pill>
    <Pill color="info">#english</Pill>
    <Pill color="info">#litterature</Pill>
  </Card.Footer>
</Card>
```

### Action Button

The `actionButton` prop shows a menu-like icon to the top right corner of the card, 
whilst the `onActionButtonClick` prop defines the function to be performed when clicked.

```jsx
import { Card, Avatar, Paragraph } from 'beautiful-react-ui';

<Card actionButton onActionButtonClick={() => alert('Button clicked')}>
  <Card.Image src="https://placeimg.com/460/250/nature" alt="A stunning title" />
  <Card.Title> 
    Pride and Prejudice
  </Card.Title>
  <Card.Content> 
    <Paragraph>
      Vanity and pride are different things, though the words are often used synonymously. 
      A person may be proud without being vain. Pride relates more to our opinion of ourselves, vanity to what we would have others think of us.
    </Paragraph> 
  </Card.Content>
  <Card.Footer> 
    <Avatar src="https://placeimg.com/96/96/people" displayName="Jane Austen" size="small" state="online" /> 
  </Card.Footer>
</Card>
```

### Action Button Icon

The `actionButtonIcon` prop allows to override the default action button's icon.

```jsx
import { Card, Avatar, Paragraph } from 'beautiful-react-ui';

<Card orientation="horizontal" actionButton actionButtonIcon="heart" onActionButtonClick={() => alert('Button clicked')}>
  <Card.Image src="https://placeimg.com/150/300/nature" alt="A stunning title" />
  <Card.Title> 
    The creature
  </Card.Title>
  <Card.Content> 
    <Paragraph>
      Even broken in spirit as he is, no one can feel more deeply than he does the beauties of nature. The starry sky, the sea, and every sight afforded by these wonderful regions, seems still to have the power of elevating his soul from earth. Such a man has a double existence: he may suffer misery, and be overwhelmed by disappointments; yet, when he has retired into himself, he will be like a celestial spirit that has a halo around him, within whose circle no grief or folly ventures.
    </Paragraph> 
  </Card.Content>
  <Card.Footer> 
    <Avatar src="https://placeimg.com/96/96/people" displayName="Mary Shelley" size="small" state="online" /> 
  </Card.Footer>
</Card>
```

### Renders

The Card component comes with a set of renderers to override the standard behaviour:

#### Action button renderer

If defined, an `actionButtonRenderer` prop will change the default actionButton behaviour.

```jsx
import { Icon, Button, Avatar, Paragraph } from 'beautiful-react-ui';

CustomRenderer = () => [
  <Button icon="envelope" color="primary">Mail</Button>,
  <Button icon="heart" color="primary" />
];

<Card actionButton actionButtonRenderer={CustomRenderer}>
  <Card.Image src="https://placeimg.com/460/250" alt="A stunning title" />
  <Card.Title> 
    Pride and Prejudice
  </Card.Title>
  <Card.Content> 
    <Paragraph>
      Vanity and pride are different things, though the words are often used synonymously. 
      A person may be proud without being vain. Pride relates more to our opinion of ourselves, vanity to what we would have others think of us.
    </Paragraph> 
  </Card.Content>
  <Card.Footer> 
    <Avatar src="https://placeimg.com/96/96/people" displayName="Jane Austen" size="small" state="online" /> 
  </Card.Footer>
</Card>
```

#### Image Renderer

If defined, an `imageRenderer` prop will change the default image behaviour.

```jsx
import { Icon, Button, Avatar, Paragraph } from 'beautiful-react-ui';

CustomRenderer = () => (
  <div class="custom-image-render"> 
    <Button icon="envelope" color="primary">Mail</Button>
    <Button icon="heart" color="primary" />
  </div>
);

<Card imageRenderer={CustomRenderer}>
  <Card.Title> 
    Pride and Prejudice
  </Card.Title>
  <Card.Content> 
    <Paragraph>
      Vanity and pride are different things, though the words are often used synonymously. 
      A person may be proud without being vain. Pride relates more to our opinion of ourselves, vanity to what we would have others think of us.
    </Paragraph> 
  </Card.Content>
  <Card.Footer> 
    <Avatar src="https://placeimg.com/96/96/people" displayName="Jane Austen" size="small" state="online" /> 
  </Card.Footer>
</Card>
```
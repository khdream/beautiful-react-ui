```jsx noeditor 
const style = {
  maxWidth: '100%', 
  minHeight: '2.25rem', 
  height:'100%', 
  padding: '0.85rem', 
  backgroundColor: '#38acff', 
  borderRadius: '5px', 
  boxSizing:'border-box',
  color: 'white',
  textAlign: 'center',
  fontFamily: '"Open Sans", "sans-serif", light'
}

const Content = ({ children, style: customStyle }) => (
   <div style={{ ...style, ...(children === 'auto' ? {backgroundColor: '#A4D9FF'} : null), ...customStyle }}>
      {children || 'Content'}
   </div>
);

window.Content = Content;
```

### Basic usage

A `Grid` component can be used to build layouts based on a 12-columns system.

```jsx
import { Grid } from 'beautiful-react-ui';

<Grid>
  <Grid.Column><Content /></Grid.Column>
  <Grid.Column><Content /></Grid.Column>
  <Grid.Column><Content /></Grid.Column>
</Grid>
```

### Size

It’s possible to define the column by using the `size` prop.

```jsx
import { Grid } from 'beautiful-react-ui';

<>
  <Grid>
    <Grid.Column size="12"><Content>12</Content></Grid.Column>
  </Grid>
  
  <Grid>
    <Grid.Column size="11"><Content>11</Content></Grid.Column>
    <Grid.Column><Content>auto</Content></Grid.Column>
  </Grid>
  
  <Grid>
    <Grid.Column size="10"><Content>10</Content></Grid.Column>
    <Grid.Column><Content>auto</Content></Grid.Column>
  </Grid>
  
  <Grid>
    <Grid.Column size="9"><Content>9</Content></Grid.Column>
    <Grid.Column><Content>auto</Content></Grid.Column>
  </Grid>
  
  <Grid>
    <Grid.Column size="8"><Content>8</Content></Grid.Column>
    <Grid.Column><Content>auto</Content></Grid.Column>
  </Grid>
  
  <Grid>
    <Grid.Column size="7"><Content>7</Content></Grid.Column>
    <Grid.Column><Content>auto</Content></Grid.Column>
  </Grid>
  
  <Grid>
    <Grid.Column size="6"><Content>6</Content></Grid.Column>
    <Grid.Column><Content>auto</Content></Grid.Column>
  </Grid>
  
  <Grid>
    <Grid.Column size="5"><Content>5</Content></Grid.Column>
    <Grid.Column><Content>auto</Content></Grid.Column>
  </Grid>
  
  <Grid>
    <Grid.Column size="4"><Content>4</Content></Grid.Column>
    <Grid.Column><Content>auto</Content></Grid.Column>
  </Grid>
  
  <Grid>
    <Grid.Column size="3"><Content>3</Content></Grid.Column>
    <Grid.Column><Content>auto</Content></Grid.Column>
  </Grid>
  
  <Grid>
    <Grid.Column size="2"><Content>2</Content></Grid.Column>
    <Grid.Column><Content>auto</Content></Grid.Column>
  </Grid>
  
  <Grid>
    <Grid.Column size="1"><Content>1</Content></Grid.Column>
    <Grid.Column><Content>auto</Content></Grid.Column>
  </Grid>
</>
```

### Responsiveness

It’s possible to define the column size accordingly to the screen dimension by using on of the following props: 
`sm`, `md`, `lg`, `xl`.


```jsx
import { Grid } from 'beautiful-react-ui';
 
<Grid>
  <Grid.Column sm="12" md="8" lg="6" xl="3">
    <Content />
  </Grid.Column>
  <Grid.Column sm="12" md="4" lg="6" xl="3">
    <Content />
  </Grid.Column>
  <Grid.Column sm="12" md="8" lg="6" xl="3">
    <Content />
  </Grid.Column>
  <Grid.Column sm="12" md="4" lg="6" xl="3">
    <Content />
  </Grid.Column>
</Grid>
```

If not defined the column will adapt its length accordingly to the other columns. 

As per the following example:

```jsx
import { Grid } from 'beautiful-react-ui';
 
<Grid>
   <Grid.Column sm="12" md="8" lg="6" xl="3">
      <Content />
   </Grid.Column>
   <Grid.Column sm="12">
      <Content />
   </Grid.Column>
</Grid>
```

### Offset

The `offset` prop adds a left padding to the column.
An offset can also be defined accordingly to the screen dimension by using on of the following props: 
`sm`, `md`, `lg`, `xl`.

```jsx 
import { Grid } from 'beautiful-react-ui';

<Grid>
  <Grid.Column offset="3">
    <Content />
  </Grid.Column>
  <Grid.Column offset="2" size="10">
    <Content />
  </Grid.Column>
  <Grid.Column offsetSm="4" sm="8" offsetMd="6" md="6" offsetLg="2" lg="10" offset="1" size="11">
    <Content />
  </Grid.Column>
</Grid>
```

### Grid Items Align

The `itemsAlign` prop could be used to set items in position accordingly to the grid's height.

```jsx 
import { Grid } from 'beautiful-react-ui';

<>
  <Grid itemsAlign="center" style={{background:"#afdeff", borderBottom:"solid white"}}>
     <Grid.Column><Content style={{height: '150px'}} /></Grid.Column>
     <Grid.Column><Content /></Grid.Column>
     <Grid.Column><Content /></Grid.Column>
  </Grid>
  <Grid itemsAlign="end" style={{height: '150px', background:"#afdeff"}}>
     <Grid.Column><Content /></Grid.Column>
     <Grid.Column><Content /></Grid.Column>
     <Grid.Column><Content /></Grid.Column>
  </Grid>
</>
```

### GridColumn Self Align

The `selfAlign` prop could be used to set items in position accordingly to the container's height.


```jsx 
import { Grid } from 'beautiful-react-ui';

<Grid itemsAlign="center" style={{height: '200px', background:'#afdeff', borderBottom:'solid white'}}>
   <Grid.Column selfAlign="stretch"><Content /> </Grid.Column>
   <Grid.Column selfAlign="center"> <Content /> </Grid.Column>
   <Grid.Column selfAlign="end"> <Content /> </Grid.Column>
   <Grid.Column selfAlign="start"> <Content /> </Grid.Column>
   <Grid.Column selfAlign="auto"> <Content /> </Grid.Column>
</Grid>
```

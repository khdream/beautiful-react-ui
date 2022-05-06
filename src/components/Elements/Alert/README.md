### Basic usage

``` jsx
import { Alert } from 'beautiful-react-ui';

<Alert>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Alert>
```

### Alert Colors

Color highlight different alerts.

``` jsx
import { Alert } from 'beautiful-react-ui';

<>
  <Alert color="primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Alert>
  <Alert color="secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Alert>
  <Alert color="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Alert>
  <Alert color="warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Alert>
  <Alert color="danger">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Alert>
  <Alert color="success">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Alert>
</>
```

### Solid brackground

A solid background style variant, with white text and without border.

``` jsx
import { Alert } from 'beautiful-react-ui';

<>
  <Alert color="default" solid="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Alert>
  <Alert color="primary" solid="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Alert>
  <Alert color="secondary" solid="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Alert>
  <Alert color="info" solid="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Alert>
  <Alert color="warning" solid="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Alert>
  <Alert color="danger" solid="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Alert>
  <Alert color="success" solid="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Alert>
</>
```


### Outline

Shows the outlines only.

``` jsx
import { Alert } from 'beautiful-react-ui';

<>
  <Alert color="default" outline="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Alert>
  <Alert color="primary" outline="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Alert>
  <Alert color="secondary" outline="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Alert>
  <Alert color="info" outline="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Alert>
  <Alert color="warning" outline="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Alert>
  <Alert color="danger" outline="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Alert>
  <Alert color="success" outline="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Alert>
</>
```

### Icons

Adding icon to different alert.

``` jsx
import { Alert, Icon } from 'beautiful-react-ui';

<>
  <Alert color="primary" solid="true">
    <Icon name="info-circle" />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </Alert>
  <Alert color="secondary" outline="true">
    <Icon name="heart" />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </Alert>
  <Alert color="info">
    <Icon name="check" />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </Alert>
</>
```

### Closable button

The `onClose` prop if provided shows a closable "X" button that will perform the given prop when clicked.

``` jsx
import { Alert, Button } from 'beautiful-react-ui';

/**
 * UncontrolledAlert is a statefull component wrapping an Alert
 */
const UncontrolledAlert = (props) => {
  const [showAlert, setShowAlert] = React.useState(true);

  return (
    <>
      {showAlert && <Alert {...props} onClose={() => setShowAlert(!showAlert)} />}
      <Button color="primary" disabled={showAlert} onClick={() => setShowAlert(!showAlert)}>
        {showAlert ? 'Alert shown' : 'Show the alert'}
      </Button>
    </>
  );
};

<UncontrolledAlert color="primary">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</UncontrolledAlert>
```

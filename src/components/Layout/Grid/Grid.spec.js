import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Grid from './Grid';


const Content = () => (<div>some content</div>);

describe('Grid component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explode', () => {
    const { container } = render(<Grid><Grid.Column><Content /></Grid.Column></Grid>);

    expect(container).to.exist;
    expect(container.querySelector('.bi.bi-grid')).to.exist;

    const gridComp = container.querySelectorAll('.bi.bi-grid-column').length;

    expect(gridComp).to.equal(1);
  });

  it('shold have default classes', () => {
    const { container } = render(<Grid><Grid.Column><Content /></Grid.Column></Grid>);
    const gridComp = container.querySelector('div');

    expect(gridComp.classList.contains('bi')).to.be.true;
    expect(gridComp.classList.contains('bi-grid')).to.be.true;
  });

  it('should accept an id prop', () => {
    const { container } = render(<Grid id="foo"><Grid.Column><Content /></Grid.Column></Grid>);
    const gridComp = container.querySelector('.bi.bi-grid');

    expect(gridComp.id).to.equal('foo');
  });

  it('should accept custom classes', () => {
    const { container } = render(<Grid className="foo"><Grid.Column><Content /></Grid.Column></Grid>);
    const gridComp = container.querySelector('.bi.bi-grid');

    expect(gridComp.classList.contains('foo')).to.be.true;
  });

  it('should accept custom style', () => {
    const { container } = render(<Grid style={{ margin: '10px' }}><Grid.Column><Content /></Grid.Column></Grid>);
    const gridComp = container.querySelector('.bi.bi-grid');

    expect(gridComp.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should accept an \'itemsAlign\' prop', () => {
    const { container } = render(<Grid itemsAlign="center"><Grid.Column><Content /></Grid.Column></Grid>);
    const gridComp = container.querySelector('.bi.bi-grid');

    expect(gridComp.classList.contains('items-center'));
  });
});

describe('GridColumn component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should accept a \'size\' prop', () => {
    const { container } = render(<Grid><Grid.Column size={6}><Content /></Grid.Column></Grid>);
    const gridComp = container.querySelector('.bi.bi-grid-column');

    expect(gridComp.classList.contains('col-size-6'));
  });

  it('should accept one of the following props: \'sm, md, lg, xl\'', () => {
    const { container } = render(<Grid><Grid.Column sm={6} md={1} lg={7} xl={12}><Content /></Grid.Column></Grid>);
    const gridComp = container.querySelector('.bi.bi-grid-column');

    expect(gridComp.classList.contains('bi-col-sm-6 bi-col-md-1 bi-col-lg-7 bi-col-xl-12'));
  });

  it('should accept \'offset\' and \'offset size\' props', () => {
    const { container } = render(
      <Grid>
        <Grid.Column offsetSm={6} offsetMd={1} offset={3}><Content /></Grid.Column>
      </Grid>,
    );
    const gridComp = container.querySelector('.bi.bi-grid-column');

    expect(gridComp.classList.contains('bi-offset-sm-6 bi-offset-md-1 bi-offset-3'));
  });

  it('should not accept \'size\' \'offset\' or \'offset size\' props bigger than 12', () => {
    const { container } = render(
      <Grid>
        <Grid.Column offsetLg={13} offsetXl={19} offset={33} sm={23}><Content /></Grid.Column>
      </Grid>,
    );
    const gridComp = container.querySelector('.bi.bi-grid-column');

    expect(gridComp.classList.contains('bi-offset-lg-13 bi-offset-xl-19 bi-offset-33 col-sm-23')).to.be.false;
  });

  it('should accept a \'selfAlign\' props', () => {
    const { container } = render(<Grid><Grid.Column selfAlign="end"><Content /></Grid.Column></Grid>);
    const gridComp = container.querySelector('.bi.bi-grid-column');

    expect(gridComp.classList.contains('self-end'));
  });
});

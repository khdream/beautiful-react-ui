import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import Card from './Card';
import CardTitle from './CardTitle';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardImage from './CardImage';

describe('Card component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explore', () => {
    const { container } = render(
      <Card>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardTitle>Title</CardTitle>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );

    expect(container).to.exist;
    expect(container.querySelector('.bi.bi-card')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(
      <Card>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardTitle>Title</CardTitle>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('div');

    expect(cardComp.classList.contains('bi')).to.be.true;
    expect(cardComp.classList.contains('bi-card')).to.be.true;
  });

  it('should accept an id prop', () => {
    const { container } = render(
      <Card id="foo">
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardTitle>Title</CardTitle>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card');

    expect(cardComp.id).to.equal('foo');
  });

  it('should accept custom classes', () => {
    const { container } = render(
      <Card className="foo">
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardTitle>Title</CardTitle>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card');

    expect(cardComp.classList.contains('foo')).to.be.true;
  });

  it('should accept custom style', () => {
    const { container } = render(
      <Card style={{ margin: '10px' }}>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardTitle>Title</CardTitle>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card');

    expect(cardComp.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should accept a \'fluid\' prop', () => {
    const { container } = render(
      <Card fluid>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardTitle>Title</CardTitle>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card');

    expect(cardComp.classList.contains('fluid')).to.be.true;
  });

  it('should accept a \'float\' prop', () => {
    const { container } = render(
      <Card float>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardTitle>Title</CardTitle>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card');

    expect(cardComp.classList.contains('float')).to.be.true;
  });

  it('should accept a \'textAlign\' prop', () => {
    const { container } = render(
      <Card textAlign="center">
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardTitle>Title</CardTitle>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card');

    expect(cardComp.classList.contains('card-text-center')).to.be.true;
  });

  it('should accept an \'orientation\' prop', () => {
    const { container } = render(
      <Card orientation="horizontal">
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardTitle>Title</CardTitle>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card');

    expect(cardComp.classList.contains('orientation-h')).to.be.true;
  });

  it('should accept a \'reversed\' prop', () => {
    const { container } = render(
      <Card reversed>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardTitle>Title</CardTitle>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card');

    expect(cardComp.classList.contains('reversed')).to.be.true;
  });

  it('should accept an \'actionButton\' prop', () => {
    const { container } = render(
      <Card actionButton>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardTitle>Title</CardTitle>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card');

    expect(cardComp.querySelector('.bi-card-actbtn-icn')).to.exist;
    expect(cardComp.querySelector('.bi.bi-btn')).to.exist;
  });

  it('should accept an \'actionButtonIcon\' prop', () => {
    const { container, rerender } = render(
      <Card actionButton actionButtonIcon="heart">
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardTitle>Title</CardTitle>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card .bi-card-actbtn-icn .bi.bi-btn').querySelector('svg');

    expect(cardComp.classList.contains('fa-heart')).to.be.true;

    rerender(
      <Card actionButton>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardTitle>Title</CardTitle>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );

    expect(cardComp.classList.contains('fa-ellipsis-v')).to.be.true;
  });

  it('should accept an \'onActionButtonClick\' prop', () => {
    const onClick = sinon.spy();
    const { container } = render(
      <Card actionButton onActionButtonClick={onClick}>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardTitle>Title</CardTitle>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card .bi-card-actbtn-icn .bi.bi-btn');

    fireEvent.click(cardComp);

    expect(onClick.calledOnce).to.be.true;
  });

  it('should accept an \'actionButtonRenderer\' prop', () => {
    const rendererSpy = sinon.spy();

    render(
      <Card actionButton actionButtonRenderer={rendererSpy}>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardTitle>Title</CardTitle>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );

    expect(rendererSpy.calledOnce).to.be.equal(true);
  });

  it('should accept an \'imageRenderer\' prop', () => {
    const rendererSpy = sinon.spy();

    render(
      <Card imageRenderer={rendererSpy}>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardTitle>Title</CardTitle>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );

    expect(rendererSpy.calledOnce).to.be.equal(true);
  });

  it('should set the img maxWidth when the card has a defined action button and it is reversed horizontally', () => {
    const { container } = render(
      <Card reversed orientation="horizontal" actionButton>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardTitle>Title</CardTitle>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card.orientation-h.reversed');

    expect(cardComp).to.exist;
    expect(cardComp.querySelector('.icon-img-container')).to.exist;
    expect(cardComp.querySelector('.icon-img-container .bi-card-actbtn-icn')).to.exist;
  });
});

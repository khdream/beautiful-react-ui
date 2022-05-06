import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Breadcrumbs from '.';

describe('Breadcrumbs component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explode', () => {
    const pages = [{ path: '/', label: 'Home' }];
    const { container } = render(<Breadcrumbs items={pages} />);

    should.exist(container);
    expect(container.querySelector('nav')).to.exist;
  });

  it('should have default classes', () => {
    const pages = [{ path: '/', label: 'Home' }];
    const { container } = render(<Breadcrumbs items={pages} />);
    const nav = container.querySelector('nav');

    expect(nav.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-breadcrumbs']);
  });

  it('should accept an "id" prop', () => {
    const pages = [{ path: '/', label: 'Home' }];
    const { container } = render(<Breadcrumbs id="foo" items={pages} />);
    const breadcrumb = container.querySelector('nav');

    expect(breadcrumb.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const pages = [{ path: '/', label: 'Home' }];
    const { container } = render(<Breadcrumbs className="foo" items={pages} />);
    const breadcrumb = container.querySelector('nav');

    expect(breadcrumb.getAttribute('class').split(' ')).to.include.members(['foo']);
  });


  it('should allow to define custom style', () => {
    const pages = [{ path: '/', label: 'Home' }];
    const { container } = render(<Breadcrumbs items={pages} style={{ margin: '10px' }} />);
    const nav = container.querySelector('nav');

    expect(nav.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should render a number of <li> tags equal to the number of given items', () => {
    const pages = [{ path: 'home', label: 'Home' }, { path: '/section', label: 'Section' }];
    const { container } = render(<Breadcrumbs items={pages} />);
    const renderedLi = container.querySelectorAll('li');
    const liLen = renderedLi.length;

    expect(pages.length).to.equal(liLen);
  });

  it('should render a number of <a> tags equal to the number of given paths', () => {
    const pages = [{ path: '/', label: 'home' }, { path: '/section', label: 'Section' }];
    let nrPath = 0;
    pages.forEach((item) => {
      if (item.path) {
        nrPath += 1;
      }
    });
    const { container } = render(<Breadcrumbs items={pages} />);
    const renderedA = container.querySelectorAll('a');
    const aLen = renderedA.length;

    expect(nrPath).to.equal(aLen);
  });

  it('should allow to define the breadcrumb links color', () => {
    const pages = [{ path: '/', label: 'home' }, { path: '/section', label: 'Section' }];
    const { container, rerender } = render(<Breadcrumbs items={pages} color="secondary" />);
    const firstColor = container.querySelector('nav');

    expect(firstColor.getAttribute('class').split(' ')).to.include.members(['breadcrumbs-secondary']);
    expect(firstColor.getAttribute('class').split(' ')).to.not.include.members(['breadcrumbs-primary']);

    rerender(<Breadcrumbs items={pages} color="danger" />);
    const secondColor = container.querySelector('nav');
    expect(secondColor.getAttribute('class').split(' ')).to.include.members(['breadcrumbs-danger']);
    expect(secondColor.getAttribute('class').split(' ')).to.not.include.members(['breadcrumbs-secondary']);

    rerender(<Breadcrumbs items={pages} />);
    const noColor = container.querySelector('nav').getAttribute('class').split(' ');
    expect(noColor).to.include.members(['breadcrumbs-primary']);
    expect(noColor).to.not.include.members(['breadcrumbs-danger', 'breadcrumbs-secondary']);
  });

  it('it should possibly run a renderer passing current item as parameter', () => {
    const spy = sinon.spy();
    const pages = [{ path: '/', label: 'home' }, { path: '/section', label: 'Section', render: spy }];
    render(<Breadcrumbs items={pages} />);
    const spyArgs = spy.args[0];

    expect(spy.calledOnce).to.be.equal(true);
    expect(spyArgs[0]).to.be.equal(pages[1]);
  });

  it('should warn if both label or icon are missing in items array', () => {
    const spy = sinon.spy(console, 'warn');
    const pages = [{ path: '/', label: 'home' }, { path: '/section' }];
    render(<Breadcrumbs items={pages} />);

    expect(spy.calledOnce).to.be.equal(true);
  });

  it('should show a sub-menu when \'maxDisplayedItems\' is defined', () => {
    const pages = [
      { path: '/', label: 'home' },
      { path: '/section1', label: 'Section1' },
      { path: '/section2', label: 'Section2' },
      { path: '/section3', label: 'Section3' },
    ];
    const { container } = render(<Breadcrumbs items={pages} maxDisplayedItems={2} />);

    const breadcrumbButton = container.querySelector('.breadcrumb-menu');

    expect(breadcrumbButton).to.exist;
  });

  it('should only show the number of items defined into the \'maxDisplayedItems\' prop', () => {
    const pages = [
      { path: '/', label: 'home' },
      { path: '/section1', label: 'Section1' },
      { path: '/section2', label: 'Section2' },
      { path: '/section3', label: 'Section3' },
    ];
    const { container } = render(<Breadcrumbs items={pages} maxDisplayedItems={2} />);

    const renderedLi = container.querySelectorAll('li');

    expect(renderedLi.length).to.be.equal(3);
  });

  it('should warn and return null if the \'maxDisplayedItems\' is bigger that the passed items', () => {
    const warnSpy = sinon.spy(console, 'warn');
    const pages = [
      { path: '/', label: 'home' },
      { path: '/section1', label: 'Section1' },
    ];
    const { container } = render(<Breadcrumbs items={pages} maxDisplayedItems={12} />);

    expect(warnSpy.callCount).to.equal(1);
    expect(container.querySelector('.bi-breadcrumbs')).to.be.null;
  });
});

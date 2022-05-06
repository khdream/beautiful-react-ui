import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import FileItem from './FileItem';
import performStandardTests from '../../../../test/utils/performStandardTests';
import hasDefaultClassNames from '../../../../test/utils/hasDefaultClassNames';


describe('FileItem component', () => {
  beforeEach(() => {
    // mocking FileReader API
    global.FileReader = class {
      readAsDataURL() {
        if (this.onload) {
          this.onload({ target: { result: 'src/foo' } });
        }
      }
    };
  });

  afterEach(() => {
    cleanup();
    sinon.restore();
    delete global.FileReader;
  });


  const FileMock = { name: 'foo', size: 1000 * 1000, type: 'image/png' };

  const defaultProps = { file: FileMock };

  // performs the standard tests
  performStandardTests(FileItem, defaultProps);
  // performs a test on default class names
  hasDefaultClassNames(FileItem, defaultProps, ['bi-file-item']);


  it('shall perform the uploadingFn if provided', () => {
    const spy = sinon.spy();
    render(<FileItem file={FileMock} uploadingFn={spy} />);
    const receivedFile = spy.args[0][0];
    const next = spy.args[0][1];

    expect(spy.called).to.be.true;
    expect(receivedFile).to.equal(FileMock);
    expect(next).to.be.a('function');
  });

  it('if provided the uploadingFn receives a next function to upload the FileItem state', () => {
    const spy = sinon.spy();
    const { container } = render(<FileItem file={FileMock} uploadingFn={spy} />);
    const next = spy.args[0][1];

    next({ byteSent: 1000 * 1000, loading: true });

    expect(container.querySelector('.bi.bi-file-item .bi-progress-bar')).to.exist;
    expect(container.querySelector('.bi.bi-file-item .bi-file-size')).to.exist;
    expect(container.querySelector('.bi.bi-file-item .bi-file-size').innerHTML).to.equal('1MB');
  });

  it('should perform the onRemove callback if provided', () => {
    const spy = sinon.spy();
    const { container } = render(<FileItem file={FileMock} onRemove={spy} />);
    const removeBtn = container.querySelector('.bi.bi-file-item .bi.bi-btn');

    expect(removeBtn).to.exist;

    fireEvent.click(removeBtn);

    expect(spy.calledOnce).to.be.true;
  });

  it('should show a neutral icon if the file is not "previwable"', () => {
    FileMock.type = 'foo';
    const spy = sinon.spy();
    const { container } = render(<FileItem file={FileMock} onRemove={spy} />);
    const icon = container.querySelector('.bi.bi-file-item .bi.bi-icon');

    expect(icon).to.exist;
  });
});

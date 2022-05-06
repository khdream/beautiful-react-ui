import React from 'react';
import { cleanup, render } from '@testing-library/react';
import FileUploader from './FileUploader';
import performStandardTests from '../../../../test/utils/performStandardTests';
import hasDefaultClassNames from '../../../../test/utils/hasDefaultClassNames';


describe('FileUploader component', () => {
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
  const onChangeSpy = sinon.spy();

  const defaultProps = { uploads: [{ file: FileMock, byteSent: 10, uploading: true }], onChange: onChangeSpy };

  // performs the standard tests
  performStandardTests(FileUploader, defaultProps);
  // performs a test on default class names
  hasDefaultClassNames(FileUploader, defaultProps, ['bi-file-uploader']);

  it('should allow to define title and subtitle', () => {
    const { container } = render(<FileUploader {...defaultProps} title="Foo" subtitle="Bar" />);
    const title = container.querySelector('.bi.bi-file-uploader .bi-file-uploader-content .bi.bi-title');
    const subtitle = container.querySelector('.bi.bi-file-uploader .bi-file-uploader-content .bi.bi-title + .bi.bi-p');

    expect(title).to.exist;
    expect(subtitle).to.exist;
    expect(title.innerHTML).to.equal('Foo');
    expect(subtitle.innerHTML).to.equal('Bar');
  });
});

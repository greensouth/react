import { newSpecPage } from '@stencil/core/testing';
import { TestList } from '../test-list';

describe('test-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TestList],
      html: `<test-list></test-list>`,
    });
    expect(page.root).toEqualHtml(`
      <test-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </test-list>
    `);
  });
});

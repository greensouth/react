import { newE2EPage } from '@stencil/core/testing';

describe('test-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<test-list></test-list>');

    const element = await page.find('test-list');
    expect(element).toHaveClass('hydrated');
  });
});

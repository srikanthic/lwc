import { createElement } from 'lwc';

import XInnerHtml from 'x/innerHtml';

const originalSanitizeHtmlContent = LWC.sanitizeHtmlContent;
afterEach(() => {
    // Reset original sanitizer after each test.
    LWC.sanitizeHtmlContent = originalSanitizeHtmlContent;
});

it('uses the original passthrough sanitizer when not overridden', () => {
    const elm = createElement('x-inner-html', { is: XInnerHtml });
    elm.content = 'Hello <b>World</b>';
    document.body.appendChild(elm);

    const use = elm.shadowRoot.querySelector('use');
    expect(use.getAttribute('xlink:href')).toBe('/foo');
});

it('receives the right parameters', () => {
    spyOn(LWC, 'sanitizeHtmlContent');

    const elm = createElement('x-inner-html', { is: XInnerHtml });
    document.body.appendChild(elm);

    expect(LWC.sanitizeHtmlContent).toHaveBeenCalledWith(
        'use',
        'http://www.w3.org/2000/svg',
        'xlink:href',
        '/foo'
    );
});

it('replace the original attribute value with the returned value', () => {
    LWC.sanitizeHtmlContent = () => '/bar';

    const elm = createElement('x-inner-html', { is: XInnerHtml });
    document.body.appendChild(elm);

    const use = elm.shadowRoot.querySelector('use');
    expect(use.getAttribute('xlink:href')).toBe('/bar');
});

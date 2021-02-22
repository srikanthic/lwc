import _xFoo from "x/foo";
import { registerTemplate, sanitizeHtmlContent } from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    t: api_text,
    h: api_element,
    s: api_slot,
    c: api_custom_element,
  } = $api;
  return [
    api_element(
      "div",
      {
        key: 0,
      },
      [api_text("With content")]
    ),
    api_slot(
      "",
      {
        key: 1,
      },
      [],
      $slotset
    ),
    api_custom_element(
      "x-foo",
      _xFoo,
      {
        key: 2,
      },
      []
    ),
    [],
  ];
}
export default registerTemplate(tmpl);
tmpl.slots = [""];
tmpl.stylesheets = [];

// Transform plain form field html into Bootstrap equivalent
class BootstrapConverter {
  // input: two lines of html - the first is a label, the second is an
  // input tag
  // output: The equivalent HTML for a bootstrap form-group
  convert(html) {
    const [$h, fragment] = this.getFragment(html);

    $(fragment.input).addClass('form-control');

    const id = $(fragment.input).attr('id');
    $(fragment.label).attr('for', id);

    $h.children().wrapAll('<div class="form-group">');

    return $h.html();
  }

  getFragment(html) {
    const fragment = {
      label: null,
      input: null,
    };

    const $h = $(`<div>${html}</div>`);

    $h.children().map((index, el) => {
      switch (el.type) {
        case undefined:
          fragment.label = el;
          break;
        default:
          fragment.input = el;
      }
    });

    return [$h, fragment];
  }
}

export { BootstrapConverter };

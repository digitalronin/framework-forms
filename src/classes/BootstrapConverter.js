// Transform plain form field html into Bootstrap equivalent
class BootstrapConverter {
  // input: two lines of html - the first is a label, the second is an
  // input tag
  // output: The equivalent HTML for a bootstrap form-group
  convert(html) {
    const $h = $(`<div>${html}</div>`);

    const fragment = {
      'label': null,
      'input': null,
    };

    fragment['input'] = $h.children()[1];
    fragment['label'] = $h.children()[0];

    const id = $(fragment['input']).attr('id');
    $(fragment['input']).addClass('form-control');

    $(fragment['label']).attr('for', id);

    $h.children().wrapAll('<div class="form-group">');

    return $h.html();
  }
}

export { BootstrapConverter };

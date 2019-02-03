// Transform plain form field html into Bootstrap equivalent
class BootstrapConverter {
  // input: two lines of html - the first is a label, the second is an
  // input tag
  // output: The equivalent HTML for a bootstrap form-group
  convert(html) {
    const $h = $(`<div>${html}</div>`);

    const input = $h.children()[1];
    const id = $(input).attr('id');
    $(input).addClass('form-control');

    const label = $h.children()[0];
    $(label).attr('for', id);

    $h.children().wrapAll('<div class="form-group">');

    return $h.html();
  }
}

export { BootstrapConverter };

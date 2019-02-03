import { HtmlPrettyPrinter } from './HtmlPrettyPrinter';

// Transform plain form fields HTML into its bootstrap
// equivalent, by adding form-group tags, etc.
class Transformer {

  transform(html) {
    let rtn = "";

    this.chunks(html).map((chunk) => {
      rtn += this.transformLabelInputPair(chunk);
    });

    return this.prettify(rtn);
  }

  // split html into chunks, according to blank
  // lines in the input
  chunks(html) {
    // https://stackoverflow.com/a/42559116/794111
    return html
        .replace(/\n\r/g, "\n")
        .replace(/\r/g, "\n")
        .split(/\n{2,}/g);
  }

  // input: two lines of html - the first is a label, the second is an
  // input tag
  // output: The equivalent HTML for a bootstrap form-group
  transformLabelInputPair(html) {
    const $h = $(`<div>${html}</div>`);

    const input = $h.children()[1];
    const id = $(input).attr('id');
    $(input).addClass('form-control');

    const label = $h.children()[0];
    $(label).attr('for', id);

    $h.children().wrapAll('<div class="form-group">');

    return $h.html();
  }

  prettify(html) {
    return new HtmlPrettyPrinter(html).prettify();
  }
}

export { Transformer };

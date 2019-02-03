import { HtmlPrettyPrinter } from './HtmlPrettyPrinter';
import { BootstrapConverter } from './BootstrapConverter';

// Transform plain form fields HTML into its bootstrap
// equivalent, by adding form-group tags, etc.
class Transformer {

  transform(html) {
    const bc = new BootstrapConverter();

    let rtn = "";

    this.chunks(html).map((chunk) => {
      rtn += bc.convert(chunk);
    });

    return new HtmlPrettyPrinter(rtn).prettify();
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
}

export { Transformer };

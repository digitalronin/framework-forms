// https://stackoverflow.com/questions/26360414/javascript-how-to-correct-indentation-in-html-string#26361620

class HtmlPrettyPrinter {
  constructor(html) {
    this.html = html;
  }

  prettify() {
    return this.process(this.html).trim();
  }

  process(str) {
    var div = document.createElement('div');
    div.innerHTML = str.trim();
    return this.format(div, 0).innerHTML;
  }

  format(node, level) {
    var indentBefore = new Array(level++ + 1).join('  '),
      indentAfter  = new Array(level - 1).join('  '),
      textNode;

    for (var i = 0; i < node.children.length; i++) {

      textNode = document.createTextNode('\n' + indentBefore);
      node.insertBefore(textNode, node.children[i]);

      this.format(node.children[i], level);

      if (node.lastElementChild == node.children[i]) {
        textNode = document.createTextNode('\n' + indentAfter);
        node.appendChild(textNode);
      }
    }

    return node;
  }
}

export { HtmlPrettyPrinter };


class Transformer {
  constructor(config) {
    this.$inputControl = config.$inputControl;
    this.$outputControl = config.$outputControl;
  }

  initialise() {
    this.$inputControl.on('keyup', () => {
      const transformed = this.transform(this.$inputControl.val());
      this.$outputControl.val(transformed);
    });
  }

  transform(html) {
    let $h = $(`<div>${html}</div>`);

    let input = $h.children()[1];
    const id = $(input).attr('id');
    $(input).addClass('form-control');

    let label = $h.children()[0];
    $(label).attr('for', id);

    $h.children().wrapAll('<div class="form-group">');

    return this.process($h.html());
  }

  // https://stackoverflow.com/questions/26360414/javascript-how-to-correct-indentation-in-html-string#26361620
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

export { Transformer };

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
    console.log('transform', html);
    const $h = $(`<div>${html}</div>`);

    let label = $h.children()[0];
    $(label).attr('for', 'wibble');

    return $h.html();
  }
}

export { Transformer };

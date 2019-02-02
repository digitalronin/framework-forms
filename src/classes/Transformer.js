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

    return $h.html();
  }
}

export { Transformer };

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
    return html;
  }
}

export { Transformer };

if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function ElementRemove() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

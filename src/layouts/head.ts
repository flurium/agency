class Head {
  private _styles: string = ""

  get styles() {
    return this._styles
  }

  public css(str: string) {
    this._styles = this._styles.concat(str)
  }
}

export let head = new Head()

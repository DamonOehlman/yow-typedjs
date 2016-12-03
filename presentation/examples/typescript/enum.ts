const enum SpinnerStyle {
  Standard,
  Fancy
}

class Spinner {
  private readonly style: SpinnerStyle; 

  constructor(opts: { style: SpinnerStyle }) {
    this.style = opts.style;
  }
}

function createSpinner(style: SpinnerStyle): Spinner {
  return new Spinner({ style });
}

const spinner: Spinner = createSpinner(SpinnerStyle.Fancy);
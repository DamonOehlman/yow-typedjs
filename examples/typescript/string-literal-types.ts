module demo {
type SpinnerCssClass = 'STANDARD' | 'FANCY';

function createSpinner(style: SpinnerCssClass): Spinner {
  return new Spinner({ style });
}

class Spinner {
  private readonly style: SpinnerCssClass; 

  constructor(opts: { style: SpinnerCssClass }) {
    this.style = opts.style;
  }
}

const a = createSpinner('STANDARD');
const b = createSpinner('FANCY');
/**
const c = createSpinner('AWESOME');
*/
}
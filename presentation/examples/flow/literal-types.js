// @flow
type SpinnerCssClass = 'STANDARD' | 'FANCY';

function createSpinner(style: SpinnerCssClass): Spinner {
  return new Spinner({ style });
}

class Spinner {
  style: SpinnerCssClass; 

  constructor(opts: { style: SpinnerCssClass }) {
    this.style = opts.style;
  }
}

const a = createSpinner('STANDARD');
const b = createSpinner('FANCY');

// $FlowFixMe
const c = createSpinner('AWESOME');
import { DateFromNowPipe } from './date-from-now.pipe';

describe('TestAbcPipe', () => {
  const pipe = new DateFromNowPipe();
  it('transform date unix to format DD-MM-YYYY', () => {
    expect(pipe.transform(1580428800)).toBe('30-01-2020');
  });
  it('transform not unix date', () => {
    expect(pipe.transform(124123)).toBe('02-01-1970');
  });
  it('transform string to date', () => {
    expect(pipe.transform('ascnasja')).toBe('Fecha inválida');
  });
});

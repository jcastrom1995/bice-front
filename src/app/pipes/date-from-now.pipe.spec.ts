import { DateFromNowPipe } from './date-from-now.pipe';

describe('Test date pipe', () => {
  const pipe = new DateFromNowPipe();
  it('transform date unix to format DD-MM-YYYY', () => {
    expect(pipe.transform(1580428800)).toBe('30-01-2020');
  });
  it('transform random unix date', () => {
    expect(pipe.transform(124123)).toBe('02-01-1970');
  });
  it('transform invalid date', () => {
    expect(pipe.transform('ascnasja')).toBe('Fecha inválida');
  });
});

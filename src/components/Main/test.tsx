import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render', () => {
    const { container } = render(<Main />);

    expect(container).toMatchSnapshot();
  });

  it('should render heading', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: /boilerplate first test/i })
    ).toBeInTheDocument();
  });
});

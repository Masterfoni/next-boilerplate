import { render, screen } from '@testing-library/react';

import Main from '.';
import { EPERM } from 'constants';

describe('<Main />', () => {
  it('should render', () => {
    const { container } = render(<Main />);

    expect(container).toMatchSnapshot();
  });

  it('should render heading', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: /Your app is up and running!/i })
    ).toBeInTheDocument();
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    });
  });
});

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { LaunchesSection } from '../launches-section';
import { mockedMappedLaunchData } from '@/utils/mock-data';
 
describe('Home', () => {
  it('renders a setion with a heading and launch details', () => {
    render(<LaunchesSection launches={[mockedMappedLaunchData[1], mockedMappedLaunchData[2]]} year='2020' />);
 
    const heading = screen.getByRole('heading', {
      name: "Launch Year: 2020",
    });
 
    expect(heading).toBeInTheDocument();
  });
});
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('앱을 랜더링', () => {
  it('랜더링', () => {
    render(<App />);

    const button = screen.getByRole('button', {name: '열려라'})
    expect(button).toBeInTheDocument()
  })

  it('누르기 전', () => {
    render(<App />);

    const closedDoor = screen.getByText('닫힌문')
    expect(closedDoor).toBeInTheDocument()
  })
})

describe('토글 기능 테스트', () => {
    it('버튼 클릭시 열리기', () => {
      render(<App />);
      const closeText = '닫힌문'

      const closedDoor = screen.getByText('닫힌문')
      expect(closedDoor).toBeInTheDocument()

      const button = screen.getByRole('button', {name: '열려라'})
      expect(button).toBeInTheDocument()

      userEvent.click(button)



      expect(
        screen.queryByText(closeText)
      ).not.toBeInTheDocument();

      // const opendDoor = screen.getByText('열린문')
      // expect(opendDoor).toBeInTheDocument()

      // expect(button).toHaveTextContent('닫혀라')
    })
})
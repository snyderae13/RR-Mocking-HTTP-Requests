import App from './App'
import {render, screen, waitFor} from '@testing-library/react'

beforeEach (()=> {
    fetch.resetMocks()
})




test("receives GitHub name from GitHub REST API using jest fetch mock", async () => {
    fetch.mockResponseOnce(JSON.stringify({name:'Alec Snyder'}))
    render(<App />)
    const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 2 }))
    expect(gitHubName).toHaveTextContent('Alec Snyder')
  })


  test("receives GitHub URL", async () => {
      fetch.mockResponseOnce(JSON.stringify({html_url: 'https://github.com/snyderae13'}))
      render(<App/>)
      const gitHubURL = await waitFor(() => screen.getByRole('link'))
      expect(gitHubURL).toHaveAttribute('href', expect.stringContaining('github.com'))
  })



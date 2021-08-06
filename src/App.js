import ImageTaggerPage from './pages/imageTagger'
import Layout from './pages/layout'

const App = () => {
  return (
    <div className="App">
      <Layout children={<ImageTaggerPage />} />
    </div>
  )
}

export default App

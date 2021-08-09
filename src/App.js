import ImageTaggerPage from './pages/imageTagger/ImageTaggerPage'
import Layout from './pages/layout/Layout'

const App = () => {
  return (
    <div className="App">
      <Layout children={<ImageTaggerPage />} />
    </div>
  )
}

export default App

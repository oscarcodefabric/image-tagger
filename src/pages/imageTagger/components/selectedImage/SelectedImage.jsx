import { Image } from 'react-bootstrap'

const SelectedImage = ({ imageSrc }) => (
  <div className="bg-secondary text-center  m-0 p-0">
    <Image fluid src={imageSrc} style={{maxHeight: '75vh'}}/>
  </div>
)

export default SelectedImage

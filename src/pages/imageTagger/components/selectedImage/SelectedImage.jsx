import { Image } from 'react-bootstrap'

const SelectedImage = ({ imageSrc }) => (
  <div className="bg-secondary text-center">
    <Image fluid src={imageSrc} style={{maxHeight: '80vh'}}/>
  </div>
)

export default SelectedImage

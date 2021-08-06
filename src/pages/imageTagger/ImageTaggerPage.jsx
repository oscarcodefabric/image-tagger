import { getImage, getTags } from 'actions/imageActions'
import { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import AddTag from './components/addTag/AddTag'
import ImageTags from './components/imageTags'
import SelectedImage from './components/selectedImage'

const ImageTaggerPage = () => {
  const dispatch = useDispatch()
  const tags = useSelector((state) => state.imageState.tags)
  const image = useSelector((state) => state.imageState.image)
  useEffect(() => {
    dispatch(getImage())
    dispatch(getTags())
  }, [])

  return (
    <div className="image-tagger-checkin">
      <Row>
        <Col lg="9">
          <Card className="w-100">
            <Card.Body className="text-center">
              <SelectedImage imageSrc={image.imageUrl} />
            </Card.Body>
            <Card.Footer>
              <h4> {image.title} </h4>
              <ImageTags tags={image.tags} imageId={image.id} />
            </Card.Footer>
          </Card>
        </Col>
        <Col lg="3">
          <AddTag tags={tags} imageId={image.id} />
        </Col>
      </Row>
    </div>
  )
}

export default ImageTaggerPage

import { getImage, getTags } from 'actions/imageActions'
import { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import AddTag from './components/addTag/AddTag'
import ImageTags from './components/imageTags/ImageTags'
import SelectedImage from './components/selectedImage/SelectedImage'

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
        <Col lg="9 mt-2 pe-lg-0">
          <Card className="w-100">
            <Card.Body className="text-center m-0 p-0">
              <SelectedImage imageSrc={image.imageUrl} />
            </Card.Body>
            <Card.Footer>
              <h4> {image.title} </h4>
              <ImageTags imageTags={image.tags} imageId={image.id} />
            </Card.Footer>
          </Card>
        </Col>
        <Col lg="3 mt-2 ps-lg-0 text-center">
          <AddTag imageId={image.id} imageTags={image.tags} tags={tags}  />
        </Col>
      </Row>
    </div>
  )
}

export default ImageTaggerPage

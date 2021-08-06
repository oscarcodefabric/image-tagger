import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { removeTag } from 'actions/imageActions'

const ImageTags = ({ tags, imageId }) => {
  const dispatch = useDispatch()

  return (
    <Row bg="light">
      <Col>
        {tags.map((tag, index) => (
          <Button
            key={index}
            variant="secondary"
            className="me-1 mb-1 text-break"
            onClick={() => dispatch(removeTag(imageId, tag.id))}
          >
            {tag.label}
          </Button>
        ))}
      </Col>
    </Row>
  )
}

export default ImageTags

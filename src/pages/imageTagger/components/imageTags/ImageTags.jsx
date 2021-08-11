import { Badge, Button, ButtonGroup, Col, Row } from 'react-bootstrap'
import { XCircleFill } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux'

import { removeTag } from 'actions/imageActions'

const ImageTags = ({ imageTags, imageId }) => {
  const dispatch = useDispatch()

  return (
    <Row bg="light">
      <Col className="mt-2">
        {imageTags.length > 0 ? (
          imageTags.map((tag, index) => (
            <Button
              key={index}
              size="sm"
              variant="outline-secondary"
              className="me-1 mb-1 py-0 pe-1 text-break rounded-pill align-bottom"
            >
              {tag.label}
              <Badge text="dark" className="mb-1 ms-2 p-0">
                <XCircleFill
                  className="m-0 p-0 align-text-bottom"
                  size="14"
                  onClick={() => dispatch(removeTag(imageId, tag.id))}
                />
              </Badge>
            </Button>
          ))
        ) : (
          <p className="fst-italic text-muted">
            The image doesn't have associated tags.
          </p>
        )}
      </Col>
    </Row>
  )
}

export default ImageTags

import { Button, ButtonGroup, Col, Row } from 'react-bootstrap'
import { XOctagon } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux'

import { removeTag } from 'actions/imageActions'

const ImageTags = ({ imageTags, imageId }) => {
  const dispatch = useDispatch()

  return (
    <Row bg="light">
      <Col>
        {imageTags.length>0 ?
          imageTags.map((tag, index) => (
            <ButtonGroup key={index} size="sm" className="me-1 mb-1">
              <Button variant="outline-secondary" className="text-break">
                {tag.label}
              </Button>
              <Button variant="secondary">
                <XOctagon
                  size="18"
                  onClick={() => dispatch(removeTag(imageId, tag.id))}
                />
              </Button>
            </ButtonGroup>
          ))
        :<p className="fst-italic text-muted">The image doesn't have associated tags.</p>
        }
      </Col>
    </Row>
  )
}

export default ImageTags

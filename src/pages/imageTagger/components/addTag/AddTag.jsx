import { addTag } from 'actions/imageActions'
import { Card, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const AddTag = ({ imageId, imageTags, tags }) => {
  const availableTags = tags.flatMap((tag, index) =>
    imageTags.some((newTag) => newTag.label === tag.label) ? (
      []
    ) : (
      <option key={index} value={tag.id}>
        {tag.label}
      </option>
    )
  )
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(addTag(imageId, event.target.value))
  }
  return (
    <Card className="w-100">
      <Card.Header>
        <h5>Add more tags</h5>
      </Card.Header>
      <Card.Body>
        <Form>
          <Row>
            <Col xs="12" className="text-center">
              {availableTags.length > 0 ? (
                <Form.Select aria-label="tags" onChange={handleChange}>
                  <option>Choose a tag...</option>
                  {availableTags}
                </Form.Select>
              ) : (
                <h6>No tags available</h6>
              )}
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default AddTag

import { addTag } from 'actions/imageActions'
import { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const AddTag = ({ tags, imageId }) => {
  const dispatch = useDispatch()
  const [selectedTag, selectedTagSet] = useState('')

  const handleChange = (event) => {
    selectedTagSet(event.target.value)
  }
  return (
    <Card className="w-100">
      <Card.Header>
        <h5>Add more tags</h5>
      </Card.Header>
      <Card.Body>
        <Form>
          <Row>
            <Col xs="8">
              <Form.Select aria-label="tags" onChange={handleChange}>
                <option>Choose a tag...</option>
                {tags.map((tag, index) => (
                  <option key={index} value={tag.id}>
                    {tag.label}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col xs="4 text-center">
              <Button onClick={() => dispatch(addTag(imageId, selectedTag))}>
                Add
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default AddTag

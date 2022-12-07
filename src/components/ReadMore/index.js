// Write your code here
import {useState} from 'react'
import {
  Container,
  Heading,
  Text,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const [read, showRead] = useState(false)
  const {reactHooksDescription} = props

  const showDescription = () => {
    showRead(prevState => !prevState)
  }
  return (
    <Container>
      <Heading>React Hooks</Heading>
      <Text>Hooks are a new addition to React</Text>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png "
        alt="react hooks"
      />
      <Description>
        {!read ? reactHooksDescription.slice(0, 170) : reactHooksDescription}
      </Description>
      <Button type="button" onClick={showDescription}>
        {read ? 'Read Less' : 'Read More'}
      </Button>
    </Container>
  )
}

export default ReadMore

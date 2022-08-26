import Card from 'react-bootstrap/Card';

function ContactCardFormat() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="AuthorCardTitle"></Card.Title>
        <Card.Subtitle className="mb-2 text-muted AuthorCardSubtitle"></Card.Subtitle>
        <Card.Text className="AuthorCardText"></Card.Text>
        <Card.Link href="#" className="AuthorCardEmail"></Card.Link>
        <Card.Link href="#" className="AuthorCardGitHub"></Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ContactCardFormat;
import ContactItem from '../ContactItem';
import PropTypes from 'prop-types';
import { Container, Item, List } from './ContactList.styled';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <Container>
      <List>
        {contacts.map(contact => (
          <Item key={contact.id}>
            <ContactItem contact={contact} onDelete={onDeleteContact} />
          </Item>
        ))}
      </List>
    </Container>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

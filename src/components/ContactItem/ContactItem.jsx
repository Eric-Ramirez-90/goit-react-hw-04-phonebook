import PropTypes from 'prop-types';
import { Button, DataConteiner, Text } from './ContactItem.styled';

function ContactItem({ contact: { id, name, number }, onDelete }) {
  return (
    <>
      <DataConteiner>
        <Text>{name}:</Text>
        <Text>{number}</Text>
      </DataConteiner>
      <Button onClick={() => onDelete(id)}>Delete</Button>
    </>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;

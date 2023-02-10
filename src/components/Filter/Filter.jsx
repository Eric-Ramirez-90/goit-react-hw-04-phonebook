import PropTypes from 'prop-types';
import { Container, Input, Label } from './Filter.styled';

function Filter({ value, onChange }) {
  return (
    <Container>
      <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={onChange} />
      </Label>
    </Container>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

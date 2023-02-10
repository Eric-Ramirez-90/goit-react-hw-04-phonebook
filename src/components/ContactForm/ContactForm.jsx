import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Button, FormError, Input, Label, Wrapper } from './ContactForm.styled';

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

const validateName = value => {
  let errorMessage;
  if (
    !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(value)
  ) {
    errorMessage =
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
  }
  return errorMessage;
};

const validateNumber = value => {
  let errorMessage;
  if (
    !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
      value
    )
  ) {
    errorMessage =
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
  }
  return errorMessage;
};

const initialValues = {
  name: '',
  number: '',
};

function ContactForm({ onSubmit }) {
  const createContact = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={createContact}
        validationSchema={validationSchema}
      >
        <Form autoComplete="off">
          <Wrapper>
            <Label>
              Name
              <Input type="text" name="name" validate={validateName} />
              <FormError name="name" />
            </Label>
            <Label>
              Number
              <Input type="tel" name="number" validate={validateNumber} />
              <FormError name="number" />
            </Label>
            <Button type="submit">Add contact</Button>
          </Wrapper>
        </Form>
      </Formik>
    </div>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

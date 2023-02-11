import { useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
// Libraries
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import Notification from '../Notification';
import ContactList from '../ContactList';
import initialContacts from '../initialContacts.json';
// Styles
import { Section, SubTitle, Title } from './App.styled';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  const [filter, setFilter] = useState('');

  const gettingCreatedContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(
        contact =>
          contact.name.toLocaleLowerCase().trim() ===
          name.toLocaleLowerCase().trim()
      )
    ) {
      toast.error(`${name} is already in contacts`, { theme: 'colored' });
      return;
    }

    if (contacts.find(contact => contact.number === number)) {
      toast.error(`This ${number} is already in contacts`, {
        theme: 'colored',
      });
      return;
    }

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={gettingCreatedContact} />
      <SubTitle>Contacts</SubTitle>
      <Filter value={filter} onChange={changeFilter} />

      {!contacts.length > 0 ? (
        <Notification message="There is no contacts" />
      ) : (
        <ContactList
          contacts={getFilteredContacts()}
          onDeleteContact={deleteContact}
        />
      )}
      <ToastContainer autoClose={3000} rtl position="top-center" />
    </Section>
  );
}

export default App;

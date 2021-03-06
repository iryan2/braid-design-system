import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import {
  IconSearch,
  TextField,
  TextLink,
  Text,
  Strong,
  List,
  IconHelp,
  Stack,
} from '../';
import source from '../../utils/source.macro';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  Example: ({ id, getState, setState }) =>
    source(
      <TextField
        label="Label"
        id={id}
        onChange={setState('textfield')}
        value={getState('textfield')}
        onClear={() => setState('textfield', '')}
      />,
    ),
  alternatives: [
    { name: 'Autosuggest', description: 'For autocompletion.' },
    {
      name: 'PasswordField',
      description: 'For password input.',
    },
    { name: 'Textarea', description: 'For long-form text.' },
  ],
  additional: [
    {
      label: 'Additional labels',
      description: (
        <>
          <Text>
            Supports all three levels of{' '}
            <TextLink href="/components/FieldLabel">FieldLabel</TextLink>:
          </Text>
          <List>
            <Text>
              <Strong>label</Strong> — primary title of the field,
            </Text>
            <Text>
              <Strong>secondaryLabel</Strong> — additional context, typically
              used to indicate optionality of a field,
            </Text>
            <Text>
              <Strong>tertiaryLabel</Strong> — further context, typically used
              for providing assistance with a field.
            </Text>
          </List>
        </>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <TextField
            label="Label"
            id={id}
            onChange={setState('textfield')}
            value={getState('textfield')}
            secondaryLabel="optional"
            tertiaryLabel={
              <TextLink href="#">
                <IconHelp /> Help
              </TextLink>
            }
          />,
        ),
    },
    {
      label: 'Message and tone',
      description: (
        <>
          <Text>
            A <Strong>message</Strong> is typically used to communicate the
            status of a field, such as an error message. This will be announced
            on focus of the field and can be combined with a{' '}
            <TextLink href="/foundations/tones">tone</TextLink> to illustrate
            its purpose.
          </Text>
          <Text>
            The supported tones are: <Strong>{'"critical"'}</Strong>,{' '}
            <Strong>{'"positive"'}</Strong>, and <Strong>{'"neutral"'}</Strong>.
          </Text>
        </>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <Stack space="large">
            <TextField
              label="Label"
              id={`${id}_1`}
              onChange={setState('textfield')}
              value={getState('textfield')}
              tone="critical"
              message="Critical message"
            />
            <TextField
              label="Label"
              id={`${id}_2`}
              onChange={setState('textfield2')}
              value={getState('textfield2')}
              tone="positive"
              message="Positive message"
            />
            <TextField
              label="Label"
              id={`${id}_3`}
              onChange={setState('textfield3')}
              value={getState('textfield3')}
              tone="neutral"
              message="Neutral message"
            />
          </Stack>,
        ),
    },
    {
      label: 'Field description',
      description: (
        <Text>
          Additional context can be provided with a <Strong>description</Strong>
          . This will display below the field label and also be announced by a
          screen reader when the field is focused.
        </Text>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <TextField
            label="Label"
            id={id}
            onChange={setState('textfield')}
            value={getState('textfield')}
            description="Extra information about the field"
          />,
        ),
    },
    {
      label: 'Disabled field',
      description: (
        <Text>
          Mark the field as disabled by passing <Strong>true</Strong> to the{' '}
          <Strong>disabled</Strong> prop.
        </Text>
      ),
      background: 'card',
      Example: ({ id, getState, setState }) =>
        source(
          <TextField
            label="Label"
            id={id}
            onChange={setState('textfield')}
            value={getState('textfield')}
            disabled={true}
          />,
        ),
    },
    {
      label: 'Placeholder prompt',
      description: (
        <Text>
          Providing a <Strong>placeholder</Strong> will display as a prompt to
          the user no value is selected.
        </Text>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <TextField
            label="Label"
            id={id}
            onChange={setState('textfield')}
            value={getState('textfield')}
            placeholder="Enter text"
          />,
        ),
    },
    {
      label: 'Clearing the field',
      description: (
        <Text>
          A <TextLink href="/components/IconClear">clear icon</TextLink> button
          will appear in the field when the user has entered text. You must pass
          a function to the <Strong>onClear</Strong> prop, which will be called
          when the button is clicked.
        </Text>
      ),
      Example: ({ id, getState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('textfield', 'User entered text')}

            <TextField
              label="Label"
              id={id}
              onChange={setState('textfield')}
              value={getState('textfield')}
              onClear={() => setState('textfield', '')}
            />
          </>,
        ),
    },
    {
      label: 'Inserting an icon',
      description: (
        <Text>
          For decoration and help disguinishing fields an <Strong>icon</Strong>{' '}
          can be provided. This will be placed in the left of the field and is
          not interactive.
        </Text>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <TextField
            id={id}
            label="Label"
            onChange={setState('textfield')}
            value={getState('textfield')}
            icon={<IconSearch />}
            placeholder="Enter text"
          />,
        ),
    },
  ],
};

export default docs;

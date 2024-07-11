import {
  Create,
  SimpleForm,
  required,
  TextInput,
  ReferenceInput,
  NumberInput,
} from "react-admin";

export const CreateLesson = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" label={"Title"} validate={[required()]} />
        <TextInput source="content" label={"Content"} validate={[required()]} />
        <ReferenceInput source="unitId" reference="units" />
        <NumberInput source="order" label={"Order"} validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};

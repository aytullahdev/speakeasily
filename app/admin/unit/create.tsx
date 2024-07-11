import {
  Create,
  SimpleForm,
  required,
  TextInput,
  ReferenceInput,
  NumberInput,
} from "react-admin";

export const CreateUnit = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" label={"Title"} validate={[required()]} />
        <TextInput
          source="description"
          label={"Description"}
          validate={[required()]}
        />
        <ReferenceInput source="courseId" reference="courses" />
        <NumberInput source="order" label={"Order"} validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};

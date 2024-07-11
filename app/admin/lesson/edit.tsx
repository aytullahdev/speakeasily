import {
  SimpleForm,
  required,
  TextInput,
  Edit,
  ReferenceInput,
  NumberInput,
} from "react-admin";

export const EditLesson = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" label={"Title"} validate={[required()]} />
        <TextInput source="content" label={"Content"} validate={[required()]} />
        <ReferenceInput source="unitId" reference="units" />
        <NumberInput source="order" label={"Order"} validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};

import { SimpleForm, required, TextInput, Edit } from "react-admin";

export const EditUnit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" label={"Id"} validate={[required()]} />
        <TextInput source="title" label={"Title"} validate={[required()]} />
        <TextInput
          source="description"
          label={"Description"}
          validate={[required()]}
        />
        <TextInput source="order" label={"Order"} validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};

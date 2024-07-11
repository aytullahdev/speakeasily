import { SimpleForm, required, TextInput, Edit } from "react-admin";

export const EditCourse = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" label={"Id"} validate={[required()]} />
        <TextInput source="title" label={"Title"} validate={[required()]} />
        <TextInput source="imageSrc" label={"Image"} validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};

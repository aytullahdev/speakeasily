import { CHALLENGE_SELECT_CHOICES } from "@/constants";
import {
  SimpleForm,
  required,
  TextInput,
  Edit,
  ReferenceInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const EditChallenge = () => {
  return (
    <Edit>
      <SimpleForm>
        <SelectInput
          source="type"
          label={"Type"}
          choices={CHALLENGE_SELECT_CHOICES}
          validate={[required()]}
        />
        <TextInput
          source="question"
          label={"Question"}
          validate={[required()]}
        />
        <ReferenceInput source="lessonId" reference="lessons" />
        <NumberInput source="order" label={"Order"} validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};

// id: serial("id").primaryKey(),
//   lessonId: integer("lesson_id")
//     .references(() => lessons.id, {
//       onDelete: "cascade",
//     })
//     .notNull(),
//   type: challengesEnum("type").notNull(),
//   question: text("question").notNull(),
//   order: integer("order").notNull(),

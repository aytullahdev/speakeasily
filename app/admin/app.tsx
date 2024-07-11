"use client";
import { Admin, Resource } from "react-admin";
import simpleResetProvider from "ra-data-simple-rest";
import { CourseList } from "./course/list";
import { CreateCourse } from "./course/create";
import { EditCourse } from "./course/edit";
import { UnitList } from "./unit/list";
import { CreateUnit } from "./unit/create";
import { EditUnit } from "./unit/edit";
import { LessonList } from "./lesson/list";
import { CreateLesson } from "./lesson/create";
import { EditLesson } from "./lesson/edit";
import { ChallengeList } from "./challenge/list";
import { CreateChallenge } from "./challenge/create";
import { EditChallenge } from "./challenge/edit";
import { ChallengeOptionList } from "./challengeOption/list";
import { CreateChallengeOption } from "./challengeOption/create";
import { EditChallengeOption } from "./challengeOption/edit";
const dataProvider = simpleResetProvider("/api");
const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="courses"
        recordRepresentation="title"
        list={CourseList}
        create={CreateCourse}
        edit={EditCourse}
      />
      <Resource
        name="units"
        recordRepresentation="title"
        list={UnitList}
        create={CreateUnit}
        edit={EditUnit}
      />

      <Resource
        name="lessons"
        recordRepresentation="title"
        list={LessonList}
        create={CreateLesson}
        edit={EditLesson}
      />

      <Resource
        name="challenges"
        recordRepresentation="question"
        list={ChallengeList}
        create={CreateChallenge}
        edit={EditChallenge}
      />

      <Resource
        name="challengeOptions"
        recordRepresentation="text"
        list={ChallengeOptionList}
        create={CreateChallengeOption}
        edit={EditChallengeOption}
        options={{
          label: "Challenge Options",
        }}
      />
    </Admin>
  );
};

export default App;

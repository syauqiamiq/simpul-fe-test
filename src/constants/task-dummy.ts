import { ITask } from "@/interfaces/apis/task";

export const taskDummy: ITask[] = [
  {
    id: 1,
    title:
      "Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203",
    description:
      "Homeworks needed to be checked are as follows : Client Profile Questionnaire, Passport Requirements and Images, Personal Documents.",
    endDate: new Date().setDate(new Date().getDate() + 1),
    isDone: true,
    taskType: "Personal Errands",
  },
  {
    id: 2,
    title: "Cross-reference with Jeanne for Case #192813",
    description: "",
    endDate: new Date().setDate(new Date().getDate() + 2),
    isDone: true,
    taskType: "Personal Errands",
  },
  {
    id: 3,
    title: "Check and Revise Homework from Andre Gonzales",
    description:
      "Homeworks needed to be checked are as follows : Client Profile Questionnaire, Passport Requirements and Images, Personal Documents.",
    endDate: new Date().setDate(new Date().getDate() + 2),
    isDone: false,
    taskType: "Urgent To-Do",
  },
];

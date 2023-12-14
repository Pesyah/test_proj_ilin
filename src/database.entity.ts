import { Evaluations } from "./evaluations/evaluations.entity";
import { Lessons } from "./lessons/lessons.entity";
import { Users } from "./users/users.entity";


export class DatabaseEntity {
  static listEntities() {
    return [
        Users,
        Evaluations,
        Lessons,
    ];
  }
}

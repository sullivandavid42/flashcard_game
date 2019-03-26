import { User } from './users.entity';

export class Entity {
    id: string;
}

export class OwnedEntity extends Entity {
    createdByUserId: string;
}

// list all the entities of the project
// this will be used to clean all the
// matching tables during the tests
export const BDD_ENTITIES = [User];

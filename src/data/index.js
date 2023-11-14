import faker from "faker";
import { NO_USERS, MAX_TAGS, MAX_MENTORS, MAX_MENTEES } from "./config";
import { createItems, selectRandom, getRest } from "./shared";

const users = [];

for (let i = 0; i < NO_USERS; i++)
  users.push({
    id: faker.random.uuid(),
    name: faker.name.findName(),
    photo: faker.image.avatar(),
    description: faker.lorem.paragraph(),
    tags: createItems(
      faker.name.jobArea,
      faker.random.number({ min: 1, max: MAX_TAGS })
    )
  });

users.forEach((user) => {
  const rest = getRest(users, user);
  user.mentors = selectRandom(rest, faker.random.number(MAX_MENTORS));
  user.mentees = selectRandom(rest, faker.random.number(MAX_MENTEES));
});

export const user = faker.random.arrayElement(users);

export const rest = getRest(users, user);

export const tags = [...new Set(users.flatMap((user) => user.tags))];

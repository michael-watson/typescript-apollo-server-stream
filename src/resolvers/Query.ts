import { Resolvers } from "../__generated__/resolvers-types";

export const Query: Resolvers = {
  Query: {
    thing(_parent, { id }, _context) {
      return { id, name: "Name" };
    },
    async catFact(_parent, _args, _context) {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();

      return data;
    }
  },
};

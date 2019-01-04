export interface App {
  attributes: { name: string; url: string };
}

export interface ConnectedPerson {
  id: number;
  attributes: { name: string; organization_name: string };
}

const sortByAttribute = (attr: string) => (arr: any[]): any[] =>
  arr
    .slice()
    .sort((a, b) => a.attributes[attr].localeCompare(b.attributes[attr]));

export const appsMenuFormatter = (apps: App[]): App[] =>
  sortByAttribute("name")(apps).reduce(
    (acc, item) =>
      (item.attributes.name || "") === "Church Center" ||
      (item.attributes.name || "") === "API"
        ? acc
        : acc.concat([item]),
    [],
  );

export const connectedPeopleMenuFormatter = (
  connectedPeople: ConnectedPerson[],
): ConnectedPerson[] => sortByAttribute("organization_name")(connectedPeople);

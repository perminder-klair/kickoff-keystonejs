const typeDefs = `
type Description {
    md: String
    html: String
}

type Car {
   id: ID!                # "!" denotes a required field
   name: String
   slug: String
   description: Description
   price: Int
}

# This type specifies the entry points into our API. In this case
# there is only one - "Cars" - which returns a list of cars.
type Query {
   cars(slug: String): [Car]    # "[]" means this is a list of cars
}
`;

export default typeDefs;

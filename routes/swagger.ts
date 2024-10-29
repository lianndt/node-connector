export const options = {
  definition: {
    info: {
      title: "Connector",
      version: "1.0.0",
      description: "dfdfd",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

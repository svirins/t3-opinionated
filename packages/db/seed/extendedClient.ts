import { PrismaClient } from "@prisma/client";

type POI = {
  id: string;
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

// https://www.prisma.io/docs/orm/prisma-client/queries/raw-database-access/custom-and-type-safe-queries

const prisma = new PrismaClient({
  log: ["error", "query", "info", "warn"],
}).$extends({
  model: {
    pointOfInterest: {
      async create(data: {
        id: string;
        name: string;
        latitude: number;
        longitude: number;
      }) {
        const poi: POI = {
          id: data.id,
          name: data.name,
          location: {
            latitude: data.latitude,
            longitude: data.longitude,
          },
        };
        const point = `POINT(${poi.location.longitude} ${poi.location.latitude})`;
        await prisma.$queryRaw`
          INSERT INTO "PointOfInterest" (id, name, location) VALUES (${poi.id}, ${poi.name}, ST_GeomFromText(${point}, 4326));
        `;
        return poi;
      },
    },
  },
});

export default prisma;

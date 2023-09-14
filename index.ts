import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// This works
prisma.payment.create({
  data: {
    dummyModelId: 1,
    statusId: 1,
  },
});

// This works
prisma.payment.create({
  data: {
    DummyModel: {
      connectOrCreate: {
        where: {
          id: 1,
        },
        create: {
          id: 1,
          slug: "dummy",
        },
      },
    },
    Status: {
      connectOrCreate: {
        where: {
          slug: "PENDING",
        },
        create: {
          slug: "PENDING",
        },
      },
    },
  },
});

// This doesn't
prisma.payment.create({
  data: {
    dummyModelId: 1,
    Status: {
      connectOrCreate: {
        where: {
          slug: "PENDING",
        },
        create: {
          slug: "PENDING",
        },
      },
    },
  },
});

//  Looks like the mixed syntax is not supported

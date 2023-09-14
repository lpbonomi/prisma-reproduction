import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const withDummyModelId = {
  dummyModelId: 1,
};

const withStatusId = {
  statusId: 1,
};

const withDummyModelConnectOrCreate = {
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
};

const withStatusConnectOrCreate = {
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
};

////////////
////////////
////////////
////////////

// This works
prisma.payment.create({
  data: {
    ...withDummyModelId,
    ...withStatusId,
  },
});

// This works
prisma.payment.create({
  data: {
    ...withDummyModelConnectOrCreate,
    ...withStatusConnectOrCreate,
  },
});

// This doesn't
prisma.payment.create({
  data: {
    ...withDummyModelConnectOrCreate,
    ...withStatusId,
  },
});

// This doesn't
prisma.payment.create({
  data: {
    ...withDummyModelId,
    ...withStatusConnectOrCreate,
  },
});

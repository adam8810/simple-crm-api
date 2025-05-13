"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Seed companies
    await queryInterface.bulkInsert(
      "companies",
      [
        {
          name: "Tech Corp",
          createdAt: new Date("2025-01-01T10:00:00Z"),
          active: true,
        },
        {
          name: "Innovate Ltd",
          createdAt: new Date("2025-02-01T12:00:00Z"),
          active: true,
        },
      ],
      {}
    );

    // Seed activity_types
    await queryInterface.bulkInsert(
      "activity_types",
      [
        {
          name: "Meeting",
          active: true,
          createdAt: new Date("2025-01-01T08:00:00Z"),
        },
        {
          name: "Email",
          active: true,
          createdAt: new Date("2025-01-02T09:00:00Z"),
        },
      ],
      {}
    );

    // Seed contacts
    await queryInterface.bulkInsert(
      "contacts",
      [
        {
          company_id: 1,
          first_name: "John",
          last_name: "Doe",
          createdAt: new Date("2025-03-01T14:00:00Z"),
          active: true,
        },
        {
          company_id: 1,
          first_name: "Jane",
          last_name: "Smith",
          createdAt: new Date("2025-03-02T15:00:00Z"),
          active: true,
        },
        {
          company_id: 2,
          first_name: "Alice",
          last_name: "Johnson",
          createdAt: new Date("2025-03-03T16:00:00Z"),
          active: true,
        },
      ],
      {}
    );

    // Seed activities
    await queryInterface.bulkInsert(
      "activities",
      [
        {
          contact_id: 1,
          type: 1,
          createdAt: new Date("2025-04-01T09:00:00Z"),
        },
        {
          contact_id: 2,
          type: 2,
          createdAt: new Date("2025-04-02T10:00:00Z"),
        },
        {
          contact_id: 3,
          type: 1,
          createdAt: new Date("2025-04-03T11:00:00Z"),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    // Delete activities first due to foreign key constraints
    await queryInterface.bulkDelete("activities", null, {});
    // Delete contacts
    await queryInterface.bulkDelete("contacts", null, {});
    // Delete activity_types
    await queryInterface.bulkDelete("activity_types", null, {});
    // Delete companies
    await queryInterface.bulkDelete("companies", null, {});
  },
};

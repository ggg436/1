// Mock schema to replace the original DB schema
// This just provides the necessary types without actual DB functionality

export const lessons = {
  $inferSelect: {} as Record<string, any>,
};

export const units = {
  $inferSelect: {} as Record<string, any>,
};

// Other schema definitions can be added here as needed 
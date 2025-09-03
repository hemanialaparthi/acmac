// 2025 - 2026 images :
import example_image from "../assets/events/2025-2026/example-image.jpg";

// Categories
export const categories = [
  { id: "upcoming", label: "Upcoming Events", icon: "Calendar" },
  { id: "2025-2026", label: "2025-2026", icon: "Calendar" },
];

export const eventsData = {
  // for each category id !!!
  upcoming: [
    {
      id: 1,
      name: "No Upcoming Events Yet",
      time: "N/A",
      location: "N/A",
      description: "Look out for our discord and instagram updates!",
      poster:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    },
  ],
  "2025-2026": [
    {
      id: 2,
      name: "Example Event",
      time: "February 29, 2024 - 6:00 PM",
      location: "Davis 101",
      description:
        "random description here",
      poster: example_image,
    },
  ],
};

export const getDisplayTitle = (category) => {
  return category === "upcoming" ? "Upcoming Events" : "Past Events";
};

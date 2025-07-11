const scenes = {
    start: {
      text: "You reach the crossroads of your career path. What do you seek?",
      options: [
        { text: "Training", next: "training" },
        { text: "Weapons (Skills)", next: "skills" },
        { text: "Quests (Projects)", next: "projects" },
      ]
    },
    training: {
      text: "You completed your training at the University of XYZ, where you learned the sacred arts of Computer Science.",
      options: [{ text: "Return", next: "start" }]
    },
    // etc...
  };
  
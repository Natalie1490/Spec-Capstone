const { StudyCard } = require("../models/studycard"); // Adjust the path accordingly

const seedCards = async () => {
  try {
    const questions = [
      {
        id: "1",
        question: "A chemical test is used to measure",
        answer: "BAC",
      },
      {
        id: "2",
        question:
          "A driver may park in a space reserved for people with disabilities if the vehicle displays license plates for the disabled",
        answer:
          "And is carrying the disabled person named on the registration.",
      },
      {
        id: "3",
        question: "A diamond-shaped sign is a",
        answer: "Road hazard sign.",
      },
      {
        id: "4",
        question:
          "A blind person legally has the right-of-way when crossing the street when he is",
        answer: "Led by a guide dog, or using a white or metallic cane.",
      },
      {
        id: "5",
        question: "A “no parking” sign at a certain location means",
        answer: "You may stop temporarily to load or unload passengers.",
      },
      {
        id: "6",
        question:
          "A bicyclist differs from a motorist in that he isn’t required to",
        answer: "Insure the bicycle.",
      },
      {
        id: "7",
        question: "A “no standing” sign at a certain location means",
        answer: "You may stop temporarily to pick up or discharge passengers.",
      },
      {
        id: "8",
        question: "A driver who is taking a non-prescription drug should",
        answer: "Read the labels on the drug before driving.",
      },
      {
        id: "9",
        question:
          "A “no stopping” sign means that, unless directed to do so by a policeman, you may stop only",
        answer: "To avoid conflict with other traffic.",
      },
      {
        id: "10",
        question: "A motorist approaching a bicyclist should",
        answer: "Exercise extreme caution.",
      },
      {
        id: "11",
        question:
          "An intersection has a stop sign and crosswalk, but no stop line. You must stop",
        answer: "Look for traffic by turning your head.",
      },
      {
        id: "12",
        question:
          "Before you leave a parking space that is parallel to the curb you should",
        answer: "Before the crosswalk.",
      },
      {
        id: "13",
        question:
          "An intersection has a stop sign, and crosswalk, but no stop line. You must stop",
        answer: "Straighten your front wheels and leave room between cars.",
      },
      {
        id: "14",
        question:
          "After you have passed a car, you should return to the right lane when you",
        answer: "See the front bumper of the other car in your mirror.",
      },
      {
        id: "15",
        question:
          "As you near an intersection, the traffic light changes from green to yellow. Your best action would be to",
        answer: "Be prepared to stop before the intersection.",
      },
      {
        id: "16",
        question:
          "A motorist should know that a bicyclist operating on a roadway must",
        answer: "Ride on the right side of the road.",
      },
      {
        id: "17",
        question:
          "A traffic light which has a green arrow and a red light means that",
        answer: "You may drive only in the direction of the green arrow.",
      },
      {
        id: "18",
        question: "A red and white triangular sign at an intersection means",
        answer: "Slow down and be prepared to stop if necessary.",
      },
      {
        id: "19",
        question: "A rectangular-shaped sign is",
        answer: "Speed limit sign.",
      },
      {
        id: "20",
        question:
          "A solid white line on the right edge of the highway slants in towards your left. That shows that",
        answer: "The road will get narrower.",
      },
      {
        id: "21",
        question:
          "If your brake pedal suddenly sinks to the floor, you should first",
        answer: "Try to pump it to build up the pressure.",
      },
      {
        id: "22",
        question: "Does not affect blood alcohol content.",
        answer: "There is room for your vehicle on the other side.",
      },
      {
        id: "23",
        question:
          "If you drink alcohol socially, what helps ensure safe driving",
        answer: "Ride home with a friend who has not been drinking.",
      },
      {
        id: "24",
        question:
          "If you are parked parallel to the curb, you may get out of the car on the traffic side.",
        answer: "When you won’t interfere with oncoming vehicles.",
      },
      {
        id: "25",
        question: "If you drive past your exit on an expressway, you should",
        answer: "Drive to the next exit and leave the expressway.",
      },
      {
        id: "26",
        question:
          "If an approaching train is near enough or going fast enough to be a danger, you must",
        answer: "Not cross the tracks until the train has completely passed.",
      },
      {
        id: "27",
        question: "Drinking coffee after drinking alcohol",
        answer: "Has no effect on blood alcohol content.",
      },
      {
        id: "28",
        question: "If a tire blows out, the proper thing to do is",
        answer: "Hold the steering wheel firmly, and ease up on the gas.",
      },
      {
        id: "29",
        question: "Drinking alcohol and driving is",
        answer: "A serious traffic safety problem.",
      },
      {
        id: "30",
        question:
          "Expressways have “expressway entrance lanes” (acceleration lanes) so that drivers can",
        answer: "Reach the proper speed before blending with traffic.",
      },
      {
        id: "31",
        question:
          "The driver’s left arm and hand are extended downward. This hand signal means that the driver plans to",
        answer: "Stop.",
      },
      {
        id: "32",
        question:
          "In which of the following situations is passing always forbidden",
        answer: "The vehicle ahead is stopped for a pedestrian in a crosswalk.",
      },
      {
        id: "33",
        question:
          "Motorists should be aware that all bicycles used after dark must have",
        answer: "Front headlight and red taillight.",
      },
      {
        id: "34",
        question: "The car behind you begins to pass you. You should",
        answer: "Slow down slightly and stay in your lane.",
      },
      {
        id: "35",
        question: "Night driving is dangerous because",
        answer: "The distance we can see ahead is reduced.",
      },
      {
        id: "36",
        question:
          "If traffic prevents you from crossing across a set of railroad tracks, you may proceed only when",
        answer: "Side of the road facing oncoming traffic.",
      },
      {
        id: "37",
        question:
          "In a parking space reserved for people with disabilities, a non-disabled driver",
        answer: "May neither park, stop nor stand.",
      },
      {
        id: "38",
        question:
          "In which of the following situations is passing always forbidden",
        answer: "The vehicle ahead is stopped for a pedestrian in a crosswalk.",
      },
      {
        id: "39",
        question:
          "In this state, what BAC (blood alcohol content) is evidence of intoxication",
        answer: "0.0008.",
      },
      {
        id: "40",
        question:
          "In general, you should pass vehicles going in the same direction as you are going",
        answer: "On the left.",
      },
      {
        id: "41",
        question:
          "The driver’s left hand and arm are extended upward. This hand signal means that the driver plans to",
        answer: "Turn right.",
      },
      {
        id: "42",
        question: "It harms both driving skills and judgment.",
        answer:
          "What are the colors of a sign which tells you the distance to the next exit of a highway?",
      },
      {
        id: "43",
        question: "What does a “slow-moving vehicle” emblem look like",
        answer: "Green with white letters.",
      },
      {
        id: "44",
        question: "What does a flashing yellow light mean",
        answer: "Proceed with caution.",
      },
      {
        id: "45",
        question:
          "What effect does drinking alcohol and taking a prescription drug or over-the-counter medicine have",
        answer: "A triangular orange sign.",
      },
      {
        id: "46",
        question:
          "What are the colors of the warning signs that indicate hazards ahead, such as curves in the road or narrow bridges",
        answer: "Black letters or symbols on a yellow background.",
      },
      {
        id: "47",
        question:
          "What does it mean when a school bus is stopped, and its red lights are flashing",
        answer: "You may not pass while the red lights are flashing.",
      },
      {
        id: "48",
        question:
          "What effect might alcohol and another drug have when combined in your blood",
        answer: "Increase the effects of both.",
      },
      {
        id: "49",
        question: "What does this road sign mean (stop sign)",
        answer: "Come to a full stop, then go when it is safe to do so.",
      },
      {
        id: "50",
        question:
          "You are getting on a highway that has a very short entrance lane. The safest way for you to enter the flow of traffic would be to",
        answer: "The combination could multiply the effects of the alcohol.",
      },
    ];

    // Using bulkCreate to insert multiple records
    await StudyCard.bulkCreate(questions);

    console.log("Cards seeded successfully");
  } catch (error) {
    console.error("Error seeding cards:", error);
  }
};

module.exports = { seedCards };

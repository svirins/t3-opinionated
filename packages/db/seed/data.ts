import { States, Topics, WeekDays } from "@acme/types";

export const locations = [
  {
    id: "cls7u33m5000008l8dd9cf4oj",
    name: "10ka",
    latitude: 53.89931965195655,
    longitude: 27.602057599054742,
  },
  {
    id: "cls7u9fdq00000al480osaulw",
    name: "Polevaya",
    latitude: 53.87412191632889,
    longitude: 27.571667665131763,
  },
  {
    id: "cls7u9ym500010al46f3ve1kn",
    name: "Malina",
    latitude: 53.849863891391294,
    longitude: 27.48657133532942,
  },
  {
    id: "cls7uacej00020al40f6hbbap",
    name: "Vyhod",
    latitude: 53.92148904941833,
    longitude: 27.56949674370225,
  },
  {
    id: "cls7uauwv00030al43wye2a8c",
    name: "Positivka",
    latitude: 53.91642094153588,
    longitude: 27.51224088204882,
  },
];

export const groupsData = [
  {
    name: "Десятка",
    address: {
      create: {
        city: "Минск",
        state: States.Minskaya,
        street: "ул. Долгобродская, 10 корпус 2",
        comments: "подъезд №1, цокольный этаж",
        location: {
          connect: {
            id: "cls7u33m5000008l8dd9cf4oj",
          },
        },
      },
    },
    days: {
      create: [
        {
          name: WeekDays.Monday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Tuesday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Traditions,
        },
        {
          name: WeekDays.Wednesday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Thursday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Friday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Saturday,
          start: "10:00",
          end: "11:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Saturday,
          start: "16:00",
          end: "17:30",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Sunday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Speaker,
        },
      ],
    },
  },
  {
    name: "Выход",
    address: {
      create: {
        city: "Минск",
        state: States.Minskaya,
        street: " ул.В.Хоружей, 18/1",
        comments: "Вход с обратной стороны — второй этаж",
        location: {
          connect: {
            id: "cls7uacej00020al40f6hbbap",
          },
        },
      },
    },
    days: {
      create: [
        {
          name: WeekDays.Monday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Tuesday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Traditions,
        },
        {
          name: WeekDays.Wednesday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Thursday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Friday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Saturday,
          start: "10:00",
          end: "11:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Saturday,
          start: "16:00",
          end: "17:30",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Sunday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Speaker,
        },
      ],
    },
  },
  {
    name: "Полевая",
    address: {
      create: {
        city: "Минск",
        state: States.Minskaya,
        street: "ул. Полевая, 26",
        comments: "цокольный этаж, вход с торца",
        location: {
          connect: {
            id: "cls7u9fdq00000al480osaulw",
          },
        },
      },
    },
    days: {
      create: [
        {
          name: WeekDays.Monday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Tuesday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Traditions,
        },
        {
          name: WeekDays.Wednesday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Thursday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Friday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Saturday,
          start: "10:00",
          end: "11:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Saturday,
          start: "16:00",
          end: "17:30",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Sunday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Speaker,
        },
      ],
    },
  },
  {
    name: "Позитивка",
    address: {
      create: {
        city: "Минск",
        state: States.Minskaya,
        street: "ул. Бирюзова 4, кабинет 219",
        location: {
          connect: {
            id: "cls7uauwv00030al43wye2a8c",
          },
        },
      },
    },
    days: {
      create: [
        {
          name: WeekDays.Monday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Tuesday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Traditions,
        },
        {
          name: WeekDays.Wednesday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Thursday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Friday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Saturday,
          start: "10:00",
          end: "11:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Saturday,
          start: "16:00",
          end: "17:30",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Sunday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Speaker,
        },
      ],
    },
  },
  {
    name: "Малина",
    address: {
      create: {
        city: "Минск",
        state: States.Minskaya,
        street: "ул Наполеона Орды 47а",
        сomments: "Социальный центр 2 этаж к. 208",
        location: {
          connect: {
            id: "cls7u9ym500010al46f3ve1kn",
          },
        },
      },
    },
    days: {
      create: [
        {
          name: WeekDays.Monday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Tuesday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Traditions,
        },
        {
          name: WeekDays.Wednesday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Thursday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Friday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Saturday,
          start: "10:00",
          end: "11:00",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Saturday,
          start: "16:00",
          end: "17:30",
          topic: Topics.Steps,
        },
        {
          name: WeekDays.Sunday,
          start: "12:00",
          end: "13:00",
          topic: Topics.Speaker,
        },
      ],
    },
  },
];

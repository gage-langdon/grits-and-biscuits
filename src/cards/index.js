import llamaseethatass from "./llama_see_that_ass";
import whaleyougraduated from "./whale_you_graduated";
import youOffishallyDidIt from "./you-offishally-did-it";
import happyBirthdayLlama from "./happy-birthday-llama";
import llamaJustSayCongrats from "./llama-just-say-congrats";
import ohThePlacesYoullGo from "./oh-the-places-youll-go";
import usFriendsStickTogether from "./us-friends-stick-together";
import youGotAPizzaMyHeart from "./you-got-a-pizza-my-heart";
import timmy from "./timmy";
import sallie from "./sallie";

const allCards = [
  llamaseethatass,
  whaleyougraduated,
  youOffishallyDidIt,
  happyBirthdayLlama,
  llamaJustSayCongrats,
  ohThePlacesYoullGo,
  usFriendsStickTogether,
  youGotAPizzaMyHeart,
  timmy,
  sallie,
];

const list = () => allCards;

const listSections = () => {
  return [
    {
      title: "Featured",
      items: [llamaseethatass, whaleyougraduated, youGotAPizzaMyHeart],
      background: "brick",
    },

    {
      items: [happyBirthdayLlama, usFriendsStickTogether],
    },
    {
      title: "Graduation",
      background: "squiggles",
      items: [llamaJustSayCongrats, ohThePlacesYoullGo, youOffishallyDidIt],
      linkedCategory: "graduation",
    },
    {
      title: "Make a friend",
      items: [sallie, timmy],
    },
  ];
};

const getById = (cardId) => allCards.find(({ id }) => id === cardId);

export default {
  list,
  listSections,
  getById,
};

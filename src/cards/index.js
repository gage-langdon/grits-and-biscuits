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
import yahDone from "./yah-done";
import iRuffYouThisMuch from "./i-ruff-you-this-much";
import llamaSayYouTheBest from "./llama-say-you-the-best";
import alwaysChooseHappiness from "./always-choose-happiness";
import partyAndPartyAndYeah from "./party-and-party-and-yeah";
import youQuackMeUp from "./you-quack-me-up";
import youAreLikeWine from "./you-are-like-wine";

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
  yahDone,
  llamaSayYouTheBest,
  iRuffYouThisMuch,
  alwaysChooseHappiness,
  partyAndPartyAndYeah,
  youQuackMeUp,
  youAreLikeWine,
];

const list = () => allCards;

const listSections = () => {
  return [
    {
      title: "Featured Cards",
      items: [llamaseethatass, whaleyougraduated, youGotAPizzaMyHeart],
      background: "brick",
    },
    {
      title: "Birthday Cards",
      items: [happyBirthdayLlama, partyAndPartyAndYeah, youAreLikeWine],
      linkedCategory: "birthday",
    },
    {
      title: "Graduation Cards",
      background: "squiggles",
      items: [yahDone, ohThePlacesYoullGo, youOffishallyDidIt],
      linkedCategory: "graduation",
    },

    {
      title: "Love Cards",
      items: [youGotAPizzaMyHeart, llamaseethatass, iRuffYouThisMuch],
      linkedCategory: "love",
    },

    {
      title: "Just Because Cards",
      items: [alwaysChooseHappiness, usFriendsStickTogether, youQuackMeUp],
      linkedCategory: "just because",
    },
    {
      title: "Make a friend",
      items: [sallie, timmy],
      background: "solid",
    },
  ];
};

const getById = (cardId) => allCards.find(({ id }) => id === cardId);

export default {
  list,
  listSections,
  getById,
};

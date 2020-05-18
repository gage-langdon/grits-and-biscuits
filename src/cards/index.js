import llamaseethatass from "./llama_see_that_ass";
import whaleyougraduated from "./whale_you_graduated";
import youOffishallyDidIt from "./you-offishally-did-it";
import happyBirthdayLlama from "./happy-birthday-llama";
import llamaJustSayCongrats from "./llama-just-say-congrats";
import ohThePlacesYoullGo from "./oh-the-places-youll-go";
import usFriendsStickTogether from "./us-friends-stick-together";
import youGotAPizzaMyHeart from "./you-got-a-pizza-my-heart";

const allCards = [
  llamaseethatass,
  whaleyougraduated,
  youOffishallyDidIt,
  happyBirthdayLlama,
  llamaJustSayCongrats,
  ohThePlacesYoullGo,
  usFriendsStickTogether,
  youGotAPizzaMyHeart,
];

const list = () => {
  return [
    {
      title: "Featured",
      items: [llamaseethatass, whaleyougraduated, youGotAPizzaMyHeart],
      background: "brick",
    },
    // {
    //   title: "Make a friend",
    //   items: [],
    // },
    {
      items: [happyBirthdayLlama, llamaJustSayCongrats, ohThePlacesYoullGo],
    },
    {
      items: [usFriendsStickTogether, youOffishallyDidIt],
    },
  ];
};

const getById = (cardId) => allCards.find(({ id }) => id === cardId);

export default {
  list,
  getById,
};

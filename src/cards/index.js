import llamaseethatass from "./llama_see_that_ass";
import whaleyougraduated from "./whale_you_graduated";
import youOffishallyDidIt from "./you-offishally-did-it";
import happyBirthdayLlama from "./happy-birthday-llama";
import llamaJustSayCongrats from "./llama-just-say-congrats";
import ohThePlacesYoullGo from "./oh-the-places-youll-go";
import usFriendsStickTogether from "./us-friends-stick-together";
import youGotAPizzaMyHeart from "./you-got-a-pizza-my-heart";

const list = () => {
  return [
    llamaseethatass,
    whaleyougraduated,
    youOffishallyDidIt,
    happyBirthdayLlama,
    llamaJustSayCongrats,
    ohThePlacesYoullGo,
    usFriendsStickTogether,
    youGotAPizzaMyHeart,
  ];
};

const getById = (cardId) => list().find(({ id }) => id === cardId);

export default {
  list,
  getById,
};

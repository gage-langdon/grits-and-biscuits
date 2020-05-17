import llamaseethatass from "./llama_see_that_ass";
import whaleyougraduated from "./whale_you_graduated";
import youOffishallyDidIt from "./you-offishally-did-it";

const list = () => {
  return [llamaseethatass, whaleyougraduated, youOffishallyDidIt];
};

const getById = (id) => {
  switch (id) {
    case llamaseethatass.id:
      return llamaseethatass;
    case whaleyougraduated.id:
      return whaleyougraduated;
    case youOffishallyDidIt.id:
      return youOffishallyDidIt;
    default:
      return null;
  }
};

export default {
  list,
  getById,
};

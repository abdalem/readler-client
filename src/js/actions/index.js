import { ADD_ARTICLE } from "js/constants/action-types";

function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
};
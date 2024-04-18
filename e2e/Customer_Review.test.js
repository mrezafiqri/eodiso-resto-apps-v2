/* eslint-disable no-undef */
Feature("Post Review");

const assert = require("assert");

Scenario("Post A Customer Review", async ({ I }) => {
  I.amOnPage("/");

  I.waitForElement(".card .card-body .card-title .card-title-item", 5);
  I.seeElement(".card .card-body .card-title .card-title-item");
  I.click(locate(".card .card-body .card-title .card-title-item").first());

  I.waitForElement(".button_add__review");
  I.click(".button_add__review");

  I.see("Close Form Review", ".button_add__review");

  I.waitForElement(".form_group.open");

  const userName = "Berlin";
  const textReviews = "Makanannya sangat enak!!!";

  I.fillField("input[name=\"name\"]", userName);
  I.fillField("textarea[name=\"reviews\"]", textReviews);

  I.click(".button_submit");

  I.waitForElement(".customer_riviews__item");
  I.seeElement(".customer_riviews__item .customer_riviews__item-group h3");
  I.seeElement(".customer_riviews__item .customer_riviews__item-group .customer_riviews__text");

  const lastUserNameReview = locate(".customer_riviews__item .customer_riviews__item-group h3").last();
  const lastTextCustomerReview = locate(".customer_riviews__item .customer_riviews__item-group .customer_riviews__text").last();

  const lastUserNameReviewText = await I.grabTextFrom(lastUserNameReview);
  const lastTextCustomerReviewText = (await I.grabTextFrom(lastTextCustomerReview)).trim();

  assert.strictEqual(lastUserNameReviewText, userName);
  assert.strictEqual(lastTextCustomerReviewText, textReviews);
});

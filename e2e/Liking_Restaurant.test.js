/* eslint-disable no-undef */
Feature("Liking Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

const assert = require("assert");

Scenario("showing empty liked restaurants", ({ I }) => {
  I.see("Your Favorite Restaurants", "h1");
  I.see("No favorite restaurant selected...", ".text-favorite__empty");
});

Scenario("liking one restaurant", async ({ I }) => {
  I.see("No favorite restaurant selected...", ".text-favorite__empty");

  I.amOnPage("/");

  I.waitForElement(".card .card-body .card-title .card-title-item", 5);

  I.seeElement(".card .card-body .card-title .card-title-item");
  const firstRestaurant = locate(".card .card-body .card-title .card-title-item").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.waitForElement(".card .card-body .card-title .card-title-item");
  I.seeElement("resto-item .card");
  const likedRestaurantTitle = await I.grabTextFrom(".card-title .card-title-item");

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario("Unliking one restaurant", async ({ I }) => {
  I.see("No favorite restaurant selected...", ".text-favorite__empty");

  I.amOnPage("/");

  I.waitForElement(".card .card-body .card-title .card-title-item", 2);

  I.seeElement(".card .card-body .card-title .card-title-item");
  const firstRestaurant = locate(".card .card-body .card-title .card-title-item").first();
  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.waitForElement(".card .card-body .card-title .card-title-item");
  I.seeElement(".card .card-body .card-title .card-title-item");

  const likedRestaurant = locate(".card .card-body .card-title .card-title-item").first();
  I.click(likedRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.see("No favorite restaurant selected...", ".text-favorite__empty");
});

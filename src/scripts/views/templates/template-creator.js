const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="bx bx-heart" style='color:#ffffff' aria-hidden="true"></i>
  </button>`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="bx bxs-heart" aria-hidden="true"></i>
  </button>
`;

export { createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate };

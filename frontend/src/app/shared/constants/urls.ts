const BASE_URL = 'http://localhost:5000';

export const PRODUCTS_URL = BASE_URL + '/api/products';
export const PRODUCTS_TAGS_URL = PRODUCTS_URL + '/tags';
export const PRODUCTS_BY_SEARCH_URL = PRODUCTS_URL + '/search/';
export const PRODUCTS_BY_TAG_URL = PRODUCTS_URL + '/tags/';
export const PRODUCTS_BY_ID_URL = PRODUCTS_URL + '/';

export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';

export const ORDER_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDER_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDER_URL + '/newOrderForCurrentUser';

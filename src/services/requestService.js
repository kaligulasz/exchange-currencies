/**
 * requestService - Service for transferring data
 */

// PRIVATE

const appId = '53a4926114064205bb44d5a875ca0b50';

/**
 * Build url based on passed arguments
 * @param {array} currencies
 * @return {string}
 */
const buildFeedUrl = (currencies) => {
  const domain = '//openexchangerates.org/';
  const target = 'api/latest.json';
  const query = `symbols=${currencies.join(',')}`;


  return `${domain}${target}?app_id=${appId}&${query}`;
};

/**
 * Use HTTP pipeline such as requests and responses for transferring data
 * @async
 * @param {string} feedUrl
 * @return {Promise<object>}
 */
const requester = async (feedUrl) => {
  try {
    const response = await fetch(feedUrl);

    return response.json();
  } catch (error) {
    throw new Error(`requestService - requester failed, message: ${error}, feedUrl: ${feedUrl}`);
  }
};

// PUBLIC

/**
 * Fetch data from feed based on passed argument
 * @async
 * @param {array} currencies
 * @return {Promise<object>}
 */
export const getData = async (currencies) => {
  const feedUrl = buildFeedUrl(currencies);

  return requester(feedUrl);
};

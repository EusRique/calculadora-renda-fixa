export const getSelicRate = async (
  fetchFn: () => Promise<number>
): Promise<number> => {
  const selic = await fetchFn();
  return selic;
};

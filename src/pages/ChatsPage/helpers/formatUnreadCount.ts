export const formatUnreadCount = (count: number): string => {
  return count > 9 ? '9+' : count.toString();
};

export const formatChatTime = (isoString: string): string => {
  const date = new Date(isoString);
  const now = new Date();

  const timeFormatter = new Intl.DateTimeFormat('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const dayMonthFormatter = new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'long',
  });

  const fullDateFormatter = new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const startOfDay = (d: Date) =>
    new Date(d.getFullYear(), d.getMonth(), d.getDate());

  const dateDay = startOfDay(date).getTime();
  const todayDay = startOfDay(now).getTime();
  const yesterdayDay = startOfDay(
    new Date(now.getTime() - 24 * 60 * 60 * 1000),
  ).getTime();

  const dayDifference = todayDay - dateDay;

  const oneYearInMs = 365 * 24 * 60 * 60 * 1000;

  if (dateDay === todayDay) {
    return timeFormatter.format(date);
  }

  if (dateDay === yesterdayDay) {
    return `Вчера ${timeFormatter.format(date)}`;
  }

  if (dayDifference < oneYearInMs && date.getFullYear() === now.getFullYear()) {
    return dayMonthFormatter.format(date);
  }

  return fullDateFormatter.format(date);
};

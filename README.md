# Chat Hub AI

Мини-приложение для управления мессенджерами.

## Технологии

- **React 19** - UI библиотека
- **TypeScript 5.9** - типизация
- **Vite 7** - сборщик и dev-сервер
- **React Router 7** - маршрутизация
- **SCSS Modules** - стилизация

## Инструменты разработки

- **ESLint** - статический анализ кода
- **Prettier** - форматирование кода
- **Stylelint** - проверка стилей
- **SWC** - быстрая компиляция

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка проекта
npm run build

# Предпросмотр production сборки
npm run preview
```

## Доступные команды

```bash
# Проверка кода
npm run lint

# Автоисправление
npm run format

# Отдельные проверки
npm run lint:eslint      # ESLint
npm run lint:stylelint   # Stylelint
npm run lint:prettier    # Prettier

# Отдельные автоисправления
npm run format:eslint    # ESLint --fix
npm run format:stylelint # Stylelint --fix
npm run format:prettier  # Prettier --write
```

## Структура проекта

```
src/
├── app/              # Конфигурация приложения
│   ├── layouts/      # Layout компоненты
│   ├── router/       # Настройка роутинга
│   └── styles/       # Глобальные стили
├── assets/           # Статические ресурсы
│   ├── fonts/        # Шрифты
│   └── icons/        # Иконки и SVG
├── components/       # Общие компоненты
│   ├── Header/       # Шапка
│   └── Footer/       # Футер с навигацией
├── pages/            # Страницы приложения
│   ├── WelcomePage/  # Приветственная страница
│   ├── ChatsPage/    # Страница чатов
│   └── PreferencesPage/ # Настройки
├── ui/               # UI компоненты
│   ├── Logo/         # Логотип
│   └── CheckBox/     # Кастомный чекбокс
└── modules/          # Бизнес-логика (пусто)
```

## Особенности

- CSS Modules для изоляции стилей
- SVG как React компоненты (через SVGR)
- Проверка доступности (a11y)
- Строгая типизация TypeScript

## Страницы

- `/welcome` - Приветственный экран с согласием на условия
- `/chats` - Список чатов (в разработке)
- `/preferences` - Настройки приложения (в разработке)

## Настройка VS Code

Проект включает рекомендуемые настройки и расширения для VS Code:

- Prettier - форматирование кода
- ESLint - проверка JavaScript/TypeScript
- Stylelint - проверка стилей

Настройки применяются автоматически при открытии проекта.


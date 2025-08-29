# 🚀 Space Adventure - Landing Page

Современная адаптивная landing page для космической тематики с анимациями и интерактивными элементами.

## ✨ Особенности

- 🎨 **Современный дизайн** с космической тематикой
- 📱 **Полностью адаптивный** (мобильные, планшеты, десктоп)
- 🎭 **Плавные анимации** и hover-эффекты
- 🍔 **Анимированное бургер-меню** для мобильных устройств
- 🌈 **Градиентные эффекты** на кнопках и иконках
- 📖 **CSS-only "Read more"** функциональность
- 🚀 **Плавный скролл** к секциям

## 🛠 Технологии

- **React 19.1.1** - современная библиотека для UI
- **SASS/SCSS** - продвинутые CSS стили
- **CSS Grid & Flexbox** - современная верстка
- **CSS Animations** - плавные переходы и анимации
- **Responsive Design** - адаптивность для всех устройств

## 📋 Требования

- **Node.js**: v22.14.0
- **npm**: v11.4.1

## 🚀 Установка и запуск

### 1. Клонирование репозитория
```bash
git clone https://github.com/[YOUR_USERNAME]/[YOUR_REPO_NAME].git
cd [YOUR_REPO_NAME]
```

### 2. Установка зависимостей
```bash
npm install
```

### 3. Запуск в режиме разработки
```bash
npm start
```

Приложение откроется на [http://localhost:3000](http://localhost:3000)

### 4. Сборка для продакшена
```bash
npm run build
```

## 🌐 Развертывание на GitHub Pages

### 1. Установка gh-pages
```bash
npm install --save-dev gh-pages
```

### 2. Обновление homepage в package.json
Замените `[YOUR_USERNAME]` и `[YOUR_REPO_NAME]` на ваши данные:
```json
"homepage": "https://yourusername.github.io/your-repo-name"
```

### 3. Развертывание
```bash
npm run deploy
```

## 📱 Адаптивность

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px  
- **Mobile**: < 768px
- **Mobile Small**: < 430px (с бургер-меню)

## 🎨 Структура проекта

```
src/
├── App.js          # Основной компонент
├── App.scss        # Стили с использованием SASS
├── index.js        # Точка входа
└── assets/
    └── img/        # Оптимизированные изображения (WebP)
```

## 🔧 Основные компоненты

- **Header** - навигация с логотипом и корзиной
- **Hero** - главная секция с призывом к действию
- **Offers** - карточки продуктов в адаптивной сетке
- **Embark** - секция с текстом и "Read more" функциональностью

## 📊 Оптимизация

- **Изображения**: WebP формат для лучшего сжатия
- **CSS**: Минификация и оптимизация
- **JavaScript**: Tree shaking и code splitting
- **Performance**: Lighthouse score 90+%

## 🤝 Вклад в проект

1. Fork репозитория
2. Создайте feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit изменения (`git commit -m 'Add some AmazingFeature'`)
4. Push в branch (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект создан для тестового задания. Все права защищены.

## 👨‍💻 Автор

**Frontend Developer** - [Ваше имя]

---

⭐ Если проект понравился, поставьте звездочку!

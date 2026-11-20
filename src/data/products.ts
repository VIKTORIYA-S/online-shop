import type { Product } from "../types";

const imageBaseUrl = `${import.meta.env.BASE_URL}products`;

export const products: Product[] = [
  {
    id: 1,
    name: "Гель для стирки",
    price: 340,
    description: "Жидкое средство для стирки повседневной одежды.",
    image: `${imageBaseUrl}/household_gel.png`,
    volume: "1 л",
  },
  {
    id: 2,
    name: "Шампунь для волос",
    price: 280,
    description: "Шампунь для ежедневного ухода за волосами.",
    image: `${imageBaseUrl}/hygiene_shampoo.png`,
    volume: "400 мл",
  },
  {
    id: 3,
    name: "Мужской дезодорант",
    price: 159,
    description: "Дезодорант-спрей для ежедневного использования.",
    image: `${imageBaseUrl}/deodorant.png`,
    volume: "150 мл",
  },
  {
    id: 4,
    name: "Стиральный порошок",
    price: 250,
    description: "Порошок для стирки одежды и белья.",
    image: `${imageBaseUrl}/detergent.png`,
  },
  {
    id: 5,
    name: "Губки для посуды",
    price: 40,
    description: "Набор губок для мытья посуды.",
    image: `${imageBaseUrl}/household_sponges.png`,
    volume: "5 шт.",
  },
  {
    id: 6,
    name: "Зубная паста",
    price: 150,
    description: "Паста для ежедневной чистки зубов.",
    image: `${imageBaseUrl}/hygiene_toothpaste.png`,
    volume: "75 мл",
  },
  {
    id: 7,
    name: "Бумажные салфетки",
    price: 129,
    description: "Бумажные салфетки для сервировки стола.",
    image: `${imageBaseUrl}/napkins.png`,
    volume: "100 шт.",
  },
  {
    id: 8,
    name: "Гигиеническое мыло",
    price: 65,
    description: "Твёрдое мыло для мытья рук.",
    image: `${imageBaseUrl}/soap.png`,
    volume: "100 г",
  },
];

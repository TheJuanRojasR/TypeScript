// 29.11.25

// Clase 16

import { CategoryInterface } from './categorie.model.js'

export interface ProductInterface {
    id:          number;
    title:       string;
    slug:        string;
    price:       number;
    description: string;
    category:    CategoryInterface;
    images:      string[];
    creationAt:  Date;
    updatedAt:   Date;
}

// NOTA: Colocamos cada modelo en su propio archivo para manejar el principio de una sola responsabilidad

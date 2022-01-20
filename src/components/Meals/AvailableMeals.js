import React from 'react'
import DUMMY_MEALS from './AvailableMealsData';
import styles from './AvailableMeals.module.css';
import { Card } from '../UI/Card';
import { MealItem } from './MealItem/MealItem';

export const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((mealitem) => {
        return <MealItem key={mealitem.id} meal={mealitem}></MealItem>
    });

    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

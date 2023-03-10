import { BUY_CAKE } from './CakeTypes';

export function buyCake(numbers = 1) {
  return {
    type: BUY_CAKE,
    payload: numbers,
  };
}

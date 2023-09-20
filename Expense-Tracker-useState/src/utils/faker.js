import { faker } from '@faker-js/faker/locale/en'

function generateData() {
    let data = []
    let count = 3;
    for (let i = 0; i < count; i++) {
        data.push(
            {
                item: faker.commerce.productName(),
                cost: faker.commerce.price()
            }
        )
    }
    return data;
}
export default generateData; 
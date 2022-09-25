import { client } from "$lib/pocket-base";
import type { CoffeeResponse } from "src/models/coffee";


export const load = async () => {
    const resultList = await client.records.getList('coffee', 1, 50, {
        expand: "originArabica, originRobusta"
    }) as unknown as { items: Array<CoffeeResponse> };

    return { items: resultList.items.map((v) => ({ ...v })) }
};

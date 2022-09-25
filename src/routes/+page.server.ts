import { client } from "$lib/pocket-base";



export const load = async () => {
    const resultList = await client.records.getList('coffee', 1, 50, {
        expand: "originArabica, originRobusta"
    });

    return { items: resultList.items.map((v) => ({ ...v })) }
};

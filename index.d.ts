declare global {
    interface Array<T> {
        /** Returns a random item from the array. */
        pick(): T;
        /** Deletes the item at the specified index, leaving nothing behind. */
        delete(index: number): T[];
        /** Deletes the first item in the array to match the `match` parameter. Set `strict` to true to match with `===` instead of `==`. */
        remove(match: any, strict?: boolean): T[];
        /** Same as remove(), but all matching items are removed rather than just one. */
        purge(match: any, strict?: boolean): T[];
        /** Sorts all numbers from lowest to highest. */
        ascend(): T[];
        /** Sorts all numbers from highest to lowest. */
        descend(): T[];
        /** Deletes all duplicate items in the array. */
        unique(): T[];
        /** Converts all strings to lowercase. */
        toLowerCase(): T[];
        /** Converts all strings to uppercase. */
        toUpperCase(): T[];
        /** Returns the sum of all the numbers in the array. */
        sum(): number;
        /** Returns the average of all the numbers in the array. */
        average(): number;
        /** Converts all numbers in the array to strings. */
        stringify(): any[];
        /** Converts all strings in the array to numbers. */
        numerify(): any[];
        /** Deletes all null/undefined/empty/etc items. */
        clean(): any[];
        /** Returns an object with the number of times each element appears in the array. */
        group(): {};
        /** Returns the element that appears the most times in the array. If there are multiple, the first one is returned. */
        most(): T;
        /** Returns the middle/median item in the array. If there's an even number of items, the number will be rounded down. Set `ceil` to true to round up instead. */
        middle(ceil?: boolean): T;
        /** Inserts something at the specified index. If index is left blank, it's pushed to the end of the array. */
        insert(item: any, index?: number): T[];
        /** Returns the last item in the array. */
        last(): T;
        /** Changes all array elements to "h". */
        h(): string[];
        /** Shuffles the array, completely randomly. */
        shuffle(): T[];
        /** Identical to the built-in `.find()`, but it returns an object with both the found item and it's index. You can also enter a string/number as the parameter and it will attempt to find a match. */
        locate(func: any): { value: T; index: number };
    }
}

function arrayEnhancer(): void;

export = arrayEnhancer;

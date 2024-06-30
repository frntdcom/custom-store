export type Action = {
    type: any;
    payload: any;
}

export type Reducer<S> = (state: S, action: Action) => S;

export class Store<S> {
    #state: S;
    readonly #reducer: Reducer<S>;

    constructor(reducer: Reducer<S>, initialState: S) {
        this.#state = initialState;
        this.#reducer = reducer;
    }

    dispatch(action: Action): void {
        this.#state = this.#reducer(this.#state, action);
        this.#notify();
    }

    getState() {
        return this.#state;
    }

    #notify() {
        console.log('New State Update: ', this.#state);
    }
}

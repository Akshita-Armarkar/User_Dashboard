const defaultState = [
    {
        email: 'dummyemail@test.com',
        name: 'John Doe',
        role: 'tester',
        createdon: new Date(),
        status: true
    }
]

const store = ( ( initialState ) => {

    let state = initialState ;
    const subscribersList = {} ;


    const getState = () => state ;

    const subscribe = ( callback ) =>{
        if( !( callback instanceof Function ) )return ;

        const symProp = Symbol() ;

        subscribersList[ symProp ] = callback ;

        return symProp ;
    }

    const unsubscribe = ( symProp ) => {
        delete subscribersList[ symProp ] ;
    }

    const dispatch = ( mutateFn ) => {
        if( !( mutateFn instanceof Function ) )return ;

        const previousState = state ;

        state = mutateFn( state ) ;

        if( previousState !== state ) _triggerSubs()

    }

    const _triggerSubs = () => {
        console.log( subscribersList );
        Object.getOwnPropertySymbols( subscribersList ).forEach( symProp => subscribersList[ symProp ]( state ) );
    }


    return {
        getState,
        subscribe,
        unsubscribe,
        dispatch
    }

})( defaultState );


export default store ;
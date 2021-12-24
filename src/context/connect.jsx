import { Component } from 'react' ;
import store from './store' ;

const Connect = ( mapToDispatch = () => null ) => ( UserComponent ) =>{ 

    const dispatchProps = mapToDispatch( store.dispatch ) ;

    class HOCConnect extends Component {

        constructor( props ){
            super( props );
        }

        componentDidMount(){
            this.callbackSymbol = store.subscribe( this.forceUpdate.bind( this, null ) )
        }

        componentWillUnmount(){
            store.unsubscribe( this.callbackSymbol );
        }

        render(){
            return (
              <UserComponent state = { store.getState() } { ...dispatchProps } { ...this.props } /> 
            )
        }
    }

    return HOCConnect ;
}

export default Connect  ;
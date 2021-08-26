import { BrowserRouter, Redirect, Route } from 'react-router-dom'


export const ProtectedRoute = ({ auth, component: Component, ...res}) => {
	return (
		<Route
			{ ...res }
			render={ (props) => {
				if (auth) return <Component {...res} />
				if (!auth)  {
					return <Redirect to={{ path:"/", state:{ from: props.location } }} />
				}
			} }
		/>
	)
}
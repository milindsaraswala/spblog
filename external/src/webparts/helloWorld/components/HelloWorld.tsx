import * as strings from 'HelloWorldWebPartStrings'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { IStackProps, Stack } from 'office-ui-fabric-react/lib/Stack'
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import * as React from 'react'
import styles from './HelloWorld.module.scss'
import { IHelloWorldProps } from './IHelloWorldProps'
const logo: any = require('./../../../assets/google.gif')

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
	public render(): React.ReactElement<IHelloWorldProps> {
		const columnProps: Partial<IStackProps> = {
			tokens: { childrenGap: 15 },
			styles: { root: { width: 300 } }
		}
		return (
			<div>
				<div>
					<img src={logo} />
				</div>
				<div>
					<span className={styles.title}>Welcome to SharePoint!</span>
					<br />
					<DefaultButton text={strings.AnotherProp} />
				</div>
				<div>
					<Stack horizontal tokens={{ childrenGap: 50 }} styles={{ root: { width: 650 } }}>
						<Stack {...columnProps}>
							<TextField label='Standard' />
							<TextField label='Disabled' disabled defaultValue='I am disabled' />
							<TextField label='Read-only' readOnly defaultValue='I am read-only' />
							<TextField label='Required ' required />
							<TextField required />
							<TextField label='With error message' errorMessage='Error message' />
						</Stack>
					</Stack>
				</div>
			</div>
		)
	}
}

import { Link } from 'react-router-dom';
import Header from './Header';

function BaseForm(props) {
	const { isSignUpForm } = props;
	return (
		<div className='w-screen h-screen bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/d433cae9-2dba-4e99-abcc-d06ebdbb818a/EC-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg")]'>
			<Header />
			<div className='w-full max-w-md p-8 mx-auto rounded-md flex flex-col gap-6 bg-black bg-opacity-80'>
				<h1 className='text-white text-3xl font-semibold'>
					{isSignUpForm ? 'Sign Up' : 'Sign In'}
				</h1>
				<form className='flex flex-col gap-4'>
					{isSignUpForm && (
						<input
							className='p-3 rounded-md bg-gray-700 text-white'
							type='text'
							name='fullname'
							placeholder='Full Name'
						/>
					)}
					<input
						className='p-3 rounded-md bg-gray-700 text-white'
						type='text'
						name='email'
						placeholder='Email'
					/>
					<input
						className='p-3 rounded-md bg-gray-700 text-white'
						type='password'
						name='password'
						placeholder='Password'
					/>
					<button className='p-3 my-6 rounded-md text-white bg-red-600'>
						{isSignUpForm ? 'Sign Up' : 'Sign In'}
					</button>
				</form>
				<p className='text-gray-500'>
					{isSignUpForm ? 'Already have an aacount?' : 'New to Netflix?'}{' '}
					<span className='text-white hover:underline'>
						{isSignUpForm ? (
							<Link to='/login'>Sign In</Link>
						) : (
							<Link to='/register'>Sign Up now</Link>
						)}
					</span>
				</p>
			</div>
		</div>
	);
}

export default BaseForm;

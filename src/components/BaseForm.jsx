import { Link } from 'react-router-dom';
import Header from './Header';
import { validateFormData } from '../utils/validateFormData';
import { useState } from 'react';

function BaseForm(props) {
	const { isSignUpForm } = props;
	const [errors, setErrors] = useState({
		fullname: null,
		email: null,
		password: null,
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.target).entries());
		const { isFullnameValid, isEmailValid, isPasswordValid } =
			validateFormData(data);

		setErrors((prevErrors) => ({
			...prevErrors,
			fullname: isFullnameValid
				? null
				: 'Your full name must be between 8 and 50, there is forbbiden white spaces at the beginning and at the end',
			email: isEmailValid ? null : 'Please provide a valid email',
			password: isPasswordValid
				? null
				: 'Your password must be between 8 and 20, just include letters, numbers, hyphens and underscores',
		}));
	};

	console.log(errors);

	return (
		<div className='w-screen h-screen bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/d433cae9-2dba-4e99-abcc-d06ebdbb818a/EC-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg")]'>
			<Header />
			<div className='w-full max-w-md p-8 mx-auto rounded-md flex flex-col gap-6 bg-black bg-opacity-80'>
				<h1 className='text-white text-3xl font-semibold'>
					{isSignUpForm ? 'Sign Up' : 'Sign In'}
				</h1>
				<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
					{isSignUpForm && (
						<>
							<input
								className='p-3 rounded-md bg-gray-700 text-white'
								type='text'
								name='fullname'
								placeholder='Full Name'
							/>
							{errors.fullname !== null && (
								<p className='text-red-500'>{errors.fullname}</p>
							)}
						</>
					)}
					<input
						className='p-3 rounded-md bg-gray-700 text-white'
						type='email'
						name='email'
						placeholder='Email'
					/>
					{errors.email !== null && (
						<p className='text-red-500'>{errors.email}</p>
					)}
					<input
						className='p-3 rounded-md bg-gray-700 text-white'
						type='password'
						name='password'
						placeholder='Password'
					/>
					{errors.password !== null && (
						<p className='text-red-500'>{errors.password}</p>
					)}
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

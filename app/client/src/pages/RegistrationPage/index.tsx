import { Button, Divider, FormControl, Typography } from "@material-ui/core";
import Cookies from "js-cookie";
import publicIp from "public-ip";
import React, { useState } from "react";
import Footer from "../../components/Footer";
import MainHeader from "../../components/Header";
import Sponsors from "../../components/Sponsors";
import "../../scrollbar.css";
import {
	CustomCheckbox,
	CustomFormControlLabel,
	CustomInputField,
	useStyles,
} from "./styles";

interface RegistrationDetails {
	firstname: string;
	lastname: string;
	email: string;
	company: string;
	jobtitle: string;
	agree: boolean;
}

function RegistrationPage() {
	const classes = useStyles();
	React.useEffect(() => {
		window.scrollTo(0, 0);
	});

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [registrationDetails, setRegistrationDetails] = useState<
		RegistrationDetails
	>({
		firstname: "",
		lastname: "",
		email: "",
		company: "",
		jobtitle: "",
		agree: false,
	});

	const handleAgreementChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRegistrationDetails({
			...registrationDetails,
			[event.target.name]: event.target.checked,
		});
	};

	const handleDetailsChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRegistrationDetails({
			...registrationDetails,
			[event.target.name]: event.target.value,
		});
	};

	const portalId: string = "5310829";
	const formId: string = "1e066180-bed9-4200-a68a-5dbaf595a273";

	const submitForm = async (e) => {
		if (e) e.preventDefault();

		// following isBrowser variable for contextual data to send
		// along to Hubspot so it can organize and track forms as
		// they relate to specific users in the CRM.  The Hubspot
		// plugin provides this hutk value as a cookie.
		// pageName & pageUri  are also tracked

		const ipv4 = (await publicIp.v4()) || "";
		const isBrowser = typeof window !== "undefined";
		const hutk = isBrowser ? Cookies.get("hubspotutk") : null;
		const pageUri = isBrowser ? window.location.href : null;
		const pageName = isBrowser ? document.title : null;
		const postUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

		setLoading(true);

		// This object shape is what's required in the Hubspot API
		// documentation.  There's an additional legalConsentOptions object
		// I've left out here, but would be important if you're working on a
		// legitimate organization's site & they want to be safe from any sort
		// of GDPR guff.
		//
		// Read more here:
		// https://developers.hubspot.com/docs/methods/forms/submit_form_v3

		const body = {
			submittedAt: Date.now(),
			fields: [
				{
					name: "firstname",
					value: registrationDetails.firstname,
				},
				{
					name: "lastname",
					value: registrationDetails.lastname,
				},
				{
					name: "email",
					value: registrationDetails.email,
				},
				{
					name: "company",
					value: registrationDetails.company,
				},
				{
					name: "jobtitle",
					value: registrationDetails.jobtitle,
				},
			],
			context: {
				hutk,
				pageUri,
				pageName,
			},
			ipAddress: ipv4,
		};

		// These specific headers are required for whatever reason,
		// so don't forget to include them.

		fetch(postUrl, {
			method: "post",
			body: JSON.stringify(body),
			headers: new Headers({
				"Content-Type": "application/json",
				Accept:
					"application/json, application/xml, text/plain, text/html, *.*",
			}),
		})
			.then((res) => {
				return res;
			})
			.then((response) => {
				if (response.status === 200) {
					setError(false);
					setLoading(false);
					setRegistrationDetails({
						firstname: "",
						lastname: "",
						email: "",
						company: "",
						jobtitle: "",
						agree: false,
					});
					window.location.href =
						"https://chaoscarnival.io/acknowledgement";
				} else {
					setError(true);
					setLoading(false);
				}
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	};

	return (
		<div
			className="scrollbar scrollbar-primary"
			style={{ background: "#070E23" }}
		>
			<div className={classes.rootContainer}>
				<MainHeader inHomePage={true} linksActive={false} />
				<div className={classes.root}>
					<div className={classes.mainDiv}>
						<div className={classes.formArea}>
							<div className={classes.formDescription}>
								<Typography className={classes.registerForText}>
									Register for
								</Typography>
								<Typography
									className={classes.chaosCarnivalText}
								>
									Chaos Carnival
								</Typography>
								<Typography
									className={classes.infoText}
								>{`Chaos Engineering is a discipline to achieve reliability in systems by breaking things on purpose. Chaos Carnival brings all the chaos practitioners together to share their experiences and learn together.`}</Typography>
							</div>
							<div className={classes.formFields}>
								<FormControl
									data-form-id={formId}
									data-portal-id={portalId}
									disabled={loading}
									onSubmit={submitForm}
								>
									<CustomInputField
										id="contact-first-name"
										type="text"
										required
										name="firstname"
										value={registrationDetails.firstname}
										onChange={handleDetailsChange}
										placeholder="First Name*"
										className={classes.inputField}
									/>
									<CustomInputField
										id="contact-last-name"
										type="text"
										required
										name="lastname"
										value={registrationDetails.lastname}
										onChange={handleDetailsChange}
										placeholder="Last Name*"
										className={classes.inputField}
									/>
									<CustomInputField
										id="contact-email"
										type="email"
										required
										name="email"
										value={registrationDetails.email}
										onChange={handleDetailsChange}
										placeholder="Email*"
										className={classes.inputField}
									/>
									<CustomInputField
										id="contact-company"
										type="text"
										required
										name="company"
										value={registrationDetails.company}
										onChange={handleDetailsChange}
										placeholder="Company*"
										className={classes.inputField}
									/>
									<CustomInputField
										id="contact-job-title"
										type="text"
										required
										name="jobtitle"
										value={registrationDetails.jobtitle}
										onChange={handleDetailsChange}
										placeholder="Job Title*"
										className={classes.inputField}
									/>
									<CustomFormControlLabel
										className={classes.checkboxLabel}
										control={
											<CustomCheckbox
												checked={
													registrationDetails.agree
												}
												onChange={handleAgreementChange}
												name="agree"
												required
												className={classes.checkbox}
											/>
										}
										label="By registering I agree to receive conference updates and some promotional emails from Chaos Carnival and its sponsors."
									/>
									<div className={classes.buttons}>
										<Button
											className={
												registrationDetails.agree &&
												registrationDetails.firstname !==
													"" &&
												registrationDetails.firstname !==
													" " &&
												registrationDetails.lastname !==
													"" &&
												registrationDetails.lastname !==
													" " &&
												registrationDetails.email !==
													"" &&
												registrationDetails.email !==
													" " &&
												registrationDetails.company !==
													"" &&
												registrationDetails.company !==
													" " &&
												registrationDetails.jobtitle !==
													"" &&
												registrationDetails.jobtitle !==
													" "
													? `${classes.registerButtonActive}`
													: `${classes.registerButton}`
											}
											color="primary"
											variant="contained"
											type="submit"
											onClick={(event: any) => {
												if (registrationDetails.agree) {
													submitForm(event);
												}
											}}
										>
											<Typography
												className={classes.registerText}
												style={{
													textTransform: "none",
												}}
											>
												<b>Register</b>
											</Typography>
										</Button>
										{error ? (
											<Typography
												className={classes.errorText}
												style={{
													textTransform: "none",
												}}
											>
												<b>
													There was a problem during
													registration ! <br />
													Please try again.
												</b>
											</Typography>
										) : (
											<div />
										)}
									</div>
								</FormControl>
							</div>
						</div>
					</div>
				</div>

				<div
					style={{
						marginTop: "auto",
						marginLeft: "auto",
						marginRight: "auto",
					}}
					className={classes.sponsorSection}
				>
					<a id="sponsors" href="sponsors"></a>
					<Sponsors />
					<Divider className={classes.divider} />
				</div>

				<div style={{ marginTop: "auto" }}>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default RegistrationPage;

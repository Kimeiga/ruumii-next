import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Checkbox, Container, Group, Input, MantineProvider, NumberInput, Radio, Select, Slider, Space, Stack, Text, TextInput, rem } from '@mantine/core';
import { SliderLabel } from '../components/SliderLabel/SliderLabel';
import { DateInput } from '@mantine/dates';

function interpolateToTime(value: number) {
	if (value < 0 || value > 100) {
		throw new Error('Value must be between 0 and 100');
	}

	// Define the time range in minutes
	const startMinutes = 20 * 60;  // 8:00 PM
	const endMinutes = 4 * 60;     // 4:00 AM (+1 day, so actually 28 * 60)
	const totalMinutes = 24 * 60;

	let interpolatedMinutes = startMinutes + ((endMinutes + totalMinutes - startMinutes) * (value / 100));

	// Adjust if time goes past midnight
	if (interpolatedMinutes >= totalMinutes) {
		interpolatedMinutes -= totalMinutes;
	}

	const hours24Format = Math.floor(interpolatedMinutes / 60);
	const minutes = Math.floor(interpolatedMinutes % 60);
	const amPm = hours24Format >= 12 ? "pm" : "am";
	const hours12Format = hours24Format % 12 || 12; // 0 should be converted to 12

	return `${hours12Format}:${minutes.toString().padStart(2, '0')} ${amPm}`;
}


export default function HomePage() {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<Container>

				<h1>hi welcome to questions</h1>

				<Text size='xl'>Hello, what's your name?</Text>
				<TextInput size="xl"></TextInput>

				<Space h="xl"></Space>

				<Text size="xl">How old are you?</Text>
				<NumberInput size="xl" defaultValue={24}></NumberInput>

				<Space h="xl"></Space>

				<Text size="xl">What age range would you prefer to room with?</Text>
				<SliderLabel defaultValue={[16, 30]} min={0} max={100}></SliderLabel>

				<Space h="xl"></Space>

				<Text size="xl">What is your gender?</Text>
				<Select
					size='xl'
					data={[
						{ value: 'male', label: 'Male' },
						{ value: 'female', label: 'Female' },
						{ value: 'non-binary', label: 'Non Binary' },
						{ value: 'prefer-not-to-say', label: 'Prefer Not To Say' },
						{ value: 'other', label: 'Other' },
					]}
				/>
				<TextInput label="if other, please specify" placeholder='other'></TextInput>

				<Space h="xl"></Space>

				<Text size="xl">What genders would you prefer to room with?</Text>

				<Stack>

					<Checkbox defaultChecked label='All are fine' />
					<Checkbox defaultChecked label='Male' />
					<Checkbox defaultChecked label='Female' />
					<Checkbox defaultChecked label='Non Binary' />
					<Checkbox defaultChecked label='Other' />
				</Stack>

				<Space h="xl"></Space>

				<Text size="xl">What is your sexual orientation?</Text>
				<Select
					size='lg'
					data={[
						{ value: 'heterosexual', label: 'Heterosexual' },
						{ value: 'homosexual', label: 'Homosexual' },
						{ value: 'prefer-not-to-say', label: 'Prefer Not To Say' },
						{ value: 'other', label: 'Other' },
					]}
				/>
				<TextInput label="if other, please specify" placeholder='other'></TextInput>

				<Space h="xl"></Space>

				<Text size="xl">What sexual orientations would you prefer to room with?</Text>

				<Stack>

					<Checkbox defaultChecked label='All are fine' />
					<Checkbox defaultChecked label='Heterosexual' />
					<Checkbox defaultChecked label='Homosexual' />
					<Checkbox defaultChecked label='Other' />
				</Stack>

				<Space h="xl"></Space>

				<Text size='xl'>Where do you want to live?</Text>

				{/* eventually switch this out with the checkbox with image ui mockup from ui.mantine.dev */}
				<Stack>

					<Checkbox label='San Francisco City' />
					<Checkbox label='SF Bay Area' />
					<Checkbox label='New York City' />
					<Checkbox label='Los Angeles' />
					<Checkbox label='Seattle' />
					<Checkbox label='San Diego' />
					<Checkbox label='Toronto' />
					<Checkbox label='Chicago' />
					<Checkbox label='Miami' />
					<Checkbox label='Washington DC' />
					<Checkbox label='Austin' />
					<Checkbox label='London' />
					<Checkbox label='Tokyo' />
					<Checkbox label='Seoul' />
				</Stack>

				<Space h="xl"></Space>

				<Text size='xl'>Where do you live right now?</Text>
				<TextInput></TextInput>

				<Space h="xl"></Space>

				<Text size='xl'>When do you want to move in?</Text>
				<DateInput
					value={new Date()}
				/>

				<Space h="xl"></Space>

				<Text size='xl'>If you are only staying short term, how many months?</Text>
				<NumberInput defaultValue={12}></NumberInput>

				<Space h="xl"></Space>

				<Text size='xl'>What are you willing to pay for rent per month?</Text>
				<Text color='dimmed'>This is you individually, not the entire aparment as a whole.</Text>

				<SliderLabel defaultValue={[1000, 2000]} min={0} max={6000} labelPrefix='$' thumbWidth={540}></SliderLabel>

				<Space h="xl"></Space>

				<Text size='xl'>What is your occupation?</Text>
				<TextInput></TextInput>

				<Space h="xl"></Space>

				<Text size='xl'>Are you currently employeed?</Text>

				<Radio.Group
					name="currently-employed"
					defaultValue='yes'
				>
					<Stack>

						<Radio value='yes' label='Yes' />
						<Radio value='student' label='No, Student' />
						<Radio value='unemployed' label='No, Unemployed' />
						<Radio value='retired' label='No, Retired' />
					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>

				<Text size='xl'>Where do you work?</Text>
				<TextInput></TextInput>

				<Space h="xl"></Space>

				<Text size='xl'>Where did/do you go to school?</Text>
				<TextInput></TextInput>

				<Space h="xl"></Space>

				<Text size='xl'>Are you currently a student?</Text>
				<Radio.Group
					name="currently-student"
					defaultValue='no'
				>
					<Stack>
						<Radio value='no' label='No' />
						<Radio value='yes' label='Yes' />
					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>

				<Text size='xl'>Would you prefer to room with another student?</Text>
				<Radio.Group
					name="prefer-student"
					defaultValue='doesnt-matter'
				>
					<Stack>
						<Radio value="doesnt-matter" label="Doesn't matter" />
						<Radio value="same-school" label='Yes, from the same school as me' />
						<Radio value="any-school" label='Yes, from any school' />
						<Radio value="no" label='No' />

					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>

				<Text size='xl'>How clean are you?</Text>

				<Radio.Group
					name="cleanliness"
					defaultValue='3'
				>
					<Stack>
						<Radio value="1" label="I tend to let things get messy." />
						<Radio value="2" label="I clean occasionally, but it's not a priority." />
						<Radio value="3" label="I maintain a basic level of cleanliness." />
						<Radio value="4" label="I like things tidy and clean regularly." />
						<Radio value="5" label="I make everything spotless." />
					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>

				<Text size='xl'>How clean must your roommates be?</Text>

				<Radio.Group
					name="cleanliness-preference"
					defaultValue='3'
				>
					<Stack>
						<Radio value="1" label="It's ok for things to get messy." />
						<Radio value="2" label="They should clean occasionally, but it's not a priority." />
						<Radio value="3" label="They need to maintain a basic level of cleanliness." />
						<Radio value="4" label="They should things tidy and clean regularly." />
						<Radio value="5" label="Everything must be spotless." />
					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>

				<Text size='xl'>Are you ok with guests coming over?</Text>


				<Radio.Group
					name="guests-allowed"
					defaultValue='3'
				>
					<Stack>
						<Radio value="1" label="Never - I prefer not to have any guests over." />
						<Radio value="2" label="Rarely - I'm okay with guests on very special occasions or with advanced notice." />
						<Radio value="3" label="Sometimes - I'm fine with guests once in a while, but I appreciate a heads-up." />
						<Radio value="4" label="Often - I enjoy having guests regularly, but I still value some private time." />
						<Radio value="5" label="All the time - I love company and am comfortable with guests being present all the time." />
					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>

				<Text size='xl'>Can they stay overnight?</Text>


				<Radio.Group
					name="overnight-guests"
					defaultValue='3'
				>
					<Stack>
						<Radio value="1" label="Never - I'm not comfortable with guests staying overnight." />
						<Radio value="2" label="In Emergencies - Only in special circumstances or emergencies." />
						<Radio value="3" label="Occasionally - I'm okay with occasional sleepovers, given some notice." />
						<Radio value="4" label="Regularly - I don't mind guests staying often, but I'd like to know in advance." />
						<Radio value="5" label="Anytime - I'm completely comfortable with guests staying overnight whenever they wish." />
					</Stack>
				</Radio.Group>
				<Space h="xl"></Space>

				<Text size='xl'>How often will you have guests over?</Text>
				<Radio.Group
					name="your-guests"
					defaultValue='3'
				>
					<Stack>
						<Radio value="1" label="Rarely - I hardly ever invite guests over to the house." />
						<Radio value="2" label="Monthly - I might have guests over once a month or for special occasions." />
						<Radio value="3" label="Bi-weekly - I tend to invite guests over a couple of times a month." />
						<Radio value="4" label="Weekly - I usually have guests over about once a week." />
						<Radio value="5" label="Frequently - I often have guests over multiple times a week or even daily." />
					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>


				<Text size='xl'>Who are these guests?</Text>

				<Stack>

					<Checkbox label='Friends' />
					<Checkbox label='Boyfriend' />
					<Checkbox label='Girlfriend' />
					<Checkbox label='Other Signficant Other' />
					<Checkbox label='Family' />

				</Stack>
				<Space h="xl"></Space>

				<Text size='xl'>Is it ok for your roommates to have parties?</Text>

				<Radio.Group
					name="parties-ok"
					defaultValue='3'
				>
					<Stack>
						<Radio value="1" label="Never - I'm not comfortable with parties at our place at all." />
						<Radio value="2" label="Rare Occasions - I'm okay with it, but only for special events or milestones." />
						<Radio value="3" label="Monthly - I'm fine with occasional parties, maybe once a month." />
						<Radio value="4" label="Bi-weekly - I'm open to regular gatherings, about every other week." />
						<Radio value="5" label="Anytime - I'm totally fine with it, as long as I'm informed in advance." />
					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>

				<Text size='xl'>How often will you want to host parties?</Text>

				<Radio.Group
					name="your-parties"
					defaultValue='3'
				>
					<Stack>
						<Radio value="1" label="Never - I have no intentions of hosting parties." />
						<Radio value="2" label="Rare Occasions - Maybe once or twice a year for special events." />
						<Radio value="3" label="Quarterly - I'd like to host a gathering every few months." />
						<Radio value="4" label="Monthly - I enjoy social events and might want to host one monthly." />
						<Radio value="5" label="Regularly - I'm very social and might have gatherings or small parties often, even weekly." />
					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>

				<Text size='xl'>When do you sleep?</Text>

				<Slider labelAlwaysOn mt="xl" mb="xl" step={3.125} defaultValue={50} marks={[{ value: 0, label: '8 pm' }, { value: 25, label: '10 pm' }, { value: 50, label: '12 am' }, { value: 75, label: '2 am' }, { value: 100, label: '4 am' },]} label={(value) => interpolateToTime(value)}></Slider>

				<Space h="xl"></Space>

				<Text size='xl'>How loud is it ok for your roommates to be when you are sleeping?</Text>

				<Radio.Group
					name="loudness-while-sleeping"
					defaultValue='3'
				>

					<Stack>
						<Radio value="1" label="It should be silent (0 dB). I don't want to hear any noise when I'm sleeping." />
						<Radio value="2" label="A little background noise is okay, like a soft whisper or the hum of a fan (20-30 dB)." />
						<Radio value="3" label="Conversational volume is acceptable (60 dB). I'm used to the typical sounds of people talking." />
						<Radio value="4" label="I can handle a bit of loudness, but not too extreme (70-80 dB). Think of it like a TV at a reasonable volume." />
						<Radio value="5" label="I'm okay with party-level noise (90 dB). As long as it's not every night, I can sleep through it." />
					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>


				<Text size='xl'>Do you smoke?</Text>
				<Radio.Group
					name="smoking"
					defaultValue='1'
				>

					<Stack>
						<Radio value="1" label="No, never." />
						<Radio value="2" label="Sometimes." />
						<Radio value="3" label="Habitually." />
					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>

				<Text size='xl'>If so, what do you smoke?</Text>

				<Stack>

					<Checkbox label='Marijuana' />
					<Checkbox label='Cigarettes' />
					<Checkbox label='Cigars' />
					<Checkbox label='Vape' />
					<Checkbox label='Hookah' />
					<Checkbox label='Other' />

				</Stack>

				<Space h="xl"></Space>
				<Text size='xl'>Are you ok with your roommates smoking?</Text>
				<Radio.Group
					name="smoking-ok"
					defaultValue='1'
				>
					<Stack>
						<Radio value="1" label="No, never." />
						<Radio value="3" label="Only outside." />
						<Radio value="3" label="Only in their room." />
						<Radio value="2" label="Yes, anywhere is fine." />
					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>

				<Text size='xl'>Do you drink?</Text>

				<Radio.Group
					name="drinking"
					defaultValue='1'
				>
					<Stack>
						<Radio value="1" label="No, never." />
						<Radio value="2" label="Sometimes." />
						<Radio value="3" label="Habitually." />
					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>

				<Text size='xl'>Are you ok with your roommates drinking alcohol?</Text>

				<Radio.Group
					name="drinking-preference"
					defaultValue='3'
				>
					<Stack>
						<Radio value="1" label="No." />
						<Radio value="2" label="Not in the apartment." />
						<Radio value="3" label="Sure, doesn't matter." />
					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>

				<Text size='xl'>How close do you want to be with your roommates?</Text>

				<Radio.Group
					name="closeness-preference"
					defaultValue='3'
				>
					<Stack>
						<Radio value="1" label="I prefer to keep to myself and live independently, sharing only the living space." />
						<Radio value="2" label="I'm open to occasional conversations and meals together, but I mostly value my personal time." />
						<Radio value="3" label="I hope we can build a friendly relationship, spending some evenings or weekends together." />
						<Radio value="4" label="I'd love for us to regularly do activities together, like watching movies or having game nights." />
						<Radio value="5" label="I envision us being close friends, frequently hanging out, playing games, and going out together." />
					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>

				<Text size='xl'>What kind of places do you want to go out iwth your roommates to?</Text>

				<Stack>

					<Checkbox label='Bars' />
					<Checkbox label='Clubs' />
					<Checkbox label='Restaurants' />
					<Checkbox label='Concerts' />
					<Checkbox label='Movies' />
					<Checkbox label='Shopping' />
					<Checkbox label='Other' />

				</Stack>

				<Space h="xl"></Space>

				<Text size='xl'>Will you be bringing any pets?</Text>

				<Radio.Group
					name="pets"
					defaultValue='1'
				>
					<Stack>
						<Radio value="1" label="No." />
						<Radio value="2" label="Yes." />
					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>

				<Text size='xl'>If so, what kind of pets?</Text>

				<Stack>
					<Checkbox label='Small Dog' />
					<Checkbox label='Big Dog' />
					<Checkbox label='Cat' />
					<Checkbox label='Bird' />
					<Checkbox label='Fish' />
					<Checkbox label='Reptile' />
					<Checkbox label='Rodent' />
					<Checkbox label='Other' />
				</Stack>

				<Space h="xl"></Space>

				<Text size='xl'>Do you have any pet allergies?</Text>

				<Stack>
					<Checkbox label='Cat' />
					<Checkbox label='Dog' />
					<Checkbox label='Rabbit' />
					<Checkbox label='Bird' />
					<Checkbox label='Fish' />
					<Checkbox label='Other' />
				</Stack>

				<Space h="xl"></Space>

				<Text size='xl'>Which pets would you be ok with your roommates bringing?</Text>


				<Stack>
					<Checkbox label='Small Dog' />
					<Checkbox label='Big Dog' />
					<Checkbox label='Cat' />
					<Checkbox label='Bird' />
					<Checkbox label='Fish' />
					<Checkbox label='Reptile' />
					<Checkbox label='Rodent' />
					<Checkbox label='Other' />
				</Stack>

				<Space h="xl"></Space>

				<Text size='xl'>Do you have any allergies?</Text>

				<Stack>
					<Checkbox label='Pollen' />
					<Checkbox label='Dust' />
					<Checkbox label='Mold' />
					<Checkbox label='Peanuts' />
					<Checkbox label='Other' />
				</Stack>

				<Space h="xl"></Space>

				<Text size='xl'>How often do you cook?</Text>

				<Radio.Group

					name="cooking"
					defaultValue='3'
				>
					<Stack>
						<Radio value="1" label="Never - I don't cook at all." />
						<Radio value="2" label="Rarely - I cook once in a while, but I mostly eat out." />
						<Radio value="3" label="Sometimes - I cook a few times a week." />
						<Radio value="4" label="Often - I cook most days of the week." />
						<Radio value="5" label="All the time - I cook every day." />
					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>

				<Text size='xl'>How do you clean up after cooking or using the kitchen?</Text>

				<Radio.Group
					name="kitchen-cleanliness"
					defaultValue='3'
				>
					<Stack>
						<Radio value="1" label="I usually leave dishes and cookware out after cooking; I'll clean them up when I need them next." />
						<Radio value="2" label="I might leave some dishes in the sink for a day or two, but I try to clean them within that timeframe." />
						<Radio value="3" label="I clean up most items right after cooking, but occasionally might leave a pan to soak overnight." />
						<Radio value="4" label="I always clean up immediately after cooking, ensuring all dishes are washed and surfaces are wiped down." />
						<Radio value="5" label="I clean meticulously after every use, washing all dishes, wiping down surfaces, and ensuring everything is returned to its proper place." />
					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>

				<Text size='xl'>Is it ok if your roommates eat your food/use your groceries?</Text>

				<Radio.Group
					name="food-sharing"
					defaultValue='3'
				>
					<Stack>
						<Radio value="1" label="No, I prefer to keep my food separate." />
						<Radio value="2" label="I'm okay with sharing some items, but I'd like to keep most of my food separate." />
						<Radio value="3" label="Yes they can use whatever." />
					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>

				<Text size='xl'>Do you have any dietary restrictions?</Text>

				<Stack>
					<Checkbox label='Vegetarian' />
					<Checkbox label='Vegan' />
					<Checkbox label='Gluten Free' />
					<Checkbox label='Kosher' />
					<Checkbox label='Halal' />
					<Checkbox label='Other' />
				</Stack>

				<Space h="xl"></Space>

				<Text size='xl'>Do you have any food allergies?</Text>

				<Stack>
					<Checkbox label='Peanuts' />
					<Checkbox label='Tree Nuts' />
					<Checkbox label='Shellfish' />
					<Checkbox label='Dairy' />
					<Checkbox label='Eggs' />
					<Checkbox label='Soy' />
					<Checkbox label='Wheat' />
					<Checkbox label='Other' />
				</Stack>

				<Space h="xl"></Space>

				<Text size='xl'>What temperature would you prefer to keep the apartment at?</Text>

				<Slider min={66} max={78} label={(value) => `${value}°F, ${((value - 32) * 5 / 9).toFixed(1)}°C`} step={0.1} mt='xl'
					mb='xl' labelAlwaysOn defaultValue={72}></Slider>

				<Space h="xl"></Space>

				<Text size='xl'>Do you have a preference for a/c in the unit?</Text>

				<Stack>
					<Checkbox value="1" label="Cooling" />
					<Checkbox value="1" label="Heating" />
					<Checkbox value="1" label="Doesn't matter" />
				</Stack>

				<Space h="xl"></Space>

				<Text size='xl'>Do you have a preference for laundry in the unit?</Text>

				<Stack>
					<Checkbox value="1" label="Yes" />
					<Checkbox value="1" label="No" />
					<Checkbox value="1" label="Doesn't matter" />
				</Stack>

				<Space h="xl"></Space>

				<Text size='xl'>Do you have a preference for parking in the unit?</Text>

				<Stack>
					<Checkbox value="1" label="Yes" />
					<Checkbox value="1" label="No" />
					<Checkbox value="1" label="Doesn't matter" />
				</Stack>

				<Space h="xl"></Space>

				{/* <Text size='xl'>Do you have a preference for a dishwasher in the unit?</Text> */}

				<Text size='xl'>What's your ethnicity?</Text>

				<Stack>
					<Checkbox value="white" label="White/European Descent" />
					<Checkbox value="black" label="Black/African Descent" />
					<Checkbox value="east-asian" label="East Asian" />
					<Checkbox value="south-asian" label="South Asian" />
					<Checkbox value="hispanic" label="Hispanic/Latino" />
					<Checkbox value="pacific-islander" label="Pacific Islander" />
					<Checkbox value="native-american" label="Native American" />
					<Checkbox value="middle-eastern" label="Middle Eastern" />
					<Checkbox value="near-eastern" label="Near Eastern" />
					<Checkbox value="central-asian" label="Central Asian" />
					<Checkbox value="other" label="Other" />
				</Stack>

				<Space h="xl"></Space>

				<Text size='xl'>More detail (optional)?</Text>
				<TextInput></TextInput>

				<Space h="xl"></Space>

				<Text size='xl'>What's your nationality (optional)?</Text>
				<TextInput></TextInput>

				<Space h="xl"></Space>

				<Text size='xl'>What languages do you speak?</Text>

				<TextInput />

				<Space h="xl"></Space>

				<Text size='xl'>Would you prefer your roommates to be some ethnicity?</Text>
				<Text size='md'>You must disgorge your ethnicity in order to have an ethnic preference in others.</Text>

				<Stack>
					<Checkbox defaultChecked value="open-to-all" label="Open to all" />
					<Checkbox value="white" label="White/European Descent" />
					<Checkbox value="black" label="Black/African Descent" />
					<Checkbox value="east-asian" label="East Asian" />
					<Checkbox value="south-asian" label="South Asian" />
					<Checkbox value="hispanic" label="Hispanic/Latino" />
					<Checkbox value="pacific-islander" label="Pacific Islander" />
					<Checkbox value="native-american" label="Native American" />
					<Checkbox value="middle-eastern" label="Middle Eastern" />
					<Checkbox value="near-eastern" label="Near Eastern" />
					<Checkbox value="central-asian" label="Central Asian" />
					<Checkbox value="other" label="Other" />
				</Stack>

				<Space h="xl"></Space>

				<Text size='xl'>Do you have religious beliefs?</Text>

				<Stack>

					<Checkbox value="agnostic" label="Agnostic" />
					<Checkbox value="atheist" label="Atheist" />
					<Checkbox value="buddhist" label="Buddhist" />
					<Checkbox value="christian" label="Christian (Protestant)" />
					<Checkbox value="catholic" label="Catholic" />
					<Checkbox value="hindu" label="Hindu" />
					<Checkbox value="jewish" label="Jewish" />
					<Checkbox value="muslim" label="Muslim" />
					<Checkbox value="sikh" label="Sikh" />
					<Checkbox value="other" label="Other" />
				</Stack>

				<Space h="xl"></Space>

				<Text size='xl'>How religious are you (if you are)?</Text>

				<Radio.Group
					name="religiosity"
					defaultValue='3'
				>
					<Stack>
						<Radio value="1" label="Technically." />
						<Radio value="2" label="Customarily." />
						<Radio value="3" label="Devout." />
					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>

				<Text size='xl'>Would you prefer your roommates to be some religion?</Text>

				<Radio.Group
					name="religion-preference"
					defaultValue='3'
				>
					<Stack>
						<Radio value="1" label="Prefer same to mine." />
						<Radio value="2" label="Prefer not religious." />
						<Radio value="3" label="Does not matter." />
					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>

				<Text size='xl'>Do you have any political beliefs?</Text>

				<Stack>
					<Checkbox value="conservative" label="Conservative" />
					<Checkbox value="liberal" label="Liberal" />
					<Checkbox value="independent" label="Independent" />
				</Stack>

				<Space h="xl"></Space>

				<Text size='xl'>Would you prefer your roommates to be some political affiliation?</Text>

				<Radio.Group
					name="political-preference"
					defaultValue='3'
				>
					<Stack>
						<Radio value="1" label="Prefer same to mine." />
						<Radio value="2" label="Prefer not political." />
						<Radio value="3" label="Does not matter." />
					</Stack>
				</Radio.Group>

				<Space h="xl"></Space>

				<Text size='xl'>How extroverted are you?</Text>



			</Container>
		</MantineProvider>
	);
}

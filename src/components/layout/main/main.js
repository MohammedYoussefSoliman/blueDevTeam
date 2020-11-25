import React, {useState} from 'react';
import Hero from '../../hero/hero';
import Steps from '../../steps/steps';
import Section from '../../section/section';
import Solution from '../../solution/solution';
import Footer from '../../footer/footer';
import Header from '../header/header';

const Main = () => {

    const [Sections, setSections] = useState([
        {
            title: "Why do you need a time tracker ??",
            content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.",
            reverse: true,
            avatar: "Confused"
        },
        {
            title: "Why choosing us ?",
            content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
            reverse: false,
            avatar: "Satisfied"
        },
    ]);

    const [lists, setLists] = useState([
        {
            title: 'PRODUCTS',
            items: [
                {
                    name: 'Use Cases',
                    to: 'UseCases'
                },
                {
                    name: 'iOS App',
                    to: 'iOSApp'
                },
                {
                    name: 'Screen Recorder',
                    to: 'ScreenRecorder'
                },
                {
                    name: 'Help Center',
                    to: 'Help'
                },
                {
                    name: 'What’s New',
                    to: 'New'
                },
                {
                    name: 'System Status',
                    to: 'SystemStatus'
                },
                {
                    name: 'Roadmap',
                    to: 'Roadmap'
                }
            ]
        },
        {
            title: 'ABOUT LOOM',
            items: [
                {
                    name: 'Company',
                    to: 'Company'
                },
                {
                    name: 'iOS App',
                    to: 'iOSApp'
                },
                {
                    name: 'Jobs',
                    to: 'Jobs'
                },
                {
                    name: 'Blog',
                    to: 'Blog'
                },
                {
                    name: 'Press',
                    to: 'Press'
                }
            ]
        },
        {
            title: 'LEGAL',
            items: [
                {
                    name: 'Privacy for Humans',
                    to: 'Privacy'
                },
                {
                    name: 'Privacy Policy',
                    to: 'PrivacyPolicy'
                },
                {
                    name: 'Terms of Use',
                    to: 'Terms'
                }
            ]
        }
    ])

    return (
        <> 
            <Header />
            <Hero/>
            <Steps />
            {Sections.map(sect => (
                <Section key={sect.title} {...sect} />
            ))}
            <Solution />
            <Footer lists={lists}/>
        </>
    )
}

export default Main
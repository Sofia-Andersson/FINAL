import React from 'react'
import { Link } from "react-router-dom";
import { Button } from '../styledComponents/Button';
import styled from 'styled-components';
import { MainWrapper } from '../styledComponents/MainWrapper';
import { Footer } from '../components/Footer';

export const AboutPage = () => {
    return (
    <>
    <AboutWrapper>
    <div>
        <h2>THNX is a gratitude journal created to facilitate your daily writing.</h2>
        <h3>Why a gratitude Journal?</h3>
        <AboutP>A gratitude journal forces ourselves to pay attention to the good things in life we might otherwise take for granted. In that way, we start to become more attuned to the everyday sources of pleasure around us—and the emotional tone of our life can shift in profound ways.</AboutP> 
        <h3>How to start?</h3>
        <AboutP>Write down three things for which you feel grateful. The physical record is important—don’t just do this exercise in your head. The things you list can be relatively small in importance (“The tasty sandwich I had for lunch today.”) or relatively large (“My sister gave birth to a healthy baby boy.”). The goal of the exercise is to remember a good event, experience, person, or thing in your life—then enjoy the good emotions that come with it.</AboutP>
        <h3>Give me some more advice please!</h3>  
        <AboutP>1. Be as specific as possible—specificity is key to fostering gratitude. “I’m grateful that my co-workers brought me soup when I was sick on Tuesday” will be more effective than “I’m grateful for my co-workers. <br></br>
        2. Go for depth over breadth. Elaborating in detail about a particular person or thing for which you’re grateful carries more benefits than a superficial list of many things. <br></br>
        3. Get personal. Focusing on people to whom you are grateful has more of an impact than focusing on things for which you are grateful. <br></br>
        4. Try subtraction, not just addition. Consider what your life would be like without certain people or things, rather than just tallying up all the good stuff. Be grateful for the negative outcomes you avoided, escaped, prevented, or turned into something positive—try not to take that good fortune for granted. <br></br>
        5. See good things as “gifts.” Thinking of the good things in your life as gifts guards against taking them for granted. Try to relish and savor the gifts you’ve received. <br></br>
        6. Savor surprises. Try to record events that were unexpected or surprising, as these tend to elicit stronger levels of gratitude. <br></br>
        7. Revise if you repeat. Writing about some of the same people and things is OK, but zero in on a different aspect in detail. <br></br>
        8. Write regularly. Whether you write daily or every other day, commit to a regular time to journal, then honor that commitment.</AboutP> 
    </div>    
    <div>
    <CreatedByP><span>THNX </span>is built by <a href='https://linda-norbergs-portfolio.netlify.app'>Linda Norberg</a> and <a href='https://sofia-andersson.netlify.app/'>Sofia Andersson</a> as the final project of Technigo Web Development Bootcamp 2022/2023</CreatedByP>
    <SourceP>Image: Photo from Unsplash<br></br>
    Information Gratitude Journaling: <a href='https://ggia.berkeley.edu/practice/gratitude_journal#:~:text=A%20gratitude%20journal%20forces%20ourselves,can%20shift%20in%20profound%20ways'>Berkeley.edu</a>.
    </SourceP>
    <Link to="/">
        <Button>TO STARTPAGE</Button>
    </Link>
    </div>
    </AboutWrapper>
 <Footer/>
 </>
 );
};

const AboutP = styled.p`
font-size: 14px;
`;

const AboutWrapper = styled(MainWrapper)`
    color: var(--color-white);
    overflow: scroll;
    max-width: 70vw;
    overflow-x: hidden;
    padding: 20px 40px;
    height: 450px;
    word-wrap: break-word;

    @media (min-width: 577px) and (max-width: 1440px) {
        height: 420px;
    }
`;

const CreatedByP = styled.p`
a {
    color: #eeeeee;
    text-decoration: underline;
}
`;
const SourceP = styled.p` 
    color: #919090;
    a {
        color: #919090;
        text-decoration: underline;
    }
`;
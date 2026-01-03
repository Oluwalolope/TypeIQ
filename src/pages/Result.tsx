import { Link } from 'react-router-dom';
import iconCompleted from '../assets/images/icon-completed.svg';
import iconNewPersonalBest from '../assets/images/icon-new-pb.svg';
import iconRestart from '../assets/images/icon-restart.svg';
import { useState } from 'react';

const Result  = () => {
    const [appCtx] = useState<'firstTime' | 'highScoreBeaten' | null>(null);

    let message = {
        title:  'test complete!',
        description: 'Solid run. Keep pushing to beat your high score.',
    };
    
    if (appCtx === 'firstTime') {
        message = {
            title:  'baseline established!',
            description: 'You’ve set the bar. Now the real challenge begins—time to beat it.',
        };
    }

    if (appCtx === 'highScoreBeaten') {
        message = {
            title:  'high score smashed!',
            description: 'You’re getting faster. That was incredible typing.',
        };
    }

    const userStats = [
        {
            title: 'WPM',
            value: '85'
        },
        {
            title: 'Accuracy',
            value: '90%'
        },
        {
            title: 'Characters',
            value: '120/5'
        },
    ];


    return ( 
        <div className='flex flex-col items-center gap-8 mt-8 md:mt-20'>
            <img className='size-20' src={appCtx === 'highScoreBeaten' ? iconNewPersonalBest : iconCompleted} alt={appCtx === 'highScoreBeaten' ? 'High Score Beaten' : 'Test Completed'} />

            <div className='space-y-2.5'>
                <h1 className='text-white text-center capitalize font-sora font-bold text-2xl md:text-[2.5rem]'>{message.title}</h1>

                <h2 className='text-neutral text-center font-sora font-normal text-[1rem] md:text-xl'>{message.description}</h2>
            </div>

            <div className='w-full grid md:grid-flow-col gap-4 md:gap-5 pb-4 md:pt-5 md:pb-8'>
                {userStats.map((stat, index) => <div key={index} className='border border-neutral w-full min-h-23 rounded-lg px-6 py-4 space-y-6'>
                    <h3 className='font-sora text-neutral font-normal text-xl'>{stat.title}:</h3>
                    <p className='font-sora text-white font-bold text-2xl'>{stat.value}</p>
                </div>)}
            </div>

            <Link to='/' className='bg-white hover:bg-white/90 transition-all ease-in-out duration-100 font-sora px-4 py-2.5 rounded-[0.75rem] text-xl font-semibold'>Go Again <img className='inline-block invert ps-2.5' src={iconRestart} alt='restart' /> </Link>
        </div>
    );
}

export default Result;
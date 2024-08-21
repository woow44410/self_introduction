import FrontEnd from './front_end';
import BackEnd from './back_end';
import Other from './other';

export default function SkillsPage({ type }) {
    switch (type) {
        case 'front-end':
            return <FrontEnd />;
        case 'back-end':
            return <BackEnd />;
        case 'other':
            return <Other />;
        default:
            return <div>請選擇一個Button。</div>;
    }
}

import FrontEnd from './front_end';
import BackEnd from './back_end';
import Other from './other';

export default function SkillsPage({ type }) {
    if (type === 'front-end') {
        return <FrontEnd />;
    } else if (type === 'back-end') {
        return <BackEnd />;
    } else if (type === 'other') {
        return <Other />;
    } else {
        return <div>請選擇一個Button。</div>;
    }
}

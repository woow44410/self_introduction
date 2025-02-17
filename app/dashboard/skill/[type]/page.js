import FrontEnd from './front_end';
import BackEnd from './back_end';
import Other from './other';

// 添加 generateStaticParams 函數
export function generateStaticParams() {
    return [
        { type: 'front-end' },
        { type: 'back-end' },
        { type: 'other' }
    ]
}

export default function SkillsPage({ params }) {
    // 添加防護檢查
    if (!params || !params.type) {
        return <div>載入中...</div>;
    }

    const { type } = params;

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

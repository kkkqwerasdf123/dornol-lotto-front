import {Draw} from "@/types";
import DrawBanner from "@/components/DrawBanner";


export default async function Home({searchParams}: { searchParams: { drawNo?: number } }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/lotto/draws/ongoing`);
    if (!response.ok) {
        <div>오류가 발생했습니다.1</div>
    }

    const ongoingDraw: Draw = await response.json()

    const {drawNo} = await searchParams;

    return (
            <DrawBanner drawNo={drawNo ? drawNo : (ongoingDraw.drawNo - 1)}
                        ongoingDrawNo={ongoingDraw.drawNo}/>
    );
}

import {Draw} from "@/types";
import Link from "next/link";
import style from './DrawBanner.module.css'

export default async function DrawBanner({drawNo, ongoingDrawNo}: { drawNo: number, ongoingDrawNo: number }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/lotto/draws/${drawNo}`);

    if (!response.ok) {
        return (
            <div>오류가 발생했습니다.2</div>
        )
    }

    const draw: Draw = await response.json()

    return (
        <div className={style.container}>
            <div className={style.arrow}>
                <Link href={`?drawNo=${draw.drawNo - 1}`} replace={true}>{"<"}</Link>
            </div>
            <div>
                <p>회차 : {draw.drawNo}</p>
                <p>번호 : {draw.numbers.map(it => it.number).join(',')}</p>
            </div>
            <div className={style.arrow}>
                {
                    ongoingDrawNo === (draw.drawNo + 1) ? null :
                        <Link href={`?drawNo=${draw.drawNo + 1}`} replace={true}>{">"}</Link>
                }
            </div>
        </div>
    )
}
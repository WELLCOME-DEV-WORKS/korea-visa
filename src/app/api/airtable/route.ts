import Airtable from "airtable";
import { NextRequest, NextResponse } from "next/server";

// Well-Come DB
// const airtableApiKey = process.env.WELLCOME_DB_KEY;
// const airtableBaseId = process.env.WELLCOME_DB_ID;
// const airtableTableName = process.env.AIRTABLE_TABLE_NAME as string;

// products DB
const airtableApiKey = process.env.PRODUCTS_DB_KEY;
const airtableBaseId = process.env.PRODUCTS_DB_ID;
const airtableTableName = process.env.AIRTABLE_TABLE_NAME as string;

Airtable.configure({ apiKey: airtableApiKey });

if (!airtableApiKey) {
  throw new Error("WELLCOME_DB_KEY 환경 변수가 정의되어 있지 않습니다.");
}
if (!airtableBaseId) {
  throw new Error("WELLCOME_DB_ID 환경 변수가 정의되어 있지 않습니다.");
}
if (!airtableTableName) {
  throw new Error("AIRTABLE_TABLE_NAME 환경 변수가 정의되어 있지 않습니다.");
}

const base = Airtable.base(airtableBaseId);

export async function GET() {
  try {
    const records = await base(airtableTableName)
      .select({
        maxRecords: 100,
        view: "Grid view",
      })
      .firstPage();

    return NextResponse.json(records);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

// 생성
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newRecord = await base(airtableTableName).create([
      {
        fields: {
          productsName: body.productsName, // 제품명
          price: body.price, // 제품 가격
        },
      },
    ]);

    return NextResponse.json(newRecord);
  } catch (error) {
    console.error("데이터 생성 오류", error);
    return NextResponse.error();
  }
}

// 업데이트
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    // Airtable의 레코드 업데이트
    const updatedRecord = await base(airtableTableName).update([
      {
        id: body.id, // 수정할 레코드 ID
        fields: {
          productsName: body.productsName,
          price: body.price,
        },
      },
    ]);

    return NextResponse.json(updatedRecord);
  } catch (error) {
    console.error("업데이트 오류", error);
    return NextResponse.error();
  }
}

// 삭제
export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    await base(airtableTableName).destroy([body.id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("삭제 오류", error);
    return NextResponse.error();
  }
}

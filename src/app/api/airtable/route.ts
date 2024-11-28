import Airtable from "airtable";
import { NextResponse } from "next/server";

const airtableApiKey = process.env.WELLCOME_DB_KEY;
const airtableBaseId = process.env.WELLCOME_DB_ID;
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
        maxRecords: 10,
        view: "Grid view",
      })
      .firstPage();

    return NextResponse.json(records);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

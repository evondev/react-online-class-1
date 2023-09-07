import { NextApiRequest, NextApiResponse } from "next";
import properties from "@data/properties.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  let filteredData = properties;
  // const params: {
  //   text?: string;
  //   state?: string;
  //   status?: string;
  //   type?: string;
  //   country?: string;
  //   offset?: string;
  //   limit?: string;
  // } = req.nextUrl.searchParams;
  // const { text, state, status, type, country, offset, limit } = params;
  // if (text) {
  //   filteredData = filteredData.filter((item) => {
  //     return (
  //       item.title.toLowerCase().includes(text.toLowerCase() as string) ||
  //       item.address.toLowerCase().includes(text.toLowerCase() as string)
  //     );
  //   });
  // }
  // if (state) {
  //   filteredData = filteredData.filter((item) => {
  //     return item.state === state;
  //   });
  // }
  // if (status) {
  //   filteredData = filteredData.filter((item) => {
  //     return item.status === status;
  //   });
  // }
  // if (type) {
  //   filteredData = filteredData.filter((item) => {
  //     return item.type === type;
  //   });
  // }
  // if (country) {
  //   filteredData = filteredData.filter((item) => {
  //     return item.country === country;
  //   });
  // }
  const limit = req.nextUrl.searchParams.get("limit");
  const skip = req.nextUrl.searchParams.get("skip");
  if (skip && limit) {
    const start = parseInt(skip as string);
    const end = start + parseInt(limit as string);
    filteredData = filteredData.slice(start, end);
  }
  // res.status(200).json({
  //   properties: filteredData,
  //   total: properties.length,
  // });

  return NextResponse.json({
    properties: filteredData,
    total: properties.length,
  });
}

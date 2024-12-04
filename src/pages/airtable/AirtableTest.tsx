"use client";
import React, { useEffect, useState } from "react";

interface Record {
  id: string;
  productsName: string;
  price: number;
}

const AirtableTest = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState<string>("");
  const [editPrice, setEditPrice] = useState<number | null>(null);

  // 데이터를 가져오는 함수
  const fetchRecords = async () => {
    const res = await fetch("/api/airtable");
    const data = await res.json();

    // Airtable의 데이터를 fields 속성으로 매핑
    const mappedData = data.map((record: any) => ({
      id: record.id,
      productsName: record.fields.productsName, // fields에서 가져오기
      price: record.fields.price, // fields에서 가져오기
    }));

    setRecords(mappedData); // 상태 업데이트
  };

  // 데이터 생성
  const createRecord = async () => {
    const res = await fetch("/api/airtable", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productsName: name, price }),
    });
    if (res.ok) {
      fetchRecords(); // 데이터 갱신
      setName("");
      setPrice(0);
    }
  };

  // 데이터 수정
  const startEdit = (record: Record) => {
    setEditId(record.id);
    setEditName(record.productsName);
    setEditPrice(record.price);
  };

  const updateRecord = async () => {
    if (editId && editName && editPrice !== null) {
      const res = await fetch("/api/airtable", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editId,
          productsName: editName,
          price: editPrice,
        }),
      });

      if (res.ok) {
        fetchRecords(); // 데이터 갱신
        setEditId(null); // 수정 상태 초기화
        setEditName("");
        setEditPrice(null);
      }
    }
  };

  // 데이터 삭제
  const deleteRecord = async (id: string) => {
    const res = await fetch("/api/airtable", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (res.ok) fetchRecords(); // 데이터 갱신
  };

  // 컴포넌트가 로드되었을 때 데이터 가져오기
  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-10">❤️Airtable CRUD 테스트❤️</h1>
        <div className="flex flex-row  w-full text-center items-center">
          <h3 className="text-2xl font-bold mb-2 w-1/3 mx-3"> DB리스트 </h3>
          <h3 className="text-2xl font-bold mb-2 w-1/3 mx-3"> 업데이트 </h3>
          <h3 className="text-2xl font-bold mb-2 w-1/3 mx-3"> 수정/삭제 </h3>
        </div>
        <div className="flex flex-row  w-full mx-14">
          <div className="mb-6 w-1/3 mx-3">
            {records.map((record) => (
              <div
                key={record.id}
                className="flex text-left items-center p-4 border rounded-lg mb-2"
              >
                <div className="flex w-full justify-between mx-6">
                  <p className=" font-bold">{record.productsName}</p>
                  <p className=" text-gray-600">{record.price}원</p>
                </div>
              </div>
            ))}
          </div>

          {/* 데이터 생성 */}
          <div className="w-1/3 mx-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                createRecord();
              }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                  placeholder="제품명"
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full p-2 border rounded-lg"
                  placeholder="제품가격"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Add Record
              </button>
            </form>
          </div>
          <div className="mx-3 w-1/3">
            <div className="space-y-2">
              {records.map((record) => (
                <div
                  key={record.id}
                  className="flex text-left items-center p-4 border rounded-lg "
                >
                  {editId === record.id ? (
                    // 수정 모드 UI
                    <div className="flex w-full space-x-2">
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="p-2 border rounded-lg w-1/2"
                        placeholder="제품명"
                      />
                      <input
                        type="number"
                        value={editPrice ?? ""}
                        onChange={(e) => setEditPrice(Number(e.target.value))}
                        className="p-2 border rounded-lg w-1/2"
                        placeholder="제품 가격"
                      />
                      <button
                        onClick={updateRecord}
                        className="text-white bg-green-500 px-3 py-1 rounded-lg hover:bg-green-600"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditId(null)} // 수정 취소
                        className="text-white bg-gray-500 px-3 py-1 rounded-lg hover:bg-gray-600"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    // 일반 UI
                    <div className="flex w-full space-x-6 justify-evenly items-center">
                      <p className="font-bold">{record.productsName}</p>
                      <p className="text-gray-600">{record.price}원</p>
                      <button
                        onClick={() => startEdit(record)}
                        className="text-white bg-blue-300 px-3 py-1 rounded-lg hover:bg-blue-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteRecord(record.id)}
                        className="text-white bg-red-300 px-3 py-1 rounded-lg hover:bg-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AirtableTest;

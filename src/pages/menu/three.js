import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import NavbarBlue from "@/components/NavbarBlue";

function Three() {
  return (
    <>
    <NavbarBlue/>
        <div className="menutest flex flex-row space-x-10">
          <div className="text-xl px-20 py-6">
            <span className="text-xl badge font-semibold">생육정보 자동측정</span>                                                                                                                                                                       .                        
            <input type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
              .   .
             <button className="btn bg-orange-700 text-white" onClick={()=>document.getElementById('my_modal_5').showModal()}>분석하기</button>
              <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">이미지 분석</h3>
                    <p className="tt py-4 ">선택한 이미지 분석중입니다.</p>
                    <div className="gong py-8"></div>
                    <span className="loading flex flex-col align-center mx-auto loading-spinner loading-lg py-16"></span>
                    <div className="gong py-16"></div>
                    <div className="alert alert-error py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span>Error! 정확한 이미지 파일을 선택해주세요.</span>
                    </div>
                <div className="modal-action">
              <form method="dialog">
               {/* if there is a button in form, it will close the modal */}
              <button className="btn">나가기</button>
            </form>
           </div>
          </div>
        </dialog>
             
          </div>
        </div>


      <div className="flex w-screen">
        <div className="grid h-128 flex-grow card bg-gray-200 rounded-box">
        <div className="join place-itmes-left flex space-x-4 px-16 py-4">
              <select className="select select-bordered join-item text-white bg-sky-700">
              <option selected>구역
              </option>
              <option>구역1</option>
              <option>구역2</option>
              <option>구역3</option>
             </select>
                <select className="select select-bordered join-item text-white bg-sky-700">
                <option selected>CAM
                </option>
                <option>CAM1</option>
                <option>CAM2</option>
                <option>CAM3</option>
                </select>
             <div className="indicator">
            <button className="btn join-item text-white bg-sky-700">조회기간</button>
             </div>
             <select className="select select-bordered join-item">
                <option selected>2023-11-01
                </option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
                <select className="select select-bordered join-item">
                <option selected>2023-11-31
                </option>
                <option>11</option>
                <option>12</option>
                <option>1</option>
                </select>
             </div>
             
          <div className="divider divide-x color-white"></div>
          <div className="img mx-auto flex space-x-8">
            <Image src="/papi1.jpg" alt="y" width={147} height={120}/>
            <Image src="/papi2.jpg" alt="x" width={147} height={120}/>
            <Image src="/papi3.jpg" alt="x" width={147} height={120}/>
            <Image src="/papi4.jpg" alt="x" width={147} height={120}/>
            <Image src="/papi1.jpg" alt="y" width={256} height={256}/>
            <Image src="/papi2.jpg" alt="x" width={256} height={256}/>
            <Image src="/papi3.jpg" alt="x" width={256} height={256}/>
            <Image src="/papi4.jpg" alt="x" width={256} height={256}/>
         </div>
         <div className="divider divide-x color-white py-4"></div>
         <div className="img mx-auto flex space-x-8 ">
            <Image src="/papi1.jpg" alt="y" width={256} height={256}/>
            <Image src="/papi2.jpg" alt="x" width={256} height={256}/>
            <Image src="/papi3.jpg" alt="x" width={256} height={256}/>
            <Image src="/papi4.jpg" alt="x" width={256} height={256}/>
            <Image src="/papi1.jpg" alt="y" width={147} height={120}/>
            <Image src="/papi2.jpg" alt="x" width={147} height={120}/>
            <Image src="/papi3.jpg" alt="x" width={147} height={120}/>
            <Image src="/papi4.jpg" alt="x" width={147} height={120}/>
         </div>
         <div className="divider divide-x color-white py-4"></div>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-20 bg-base-300 rounded-box place-items-stretch"> 
          <div className="grid1 text-black font-['Tenada']">          파일명          엽장          엽폭          줄기두께         </div>
        </div>
        </div>
      <style jsx>{`
        .menutest {
          width: 80%;
          height: 100%;
          white-space: pre;
        }

        .grid1{
          white-space: pre;
        }
        
        .img{
          width: 90%;
          height: 60%;
        }

        .img2{
          width: 70%;
          height: 60%;
        }
      `}</style>
      <Footer/>
    </>
  );
}

export default Three;


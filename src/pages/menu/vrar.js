import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import NavbarRed from "@/components/NavbarRed";
import SideBar from "@/components/Sidebar";

// 

function vrar() {
  return (
    <>
    <NavbarRed/>
        <div className="menutest flex flex-row space-x-10">
          <div className="text-xl px-20 py-6">
            <span className="text-xl badge font-semibold">생산량예측 시뮬레이션</span>
          </div>
        </div>


      <div className="flex w-screen">
        <div className="grid h-128 flex-grow card bg-gray-200 rounded-box">
         <div className="join place-itmes-left flex space-x-4 px-16 py-4">
            <select className="select select-bordered join-item text-white bg-red-700">
              <option selected>작물</option>
              <option>파프리카</option>
              <option>토마토</option>
              <option>감자</option>
            </select>
          </div>
        </div>
        </div>
        <div className="divider divide-x color-white"></div>
        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols">
           <thead>
      <tr className="qns text-xl font-semibold text-black">
        <th></th> 
        <th>시간</th> 
        <th>화방</th> 
        <th>줄기</th> 
        <th>엽장</th> 
        <th>꽃</th> 
        <th>열매</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th>1</th> 
        <td>2023/11/01/00:00:01</td> 
        <td>Quality Control Specialist</td> 
        <td>Littel, Schaden and Vandervort</td> 
        <td>Canada</td> 
        <td>12/16/2020</td> 
        <td>Blue</td>
      </tr>
      <tr>
        <th>2</th> 
        <td>2023/11/01/00:14:07</td> 
        <td>3</td> 
        <td>Zemlak, Daniel and Leannon</td> 
        <td>United States</td> 
        <td>12/5/2020</td> 
        <td>Purple</td>
      </tr>
      <tr>
        <th>3</th> 
        <td>2023/11/01/01:00:41</td> 
        <td>Tax Accountant</td> 
        <td>Carroll Group</td> 
        <td>China</td> 
        <td>8/15/2020</td> 
        <td>Red</td>
      </tr>
      <tr>
        <th>4</th> 
        <td>2023/11/01/00:32:47</td> 
        <td>Office Assistant I</td> 
        <td>Rowe-Schoen</td> 
        <td>Russia</td> 
        <td>3/25/2021</td> 
        <td>Crimson</td>
      </tr>
      <tr>
        <th>5</th> 
        <td>2023/11/01/01:01:02</td> 
        <td>Community Outreach Specialist</td> 
        <td>Wyman-Ledner</td> 
        <td>Brazil</td> 
        <td>5/22/2020</td> 
        <td>Indigo</td>
      </tr>
      <tr>
        <th>6</th> 
        <td>2023/11/01/01:32:42</td> 
        <td>Editor</td> 
        <td>Wiza, Bins and Emard</td> 
        <td>Venezuela</td> 
        <td>12/8/2020</td> 
        <td>Purple</td>
      </tr>
      <tr>
        <th>7</th> 
        <td>2023/11/01/02:32:35</td> 
        <td>Staff Accountant IV</td> 
        <td>Schuster-Schimmel</td> 
        <td>Philippines</td> 
        <td>2/17/2021</td> 
        <td>Yellow</td>
      </tr>
      <tr>
        <th>8</th> 
        <td>2023/11/01/03:52:47</td> 
        <td>Accountant I</td> 
        <td>O'Hara, Welch and Keebler</td> 
        <td>Indonesia</td> 
        <td>5/23/2020</td> 
        <td>Crimson</td>
      </tr>
      <tr>
        <th>9</th> 
        <td>2023/11/01/03:22:28</td> 
        <td>Safety Technician IV</td> 
        <td>Turner-Kuhlman</td> 
        <td>Philippines</td> 
        <td>2/21/2021</td> 
        <td>Maroon</td>
      </tr>
      <tr>
        <th>10</th> 
        <td>2023/11/01/04:32:35</td> 
        <td>VP Marketing</td> 
        <td>Sauer LLC</td> 
        <td>Chad</td> 
        <td>6/23/2020</td> 
        <td>Green</td>
      </tr>
      <tr>
        <th>11</th> 
        <td>2023/11/01/05:22:45</td> 
        <td>Librarian</td> 
        <td>Hilpert Group</td> 
        <td>Poland</td> 
        <td>7/9/2020</td> 
        <td>Indigo</td>
      </tr>
    </tbody> 
  </table>
</div>

<div className="divider divide-x color-white"></div>
<div className="flex flex-col w-full lg:flex-row">
  <div className="grid px-2 py-2 flex-grow-3 h-64 card bg-base-300 rounded-box place-items-left">
    <Image
      src="/result1.png"
      alt="x"
      width={512}
      height={512}
    />
  </div> 
  <div className="divider lg:divider-horizontal"></div> 
  <div className="grid1 flex-grow h-64 card bg-base-300 rounded-box py-4 px-16 place-items-left">
    <div className="bbc">
      과거의 주 크기                              '
      <select className="select select-secondary w-full max-w-xs">
       <option disabled selected>주 설정</option>
       <option>10</option>
      <option>12</option>

      </select>
    </div>
    <div className="bbc py-4"></div>
    <div className="bbc">
      예측주기 설정                               '
      <select className="select select-secondary w-full max-w-xs">
       <option disabled selected>주기 설정</option>
       <option>1</option>
      <option>2</option>
      <option>3</option>
       <option>4</option>
      </select>
    </div>
    <div className="bbc py-4"></div> 

  </div>
</div>
      <style jsx>{`
        .menutest {
          width: 80%;
          height: 100%;
          white-space: pre;
        }

        .grid1{F
          white-space: pre;
        }

        .bbc{
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

export default vrar;


import Link from "next/link";
import React from "react";

function TopLink() {
  return (
    <div className="bg-[#141414]">
      <ul className="flex ">
        <li className="text-white p-0 pr-3 pl-3 m-0">
          <Link href={""} title="link1">
            <p className="text-white">link1</p>
          </Link>
        </li>
        <li className="text-white p-0 pr-3 m-0 ">
          <Link href={""} title="link2 ">
            link2
          </Link>
        </li>

        <li className="text-white p-0 pr-3 m-0">
          <Link href={""} title="link3">
            link3
          </Link>
        </li>
        <li className="text-white p-0 pr-3 m-0">
          <Link href={""} title="link4">
            link4
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TopLink;

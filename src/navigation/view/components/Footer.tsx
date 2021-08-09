import Image from "next/image";
import React from "react";
import MaxWidth from "../../../common/view/components/atoms/MaxWidth";
import GitHubIcon from "../../../../public/assets/icons/github.svg";
import AlertIcon from "../../../../public/assets/icons/alert-triangle.svg";
import AddUserIcon from "../../../../public/assets/icons/user-plus.svg";

export default function Footer() {
  return (
    <footer className="p-1 pt-20">
      <MaxWidth className="border border-black px-4 py-6 text-center">
        <h2 className="font-display font-light italic text-3xl transform pb-3">
          Devs for Change
        </h2>
        <p className="pb-4">
          is built by developers like you. How can you{" "}
          <strong>contribute</strong>?
        </p>
        <ul className=" max-w-sm m-auto divide-y divide-br">
          {/*TODO: Refactor, abstract li into a component or private method */}
          <li className="py-2 px-3 flex items-center">
            <div className="relative h-4 w-4 mr-3">
              <Image
                src={GitHubIcon}
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3>
              <a
                href="https://github.com/arnaugomez/devs4change.next"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit a PR
              </a>
            </h3>
          </li>
          <li className="py-2 px-3 flex items-center">
            <div className="relative h-4 w-4 mr-3">
              <Image src={AlertIcon} alt="" layout="fill" objectFit="contain" />
            </div>
            <h3>
              <a
                href="https://github.com/arnaugomez/devs4change.next/issues/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                Report bug / suggest improvement
              </a>
            </h3>
          </li>
          <li className="py-2 px-3 flex items-center">
            <div className="relative h-4 w-4 mr-3">
              <Image
                src={AddUserIcon}
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3>Join the platform</h3>
          </li>
        </ul>
      </MaxWidth>
    </footer>
  );
}

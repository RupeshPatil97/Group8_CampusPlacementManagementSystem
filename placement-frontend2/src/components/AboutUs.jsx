import React from "react";
import NavbarComp from "./NavbarComp";
export default function AboutUs() {
  return (
    <>
      <div>
        <NavbarComp />
      </div>
      <div className="body">
        <div className="text-justify container">
          <br />
          <h1>About CDAC</h1>
          <br />
          <p>
            Centre for Development of Advanced Computing (C-DAC) is the premier
            R&D organization of the Department of Information Technology (DIT),
            Ministry of Communications & Information Technology (MCIT) for
            carrying out R&D in IT, Electronics and associated areas.A Different
            areas of C-DAC, had originated at different times, many of which
            came out as a result of identification of opportunities. The setting
            up of C-DAC in 1988 itself was to built Supercomputers in context of
            denial of import of Supercomputers by USA. Since then C-DAC has been
            undertaking building of multiple generations of Supercomputer
            starting from PARAM with 1 GF in 1988.
          </p>
          <br />
          <p>
            Almost at the same time, C-DAC started building Indian Language
            Computing Solutions with setting up of GIST group (Graphics and
            Intelligence based Script Technology); National Centre for Software
            Technology (NCST) set up in 1985 had also initiated work in Indian
            Language Computing around the same period.
          </p>

          <p>
            Electronic Research and Development Centre of India (ER&DCI) with
            various constituents starting as adjunct entities of various State
            Electronic Corporations, had been brought under the hold of
            Department of Electronics and Telecommunications (now DIT) in around
            1988. They were focusing on various aspects of applied electronics,
            technology and applications.
          </p>
          <br />
          <p>
            With the passage of time as a result of creative echo system that
            got set up in C-DAC, more areas such as Health Informatics, etc.,
            got created; while right from the beginning the focus of NCST was on
            Software Technologies; similarly C-DAC started its education &
            training activities in 1994 as a spin-off with the passage of time,
            it grew to a large efforts to meet the growing needs of Indian
            Industry for finishing schools. <br />
            <p className="text-center">
              {" "}
              <a href="https://cdac.in/">
                Read More {">"}
                {">"}
              </a>
            </p>
          </p>
          <br />
        </div>
      </div>
    </>
  );
}

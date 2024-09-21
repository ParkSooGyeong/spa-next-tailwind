import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <section className="container mx-auto p-8">
        <div className="page-heading">
          <span className="icon text-4xl">
            <i className="lnr lnr-license"></i>
          </span>
          <h2>About Me.</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">Frontend & Backend Develop</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              프론트엔드 개발을 중심으로 다양한 기술 스택을 활용한 경험을 쌓아왔습니다. 실무에서는 주로 React.js와 Vue.js를 사용해 왔으며, Angular.js는 학습 경험은 있지만 실제 프로젝트에 적용할 기회는 없었습니다. 또한 팀에 TypeScript를 도입한 경험이 있어, 이 기술을 활용해 왔지만 여전히 배우고 개선해 나가는 중입니다.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              프론트엔드뿐만 아니라 백엔드 개발에도 다양한 경험을 가지고 있습니다. Node.js(Express, Nest.js), Python(Django), Ruby(Rails), PHP(CodeIgniter) 등 여러 언어와 프레임워크를 실무에서 사용해 왔으며, 안드로이드와 iOS 앱 개발에도 참여한 적이 있습니다.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              DevOps, 데이터베이스 마이그레이션, 데이터 시각화, 실시간 데이터 처리 등 다양한 기술적 문제를 해결해왔습니다. 여러 언어와 프레임워크를 다뤄본 경험 덕분에, 복잡한 시스템을 구축하며 변화하는 기술 환경에 유연하게 적응해왔습니다.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              또한, 프로젝트 일정 준수에 최선을 다하며, 기획자와 디자이너와의 협업을 통해 목표와 방향성을 명확하게 공유하는 데 중점을 두고 있습니다. 이를 통해 팀 내에서 긍정적인 협업 분위기를 유지하고, 효과적인 소통을 바탕으로 협업의 시너지를 발휘할 수 있는 능력을 가지고 있습니다.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              최근에는 네이티브 개발에 관심을 가지고 React Native를 사용해 구글 플레이스토어에 몇 가지 간단한 앱을 등록해 보았고, Flutter에 대해서도 기초적인 학습을 진행했습니다. 현재는 Next.js와 TypeScript를 사용한 개인 프로젝트를 진행하며 웹 애플리케이션 개발에 집중하고 있습니다.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              이러한 기술적 배경을 바탕으로, 저는 프론트엔드뿐만 아니라 풀스택 개발자로서도 기여할 수 있습니다. 새로운 기술을 꾸준히 배우고 프로젝트에 적용해 최적의 솔루션을 찾기 위해 노력하고 있습니다.
            </p>
            <div className="font-signature mt-8 italic md:w-2/3">
              <Image src="/images/si.png" alt="Signature" width={100} height={32} />
            </div>
          </div>

          <div className="md:w-1/3 md:pl-16 mt-8 md:mt-0">
            <h3 className="text-3xl font-bold mb-4">Personal Information</h3>
            <ul className="text-gray-300 space-y-2">
              <li>
                <strong className="text-white border-b-2 border-[#00A3E1]">Name: </strong>
                SOOKYUNG PARK
              </li>
              <li>
                <strong className="text-white border-b-2 border-[#00A3E1]">Age: </strong>
                35
              </li>
              <li>
                <strong className="text-white border-b-2 border-[#00A3E1]">Residence: </strong>
                서울특별시 노원구
              </li>
              <li>
                <strong className="text-white border-b-2 border-[#00A3E1]">Email: </strong>
                tuna3636@naver.com
              </li>
              <li>
                <strong className="text-white border-b-2 border-[#00A3E1]">Phone: </strong>
                (+82) 010 9399 9969
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export const scheduleData = [
  [
    {
      time: '14:15–15:00',
      title: '4년차 엔지니어가 말아주는 개발 마인드셋',
      desc: `시대가 흐르면서 코딩은 점점 쉬워지고 있지만, 진짜 중요한 'Engineer(Maker)'로서의 역량은 종종 간과되고 있습니다. 이번 세션에서는 Developer를 넘어 Engineer 관점에서 '개발'을 어떻게 바라봐야 할지 함께 고민하고 방향을 확립해보고자 합니다.`,
      speaker: '강종연 O사',
      hasBtn: true,
      link: 'https://www.youtube.com/watch?v=CS3zktszb8g',
    },
    {
      time: '17:00–17:45',
      title: 'VAE: Very Actual Experience',
      desc: `임베디드 동아리와 광학 연구실에서 뛰어난 성과를 쌓은 한 전자공학도가 화려한 스펙을 뒤로하고 AI 스타트업에 입사합니다. 그러나 그를 맞이한 건 판교의 화려한 이미지와 달리, 무리한 데드라인과 끝없는 야근, 그리고 하청 프로젝트의 현실. 주 100시간 근무 끝에 세계가 인정한 혁신 기술을 만들어냈지만, 정작 그의 이름은 사라진 채 대기업과 대학 이름만 남았습니다. 진짜 '현실'을 통과해 성장해온 그의 Very Actual Experience를 공유합니다.`,
      speaker: '신동하 DareeSoft',
      hasBtn: false,
      link: '',
    },
  ],
  [
    {
      time: '15:00–15:45',
      title:
        '신입 채용만이 답일까? 대학생 때 외주 개발로 경제적 자유를 이루고 경력직으로 판교 입성하기까지',
      desc: `신입 채용이 얼어붙은 안드로이드 개발자 시장 속에서 현실을 뚫고 올라온 한 개발자의 이야기입니다. 안드로이드를 좋아해 반도체 전공을 뒤로하고 앱 개발에 올인, 개인 프로젝트와 외주 개발에 도전했습니다. 크몽 안드로이드 상위 2% Prime 전문가를 달성하고, 실전 경험을 바탕으로 경력직 입사에 성공하여 현재는 판교 소재 대기업에 재직 중입니다. 또한 부업으로 프리랜서 활동도 이어가는 커리어 여정을 공유합니다.`,
      speaker: '한병하 Onestore',
      hasBtn: true,
      link: 'https://www.youtube.com/watch?v=73l56BMz420',
    },
    {
      time: '17:45–18:30',
      title: '소프트웨어보다 어려운 소프트 스킬',
      desc: `신입 기준으로 일정 수준의 하드 스킬을 갖추게 되면, 소프트 스킬이 미치는 영향이 점점 커진다고 생각합니다. 하드 스킬만큼 소프트 스킬도 중요하다는 점을 함께 고민해보고, 이를 어떻게 성장시킬 수 있을지 이야기하는 세션이 되었으면 합니다.`,
      speaker: "김동환 'N사'",
      hasBtn: false,
      link: '',
    },
  ],
  [
    {
      time: '15:45–16:25',
      title:
        'Cloud와 AI만 보이는 IT 시장에서 트렌드 놓치지 않기 for Job Seekers',
      desc: `최근 IT 시장은 AI에 대한 관심이 집중되면서, 상대적으로 클라우드 및 기타 핵심 기술들이 간과되고 있습니다. 이 세션에서는 클라우드 시장의 특성과 필요한 기술·경험을 정리하고, AI 열풍 속에서도 주목해야 할 클라우드 및 IT 트렌드를 통해 구직자가 놓치지 말아야 할 포인트를 함께 짚어봅니다.`,
      speaker: '정명훈 Google Cloud',
      hasBtn: true,
      link: 'https://youtu.be/m1cqgtuyWjs',
    },
    {
      time: '18:30–19:15',
      title: '기획인데, PM인데, 이런 것도 제가 해요?',
      desc: `기획·PM 직군은 하지 않는 일이 없다고 할 정도로 범위가 넓습니다. 이 세션에서는 '취업을 잘 하는 것'과 '일을 잘 하는 것'은 다르다는 깨달음을 중심으로, 취준생의 시선에서 막연하게 생각했던 기획 직군의 개념과, 판교 실무 경험을 통해 체득한 실제 기획·PM 역할의 차이를 비교하며 정보를 공유합니다. 포괄성을 무기로 삼아 취업 시장을 뾰족하게 공략하는 방법도 함께 나눕니다.`,
      speaker: "김민주 'N사'",
      hasBtn: false,
      link: '',
    },
  ],
] as const;

export type ScheduleData = typeof scheduleData;
export type ScheduleRow = ScheduleData[number];
export type SessionEntry = ScheduleRow[number];

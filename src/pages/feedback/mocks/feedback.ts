export const feedbackData = [
  {
    id: 5,
    rating: 3,
    modifiedContent:
      '음식이 전반적으로 식은 상태로 제공되어 아쉬웠습니다.\n- 조리 후 제공 시 온도를 유지할 방법을 마련해주세요.\n- 음식 온도 관리에 신경 써주시면 좋겠습니다.',
    reply: null,
    type: 'complain',
    status: 'PROCESSING',
    createdAt: '2025-08-18',
  },
  {
    id: 6,
    rating: 2,
    modifiedContent:
      '주문 후 음식이 나오기까지 시간이 너무 오래 걸렸습니다.\n- 조리 및 서빙 속도를 개선해 주세요.\n- 손님 대기 시간을 줄일 수 있는 대책이 필요합니다.',
    reply: null,
    type: 'complain',
    status: 'PROCESSING',
    createdAt: '2025-08-19',
  },
  {
    id: 7,
    rating: 4,
    modifiedContent:
      '일부 메뉴의 양이 사진보다 적게 나오는 것 같습니다.\n- 실제 양과 메뉴판 사진이 일치하도록 조정 부탁드립니다.\n- 푸짐한 양을 유지해 주시면 만족도가 더 높아질 것 같습니다.',
    reply: null,
    type: 'complain',
    status: 'PROCESSING',
    createdAt: '2025-08-19',
  },
  {
    id: 8,
    rating: 3,
    modifiedContent:
      '매장이 다소 소란스러워 식사하기 불편했습니다.\n- 테이블 간격을 조금 더 두거나 소음 관리를 해주시면 좋을 것 같습니다.\n- 쾌적한 분위기 개선을 부탁드립니다.',
    reply: null,
    type: 'complain',
    status: 'PROCESSING',
    createdAt: '2025-08-20',
  },
  {
    id: 9,
    rating: 5,
    modifiedContent:
      '음식 맛은 훌륭하지만 배달 포장이 부실하여 국물이 흘렀습니다.\n- 밀폐력이 좋은 용기를 사용해주시면 좋겠습니다.\n- 배달 전 포장 상태를 한 번 더 확인 부탁드립니다.',
    reply:
      '불편을 드려 죄송합니다. 배달 포장 방식을 개선하여 국물이 새지 않도록 더욱 신경 쓰겠습니다. 앞으로도 최선의 서비스를 제공하도록 하겠습니다.',
    type: 'complain',
    status: 'DONE',
    createdAt: '2025-08-20',
  },
  {
    id: 10,
    rating: 2,
    modifiedContent:
      '직원분이 주문 내용을 제대로 확인하지 않아 잘못된 메뉴가 나왔습니다.\n- 주문 확인 절차를 강화해 주셨으면 합니다.\n- 고객 불편이 발생하지 않도록 주의 부탁드립니다.',
    reply:
      '주문 확인 절차를 강화하여 같은 실수가 반복되지 않도록 하겠습니다. 불편을 끼쳐 드려 깊이 사과드립니다.',
    type: 'complain',
    status: 'DONE',
    createdAt: '2025-08-21',
  },
  {
    id: 11,
    rating: 3,
    modifiedContent:
      '반찬 가짓수가 적고 리필 요청 시 응대가 늦은 편이었습니다.\n- 다양한 반찬을 조금 더 준비해주시면 좋겠습니다.\n- 빠른 리필 서비스가 필요할 것 같습니다.',
    reply:
      '반찬 가짓수를 늘리고 리필 요청에도 신속히 대응할 수 있도록 서비스 개선에 힘쓰겠습니다.',
    type: 'complain',
    status: 'DONE',
    createdAt: '2025-08-21',
  },
  {
    id: 12,
    rating: 4,
    modifiedContent:
      '메뉴 설명이 부족해서 처음 방문한 사람은 선택하기 어려웠습니다.\n- 상세한 메뉴 설명이나 사진을 추가해 주세요.\n- 고객이 쉽게 선택할 수 있도록 안내가 필요합니다.',
    reply:
      '메뉴 설명과 사진을 추가하여 고객님들이 편리하게 선택할 수 있도록 개선하겠습니다.',
    type: 'complain',
    status: 'DONE',
    createdAt: '2025-08-21',
  },
  {
    id: 13,
    rating: 2,
    modifiedContent:
      '매장 위생 상태가 깔끔하지 않아 불편했습니다.\n- 테이블과 바닥 청결 관리에 신경 써주세요.\n- 위생 점검을 강화해 주시길 바랍니다.',
    reply:
      '매장 위생 상태를 최우선으로 관리하고 주기적인 점검을 통해 청결한 환경을 유지하도록 하겠습니다.',
    type: 'complain',
    status: 'DONE',
    createdAt: '2025-08-22',
  },
  {
    id: 14,
    rating: 3,
    modifiedContent:
      '음식이 전반적으로 기름져서 부담스럽습니다.\n- 조리 시 기름 양을 줄여주세요.\n- 담백한 메뉴 옵션을 추가하면 좋겠습니다.',
    reply: null,
    type: 'complain',
    status: 'PROCESSING',
    createdAt: '2025-08-22',
  },
] as const;

export type FeedbackData = (typeof feedbackData)[number];

const storyFlow = {
  1: {
    text: ["Có thai không"],
    options: [
      ["Có", null, 1],
      ["Không", 2],
    ],
  },
  2: {
    text: ["Danh sách các triệu chứng cấp cứu"],
    options: [["Cảm thấy có thể ngất bất cứ lúc nào khi đứng hoặc ngồi", 3]],
  },
  3: {
    text: [
      "Sau khi đổi từ tư thế nằm sang tư thế ngồi hoặc đứng vài phút, bạn có cảm thấy chóng mặt đến mức có thể ngất không?",
    ],
    options: [
      ["Có", 7],
      ["Không", 4],
    ],
  },
  4: {
    text: [
      "Gần đây bạn có thể bị xâm hại tình dục hay lạm dụng tình dục không?",
    ],
    options: [
      ["Có", 8],
      ["Không", 5],
    ],
  },
  5: {
    text: [
      "Trong vòng 48 giờ, bạn  có bị tổn thương ở âm đạo hay bộ phận sinh dục không?",
    ],
    options: [
      ["Có", 9],
      ["Không", null, 100000],
    ],
  },
  6: {
    text: [
      "Trong vòng 48 giờ, bạn có bị tổn thương ở âm đạo hay bộ phận sinh dục không?",
    ],
    options: [
      ["Có", 9],
      ["Không", 9],
    ],
  },
  7: {
    text: [
      "Gần đây bạn có thể bị xâm hại tình dục hay lạm dụng tình dục không?",
    ],
    options: [
      ["Có", 8],
      ["Không", 6],
    ],
  },
  8: {
    text: ["Bạn có đang gặp một mối nguy hiểm hoặc đe doạ nào bây giờ không?"],
    options: [
      ["Có", null, 2],
      ["Không", 9],
    ],
  },
  9: {
    text: ["Nên gọi ngay cho đường dây nóng cấp cứu ngay lập tức"],
    options: [["", null, 3]],
  },
};

const storyAnswer = {
  1: "nên đi gặp bác sĩ ngay",
  2: "Nên gọi ngay cho đường dây nóng cấp cứu (115) hoặc cảnh sát (113)",
  3: "Nghi ngờ bị sốc",
  100000: "END",
};

const story1 = {
  storyFlow,
  storyAnswer,
};

export default story1;

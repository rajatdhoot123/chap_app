const initialState = {
  isFetching: false,
  id: "ama1",
  title: "Ask Me Anything with Mahesh Sharma",
  description: "",
  startTime: "",
  endTime: "",
  status: "",
  host: 1,
  registeredUsers: [2, 3],
  questions: [1],
  allAMA: [2, 3, 4, 5, 6, 7],
  currAMA: 2,
  2: {
    name: "Sharad Sharma",
    day: "Sunday",
    hostId: "author2",
    date: "10am, 16th Aug",
    time: "10am to 12am",
    questions: 20,
    registrations: 100,
    status: "Upcoming",
    url:
      "http://stech1.firstpost.com/tech2images/640x359/proportional/jpeg/2017/05/sharads-624x351.jpg",
    description: `Sharad’s personal mantra is to lead big and small companies through orbit change.

Sharad is one of the active technology angel investors in India with about two dozen investments. Details at https://angel.co/sharad-sharma and http://www.letsventure.in/person/SharadSharma

Sharad is a passionate evangelist of the software product ecosystem in India. He is the co-founder and Governing Council member of iSPIRT. He was the Chair of NASSCOM Product Forum and a member of the Executive Council from 2009-13.

He has held a number of senior executive positions with leading technology companies. Most recently he was a SVP at Yahoo! and CEO of India R&D. Previously he turned around VERITAS operations in India. He also brought AT&T/Lucent R&D to India as an intrapreneur. `
  },
  3: {
    name: "Sundar Pichai",
    day: "Wednesday",
    hostId: "author2",
    date: "10am, 12th Aug",
    time: "10am to 12am",
    questions: 12,
    registrations: 120,
    status: "Live",
    url:
      "https://ichef-1.bbci.co.uk/news/660/cpsprodpb/AE88/production/_84808644_gettyimages-464948948.jpg",
    description: `Pichai Sundararajan (born 12 July 1972), also known as Sundar Pichai, is an Indian American business executive.

Pichai is the chief executive officer (CEO) of Google Inc. Formerly the Product Chief of Google, Pichai's current role was announced on 10 August 2015, as part of the restructuring process that made Alphabet Inc. into Google's parent company, and he assumed the position on 2 October 2015.`
  },
  4: {
    name: "Mahesh Sharma",
    day: "Friday",
    date: "10am, 14th Aug",
    time: "10am to 12am",
    questions: 15,
    registrations: 150,
    url:
      "https://quintype-01.imgix.net/thequint/2015-09/724723be-6bed-48af-ad39-ee18f23800d5/Mahesh-Sharma_Hero.jpg",
    status: "Completed",
    description: `Mahesh Sharma was born on 30 September 1959 in Manethi village in Mundawar tehsil Alwar district of Rajasthan. His father, Kailash Chand Sharma, was a school teacher. He did his early schooling in the village. For senior secondary education, he moved to Delhi. He graduated from the University College of Medical Sciences. In 2012, he received an Honorary Doctorate from Amity University.

He was involved with the Rashtriya Swayamsevak Sangh (RSS) since childhood. During his student days, he became associated with the Akhil Bharatiya Vidyarthi Parishad (ABVP). Later, he joined BJP. In 2012, he was elected as an MLA from Noida during the assembly election.`
  },
  5: {
    name: "Sanjay Jha",
    day: "Saturday",
    date: "10am, 15th Aug",
    time: "10am to 12am",
    questions: 10,
    registrations: 80,
    status: "Completed",
    url:
      "https://i2.wp.com/www.indianweb2.com/wp-content/uploads/2015/10/LetsVenture_sunjay_jha.jpg?resize=700%2C340",
    description: `Co-Founder, CPO  @ LetsVenture
Education:Indian Institute of Management, Bangalore
Building a scalable platform for the connected Startup ecosystem in India
Bangalore, India`
  },
  6: {
    name: "Shah Rukh Khan",
    day: "Monday",
    date: "10am, 10th Aug",
    time: "10am to 12am",
    questions: 1000,
    registrations: 800,
    status: "Upcoming",
    url:
      "http://media3.bollywoodhungama.in/wp-content/uploads/2017/02/Shah-Rukh-Khan-2.jpg",
    description: `Shah Rukh Khan (born Shahrukh Khan; 2 November 1965), also known as SRK, is an Indian film actor, producer and television personality. Referred to in the media as the "Baadshah of Bollywood", "King of Bollywood" or "King Khan", he has appeared in more than 80 Bollywood films, and earned numerous accolades, including 14 Filmfare Awards. Khan has a significant following in Asia and the Indian diaspora worldwide. In terms of audience size and income, he has been described as one of the most successful film stars in the world.`
  },
  7: {
    name: "Sachin Tendulkar",
    day: "Tuesday",
    date: "10am, 11th Aug",
    time: "10am to 12am",
    questions: 500,
    registrations: 600,
    status: "Upcoming",
    url:
      "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2015/11/03/103135046-GettyImages-110022758.jpg?v=1446585058",
    description: `Sachin Ramesh Tendulkar (born 24 April 1973) is a former Indian cricketer and a former captain, widely regarded as one of the greatest batsmen of all time. The highest run scorer of all time in Tests and ODIs, Tendulkar took up cricket at the age of eleven, made his Test debut on 15 November 1989 against Pakistan in Karachi at the age of sixteen, and went on to represent Mumbai domestically and India internationally for close to twenty-four years. He is the only player to have scored one hundred international centuries, the first batsman to score a double century in a One Day International, the holder of the record for the number of runs in both ODI and Test cricket, and the only player to complete more than 30,000 runs in international cricket.`
  }
};

export default function questions(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

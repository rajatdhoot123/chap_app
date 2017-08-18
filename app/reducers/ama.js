const initialState = {
  isFetching: false,
  id: 'ama1',
  title: 'Ask Me Anything with Mahesh Sharma',
  description: '',
  startTime: '',
  endTime: '',
  status: '',
  host: 1,
  allAMA: [2,3,4,5],
  2:{
    name:"Sharad Sharma",
    day:"Sunday",
    date:"10am, 16th Aug",
    time:"10am to 12am",
    questions: 20,
    registrations: 100,
    status: "Upcoming"
  },
  3:{
    name:"Jay Ahya",
    day:"Wednesday",
    date:"10am, 12th Aug",
    time:"10am to 12am",
    questions: 12,
    registrations: 120,
    status: "Live"
  },
  4:{
    name:"Mahesh Sharma",
    day:"Friday",
    date:"10am, 14th Aug",
    time:"10am to 12am",
    questions: 15,
    registrations: 150,
    status: "Completed"
  },
  5:{
    name:"Sanjay Jha",
    day:"Saturday",
    date:"10am, 15th Aug",
    time:"10am to 12am",
    questions: 10,
    registrations: 80,
    status: "Completed"
  }
  questions : [1,2]
}

export default function questions (state = initialState, action) {
  switch(action.type) {

    default:
      return state
  }
}

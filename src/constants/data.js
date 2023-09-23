const accordionData = [
    {
      title: "Can I work on a project I started before the hackathon?",
      content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id erat sit amet arcu luctus pharetra. Cras scelerisque dolor non justo dignissim efficitur. Nunc non molestie nunc, venenatis maximus ante. Vestibulum mattis faucibus scelerisque. Nulla tempus semper congue. Phasellus maximus iaculis eleifend. Praesent elementum risus augue, eu viverra eros pulvinar sagittis. Aliquam ullamcorper vel metus at ultricies. Phasellus sollicitudin nibh lacus, nec malesuada felis dapibus eu. Suspendisse ut condimentum felis, vitae accumsan nunc. Nunc non bibendum diam, eget molestie metus. Nam orci sem, porttitor sed libero ut, rutrum tristique nulla. Praesent et odio posuere diam ultricies luctus nec eu nibh. Cras sit amet sagittis erat. Nulla viverra rhoncus magna, vitae aliquet ex consectetur at.
      `,
    },
    {
      title: "What happens if I need help during the hackathon?",
      content: `
        Aliquam vel libero et tortor sagittis condimentum. Nam id varius turpis, id pharetra eros. Mauris purus tortor, mattis quis eros in, molestie pharetra lorem. Morbi viverra urna purus, nec ornare purus aliquet et. Curabitur tempus nulla id leo eleifend, sit amet lobortis libero interdum. Proin nulla neque, imperdiet nec metus in, volutpat accumsan sem. Curabitur imperdiet et turpis at condimentum. Nunc nec quam fringilla, porta elit nec, pellentesque ligula.
  
      `,
    },
    {
      title: "What happens if I don't have an idea for a project?",
      content: `
        Sed lobortis rutrum dui ut consequat. Vestibulum sollicitudin orci eget risus volutpat, quis congue neque pharetra. Nulla sed justo commodo tellus tincidunt lobortis. Nunc tortor augue, consequat eu odio nec, accumsan accumsan lorem. Suspendisse maximus ultricies turpis, consequat mollis diam tempor ut. Fusce a elementum est. Nulla odio elit, malesuada eu leo sit amet, malesuada accumsan magna. Maecenas molestie bibendum lorem, et ullamcorper dui euismod eget. Proin eget dui dapibus lacus fermentum mattis vitae iaculis lectus. Pellentesque in risus in nibh commodo imperdiet. Morbi at tempus dui. Mauris pellentesque mauris id erat blandit, ac ultrices metus efficitur. Donec porttitor neque eget elit volutpat gravida.
  
      `,
    },
    {
      title: "Can I join a team or do I have to come with one?",
      content: `
        Aliquam vel libero et tortor sagittis condimentum. Nam id varius turpis, id pharetra eros. Mauris purus tortor, mattis quis eros in, molestie pharetra lorem. Morbi viverra urna purus, nec ornare purus aliquet et. Curabitur tempus nulla id leo eleifend, sit amet lobortis libero interdum. Proin nulla neque, imperdiet nec metus in, volutpat accumsan sem. Curabitur imperdiet et turpis at condimentum. Nunc nec quam fringilla, porta elit nec, pellentesque ligula.
  
      `,
    },
    {
      title: "What happens after the hackathon ends",
      content: `
        Aliquam vel libero et tortor sagittis condimentum. Nam id varius turpis, id pharetra eros. Mauris purus tortor, mattis quis eros in, molestie pharetra lorem. Morbi viverra urna purus, nec ornare purus aliquet et. Curabitur tempus nulla id leo eleifend, sit amet lobortis libero interdum. Proin nulla neque, imperdiet nec metus in, volutpat accumsan sem. Curabitur imperdiet et turpis at condimentum. Nunc nec quam fringilla, porta elit nec, pellentesque ligula.
  
      `,
    },
    {
      title: "Can I work on a project I started before the hackathon?",
      content: `
        Aliquam vel libero et tortor sagittis condimentum. Nam id varius turpis, id pharetra eros. Mauris purus tortor, mattis quis eros in, molestie pharetra lorem. Morbi viverra urna purus, nec ornare purus aliquet et. Curabitur tempus nulla id leo eleifend, sit amet lobortis libero interdum. Proin nulla neque, imperdiet nec metus in, volutpat accumsan sem. Curabitur imperdiet et turpis at condimentum. Nunc nec quam fringilla, porta elit nec, pellentesque ligula.
  
      `,
    },
  ];

  const timelineData = [
    {
      title: "Hackathon Announcement",
      date: "November 18, 2023",
      content: `
        The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register
      `,
      position: 'left',
      number: '1'
    },
    {
      title: "Teams Registration begins",
      date: "November 18, 2023",
      content: `
        Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register
      `,
      position: 'right',
      number: '2'
    },
    {
      title: "Teams Registration ends",
      date: "November 18, 2023",
      content: `
        Interested Participants are no longer Allowed to register
      `,
      position: 'left'
    },
    {
      title: "Announcement of the accepted teams and ideas",
      date: "November 18, 2023",
      content: `
        All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced
      `,
      position: 'right'
    },
    {
      title: "Getlinked Hackathon 1.0 Offically Begins",
      date: "November 18, 2023",
      content: `
        Accepted teams can now proceed to build their ground breaking skill driven solutions
      `,
      position: 'left'
    },
    {
      title: "Demo Day",
      date: "November 18, 2023",
      content: `
      Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day
      `,
      position: 'right'
    }
  ]

  const groupSize = [
    {value: 1, label: 1},
    {value: 2, label: 2},
    {value: 3, label: 3},
    {value: 4, label: 4},
    {value: 5, label: 5},
    {value: 6, label: 6},
    {value: 7, label: 7},
    {value: 8, label: 8},
    {value: 9, label: 9},
    {value: 10, label: 10}
  ]

  export default {accordionData, timelineData, groupSize};
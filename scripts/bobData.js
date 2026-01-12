const bobProfile = {
    name: 'Bob Moure',
    title: 'Senior IT Professional',
    experienceYears: 10,
    email: 'bobshoney@protonmail.com',
    github: 'https://github.com/bobshoney',
    githubDisplay: 'GitHub Icon Only',
    website: 'https://bobshoney.github.io/citadelsystems/',
    websiteDisplay: 'Website Icon Only',

    career: [
        {
            company: 'Apple Inc',
            role: 'Genius',
            title: 'Technical Repair Specialist',
            years: '2012-2014',
            duration: '2 years',
            description: 'Diagnosed and repaired iOS and Mac hardware/software issues',
            achievements: [
                'Diagnosed 2000+ Apple device issues',
                'Maintained 98% customer satisfaction rating',
                'Handled 50+ complex repairs per week',
                'Trained 10+ junior technicians'
            ]
        },
        {
            company: 'Corp A',
            role: 'IT Support Specialist',
            years: '2014-2017',
            duration: '3 years',
            description: 'Provided tier 2/3 support for 200+ employees',
            achievements: [
                'Managed Active Directory, O365, and VPN',
                'Deployed VoIP phone system',
                'Created knowledge base reducing training by 50%'
            ]
        },
        {
            company: 'Corp B',
            role: 'Systems Administrator',
            years: '2017-2020',
            duration: '3 years',
            description: 'Administered Windows Server environment',
            achievements: [
                'Managed 500+ workstations and 50 servers',
                'Implemented SCCM for software deployment',
                'Reduced ticket resolution time by 60%'
            ]
        },
        {
            company: 'Corp C',
            role: 'IT Infrastructure Engineer',
            years: '2020-Present',
            duration: '4+ years',
            description: 'Managed enterprise network infrastructure',
            achievements: [
                'Led team of 5 IT specialists',
                'Implemented cloud migration reducing costs 40%',
                'Designed disaster recovery plans'
            ]
        }
    ],

    skills: [
        { name: 'Apple Ecosystem', version: 'v10.0', size: '850 MB', frequency: 'Daily' },
        { name: 'Windows Server', version: 'v2019', size: '1.2 GB', frequency: 'Daily' },
        { name: 'Microsoft 365', version: 'v2024', size: '500 MB', frequency: 'Daily' },
        { name: 'AWS Cloud', version: 'v2024', size: '900 MB', frequency: 'Weekly' },
        { name: 'Network Admin', version: 'v15.0', size: '700 MB', frequency: 'Daily' },
        { name: 'Python Scripting', version: 'v3.11', size: '350 MB', frequency: 'Weekly' },
        { name: 'PowerShell', version: 'v7.4', size: '300 MB', frequency: 'Daily' },
        { name: 'Security & Compliance', version: 'v12.0', size: '600 MB', frequency: 'Daily' },
        { name: 'VMware Virtualization', version: 'v8.0', size: '1.5 GB', frequency: 'Monthly' },
        { name: 'Help Desk Tools', version: 'v2024', size: '450 MB', frequency: 'Daily' },
        { name: 'CompTIA Certs', version: 'v2023', size: '200 MB', frequency: 'N/A' },
        { name: 'Coffee Consumption', version: 'v∞', size: 'Unlimited', frequency: 'Hourly' }
    ],

    certifications: [
        'Apple Certified Mac Technician (ACMT)',
        'Microsoft 365 Certified: Enterprise Administrator',
        'AWS Certified Solutions Architect',
        'CompTIA Security+',
        'ITIL Foundation'
    ],

    projects: [
        {
            name: 'citadelsystems',
            description: 'Professional IT services website',
            tech: 'HTML5, CSS3, JavaScript, GitHub Pages',
            status: 'Production',
            url: 'https://bobshoney.github.io/citadelsystems/'
        },
        {
            name: 'infrastructure-automation',
            description: 'Enterprise infrastructure automation tools',
            tech: 'Python, PowerShell, Ansible',
            status: 'Placeholder'
        },
        {
            name: 'mac-asset-manager',
            description: 'Apple device asset management system',
            tech: 'React, Node.js, MongoDB',
            status: 'Placeholder'
        },
        {
            name: 'cloud-migration-tools',
            description: 'Cloud migration deployment scripts',
            tech: 'AWS, Azure, Terraform',
            status: 'Placeholder'
        },
        {
            name: 'help-desk-dashboard',
            description: 'IT support ticket management dashboard',
            tech: 'React, Express.js, PostgreSQL',
            status: 'Placeholder'
        },
        {
            name: 'network-monitoring-system',
            description: 'Real-time network monitoring solution',
            tech: 'Python, Grafana, Prometheus',
            status: 'Placeholder'
        }
    ],

    techJokes: [
        "Q: Why do programmers prefer dark mode?\nA: Because light attracts bugs.",
        "Q: How many IT guys does it take to change a light bulb?\nA: None, they just tell the user to reboot.",
        "Q: What's a programmer's favorite hangout place?\nA: Foo Bar.",
        "Windows Error Messages Bob Has Seen:\n- 'It works on my machine' - Classic developer denial\n- 'Have you tried turning it off and on again?' - The golden standard\n- 'This should only take 5 minutes' - Translation: 'Tomorrow'\n- 'It's a feature, not a bug' - Translation: 'I have no idea why it does that'",
        "Bob's IT Mantra:\n1. There are 10 types of people in the world: those who understand binary and those who don't.\n2. If it's not documented, it doesn't exist.\n3. Coffee is not a luxury, it's a requirement.\n4. The user is always right (even when they're wrong).\n5. RTFM is still valid advice."
    ],

    clippyMessages: [
        "It looks like you're reviewing Bob's resume. Would you like help highlighting Bob's Apple experience?",
        "It looks like Bob has a lot of skills. Should I organize them by awesomeness?",
        "It looks like you're about to email Bob. Great choice!",
        "It looks like you're viewing Bob's projects. Shall I brag for you?",
        "It looks like you're checking Bob's experience. 10 years of corporate IT!",
        "It looks like you found Bob's contact info. He's available for interviews!",
        "It looks like you're exploring Bob's skills. He's an Apple Genius!"
    ],

    bootMessages: [
        "Loading Bob's IT expertise...",
        "Compiling 10 years of experience...",
        "Loading Apple Genius certification...",
        "Loading corporate IT skills...",
        "Loading AWS and Azure expertise...",
        "Loading Python and PowerShell scripts...",
        "Loading Bob's resume...",
        "Loading project portfolio...",
        "Loading tech jokes...",
        "Loading coffee brewing skills...",
        "Almost ready..."
    ]
};

const windowTypes = {
    'my-computer': {
        title: 'My Computer',
        icon: 'assets/icons/my-computer.svg',
        width: 600,
        height: 400,
        content: 'my-computer'
    },
    'resume': {
        title: 'bob_resume.txt - Notepad',
        icon: 'assets/icons/my-documents.svg',
        width: 700,
        height: 500,
        content: 'resume'
    },
    'skills': {
        title: 'Add/Remove Programs',
        icon: 'assets/icons/control-panel.svg',
        width: 650,
        height: 450,
        content: 'skills'
    },
    'projects': {
        title: 'My Projects',
        icon: 'assets/icons/my-pictures.svg',
        width: 600,
        height: 400,
        content: 'projects'
    },
    'experience': {
        title: 'My Network Places',
        icon: 'assets/icons/my-network.svg',
        width: 600,
        height: 400,
        content: 'experience'
    },
    'contact': {
        title: 'New Message - Outlook Express',
        icon: 'assets/icons/outlook.svg',
        width: 600,
        height: 500,
        content: 'contact'
    },
    'web-portfolio': {
        title: 'citadelsystems - Internet Explorer',
        icon: 'assets/icons/ie.svg',
        width: 800,
        height: 600,
        content: 'web-portfolio'
    },
    'notepad': {
        title: 'tech_humor.txt - Notepad',
        icon: 'assets/icons/notepad.svg',
        width: 500,
        height: 400,
        content: 'notepad'
    },
    'recycle-bin': {
        title: 'Recycle Bin',
        icon: 'assets/icons/recycle-bin.svg',
        width: 500,
        height: 350,
        content: 'recycle-bin'
    },
    'cmd': {
        title: 'Command Prompt',
        icon: 'assets/icons/cmd.svg',
        width: 600,
        height: 400,
        content: 'cmd'
    },
    'ie': {
        title: 'Internet Explorer',
        icon: 'assets/icons/ie.svg',
        width: 800,
        height: 600,
        content: 'web-portfolio'
    }
};
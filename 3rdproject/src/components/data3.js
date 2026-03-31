const student = [

{
  "status": "OK",
  "data": [
    {
      "id": 1,
      "name": "Rahul Sharma",
      "college": "ABC Engineering College",
      "isActive": true,
      "profile": {
        "age": 21,
        "gender": "Male",
        "email": "rahul@example.com"
      },
      "courses": [
        {
          "courseName": "Computer Science",
          "duration": "4 years",
          "completed": false,
          "marks": [
            {
              "subject": "DSA",
              "score": 78
            },
            {
              "subject": "OS",
              "score": 72
            },
            {
              "subject": "DBMS",
              "score": 80
            }
          ],
          "attendance": {
            "totalClasses": 120,
            "attended": 102,
            "percentage": 85
          },
          "performance": {
            "grade": "A",
            "passed": true
          }
        }
      ]
    },
    {
      "id": 2,
      "name": "Priya Verma",
      "college": "XYZ University",
      "isActive": true,
      "profile": {
        "age": 23,
        "gender": "Female",
        "email": "priya@example.com"
      },
      "courses": [
        {
          "courseName": "MBA",
          "duration": "2 years",
          "completed": false,
          "marks": [
            {
              "subject": "Marketing",
              "score": 88
            },
            {
              "subject": "Finance",
              "score": 91
            }
          ],
          "attendance": {
            "totalClasses": 90,
            "attended": 81,
            "percentage": 90
          },
          "performance": {
            "grade": "A+",
            "passed": true
          }
        }
      ]
    },
    {
      "id": 3,
      "name": "Amit Kumar",
      "college": "National College",
      "isActive": false,
      "profile": {
        "age": 22,
        "gender": "Male",
        "email": "amit@example.com"
      },
      "courses": [
        {
          "courseName": "B.Com",
          "duration": "3 years",
          "completed": true,
          "marks": [
            {
              "subject": "Accounting",
              "score": 65
            },
            {
              "subject": "Economics",
              "score": 70
            }
          ],
          "attendance": {
            "totalClasses": 100,
            "attended": 60,
            "percentage": 60
          },
          "performance": {
            "grade": "B",
            "passed": true
          }
        }
      ]
    },
    {
      "id": 4,
      "name": "Sneha Singh",
      "college": "Global Institute",
      "isActive": true,
      "profile": {
        "age": 20,
        "gender": "Female",
        "email": "sneha@example.com"
      },
      "courses": [
        {
          "courseName": "BCA",
          "duration": "3 years",
          "completed": false,
          "marks": [
            {
              "subject": "Programming",
              "score": 92
            },
            {
              "subject": "Networking",
              "score": 85
            }
          ],
          "attendance": {
            "totalClasses": 110,
            "attended": 100,
            "percentage": 91
          },
          "performance": {
            "grade": "A+",
            "passed": true
          }
        }
      ]
    },
    {
      "id": 5,
      "name": "Vikas Yadav",
      "college": "Tech University",
      "isActive": false,
      "profile": {
        "age": 24,
        "gender": "Male",
        "email": "vikas@example.com"
      },
      "courses": [
        {
          "courseName": "Mechanical Engineering",
          "duration": "4 years",
          "completed": true,
          "marks": [
            {
              "subject": "Thermodynamics",
              "score": 58
            },
            {
              "subject": "Mechanics",
              "score": 62
            }
          ],
          "attendance": {
            "totalClasses": 130,
            "attended": 70,
            "percentage": 54
          },
          "performance": {
            "grade": "C",
            "passed": false
          }
        }
      ]
    },
    {
      "id": 6,
      "name": "Neha Gupta",
      "college": "City College",
      "isActive": true,
      "profile": {
        "age": 21,
        "gender": "Female",
        "email": "neha@example.com"
      },
      "courses": [
        {
          "courseName": "BA",
          "duration": "3 years",
          "completed": false,
          "marks": [
            {
              "subject": "History",
              "score": 75
            },
            {
              "subject": "Political Science",
              "score": 78
            }
          ],
          "attendance": {
            "totalClasses": 95,
            "attended": 85,
            "percentage": 89
          },
          "performance": {
            "grade": "A",
            "passed": true
          }
        }
      ]
    },
    {
      "id": 7,
      "name": "Rohit Jain",
      "college": "Modern Institute",
      "isActive": true,
      "profile": {
        "age": 22,
        "gender": "Male",
        "email": "rohit@example.com"
      },
      "courses": [
        {
          "courseName": "Civil Engineering",
          "duration": "4 years",
          "completed": false,
          "marks": [
            {
              "subject": "Structures",
              "score": 68
            },
            {
              "subject": "Surveying",
              "score": 72
            }
          ],
          "attendance": {
            "totalClasses": 115,
            "attended": 95,
            "percentage": 83
          },
          "performance": {
            "grade": "B+",
            "passed": true
          }
        }
      ]
    },
    {
      "id": 8,
      "name": "Anjali Mehta",
      "college": "Elite University",
      "isActive": false,
      "profile": {
        "age": 23,
        "gender": "Female",
        "email": "anjali@example.com"
      },
      "courses": [
        {
          "courseName": "Fashion Design",
          "duration": "2 years",
          "completed": true,
          "marks": [
            {
              "subject": "Design",
              "score": 89
            },
            {
              "subject": "Textiles",
              "score": 84
            }
          ],
          "attendance": {
            "totalClasses": 80,
            "attended": 70,
            "percentage": 87
          },
          "performance": {
            "grade": "A",
            "passed": true
          }
        }
      ]
    },
    {
      "id": 9,
      "name": "Karan Patel",
      "college": "Science College",
      "isActive": true,
      "profile": {
        "age": 20,
        "gender": "Male",
        "email": "karan@example.com"
      },
      "courses": [
        {
          "courseName": "Physics",
          "duration": "3 years",
          "completed": false,
          "marks": [
            {
              "subject": "Quantum",
              "score": 55
            },
            {
              "subject": "Optics",
              "score": 60
            }
          ],
          "attendance": {
            "totalClasses": 100,
            "attended": 65,
            "percentage": 65
          },
          "performance": {
            "grade": "C",
            "passed": false
          }
        }
      ]
    },
    {
      "id": 10,
      "name": "Pooja Rani",
      "college": "Commerce Institute",
      "isActive": true,
      "profile": {
        "age": 22,
        "gender": "Female",
        "email": "pooja@example.com"
      },
      "courses": [
        {
          "courseName": "BBA",
          "duration": "3 years",
          "completed": false,
          "marks": [
            {
              "subject": "Finance",
              "score": 82
            },
            {
              "subject": "Management",
              "score": 86
            }
          ],
          "attendance": {
            "totalClasses": 105,
            "attended": 98,
            "percentage": 93
          },
          "performance": {
            "grade": "A+",
            "passed": true
          }
        }
      ]
    }
  ]
}]
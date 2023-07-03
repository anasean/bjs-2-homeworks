class Student {
    constructor(name, gender, age) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.marks = [];
    }
  
    setSubject(subjectName) {
      this.subject = subjectName;
    }
  
    addMarks(...marks) {
      if (this.marks !== undefined) {
        this.marks.push(...marks);
      }
    }
  
    getAverage() {
      return this.marks !== undefined && this.marks.length > 0
        ? this.marks.reduce((a, b) => a + b, 0) / this.marks.length
        : 0;
    }
  
    exclude(reason) {
      this.excluded = reason;
      delete this.subject;
      delete this.marks;
    }
  }
  

  
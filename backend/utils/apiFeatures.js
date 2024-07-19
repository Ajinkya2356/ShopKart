class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    const removeFields = [
      "keyword",
      "page",
      "lowToHigh",
      "highToLow",
      "category",
    ];
    removeFields.forEach((key) => delete queryCopy[key]);
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    let queryObj = JSON.parse(queryStr);

    if (queryObj.price && queryObj.price.$gte) {
      queryObj.price.$gte = Number(queryObj.price.$gte);
    }
    if (queryObj.price && queryObj.price.$lte) {
      queryObj.price.$lte = Number(queryObj.price.$lte);
    }

    this.query = this.query.find(queryObj);
    return this;
  }
  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resultPerPage * (currentPage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }

  filterByPrice() {
    const { lowToHigh, highToLow } = this.queryStr;
    if (Number(lowToHigh) === 1) {
      this.query = this.query.find().sort({ price: 1 });
    } else if (Number(highToLow) === 1) {
      this.query = this.query.find().sort({ price: -1 });
    } else {
      this.query = this.query.find().sort({ createdAt: -1 });
    }
    return this;
  }

  filterByCategory() {
    if (this.queryStr.category) {
      this.query = this.query.find({ category: this.queryStr.category });
    }

    return this;
  }
}
module.exports = ApiFeatures;

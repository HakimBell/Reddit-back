require('source-map-support/register');
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controllers/postController.js":
/*!*******************************************!*\
  !*** ./src/controllers/postController.js ***!
  \*******************************************/
/*! exports provided: createPost, getAllPost, addPostSubreddit, deletePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPost", function() { return createPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPost", function() { return getAllPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostSubreddit", function() { return addPostSubreddit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePost", function() { return deletePost; });
/* harmony import */ var _models_postModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/postModel */ "./src/models/postModel.js");
/* harmony import */ var _models_subRedditModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/subRedditModel */ "./src/models/subRedditModel.js");


const createPost = async (req, res) => {
  try {
    const {
      title,
      content
    } = req.body;
    const newPost = await new _models_postModel__WEBPACK_IMPORTED_MODULE_0__["default"]({
      title,
      content
    });
    newPost.save();
    res.json(newPost);
    res.json("Post créé avec succés");
  } catch (error) {
    res.json(error.message);
  }
};
const getAllPost = async (req, res) => {
  try {
    const allPosts = await _models_postModel__WEBPACK_IMPORTED_MODULE_0__["default"].find();
    res.json(allPosts);
    res.json("Voici tous les posts ");
  } catch (error) {
    res.json(error.message);
  }
};
const deletePost = async (req, res) => {
  try {
    const deletePost = await _models_postModel__WEBPACK_IMPORTED_MODULE_0__["default"].findByIdAndDelete(req.params.id);
    if (!deletePost) {
      res.json({
        message: "Post not found"
      });
    }
    res.json({
      message: "Post deleted"
    });
  } catch (error) {
    res.json({
      error: error.message
    });
  }
};
const addPostSubreddit = async (req, res) => {
  try {
    const newPost = await _models_postModel__WEBPACK_IMPORTED_MODULE_0__["default"].findById(req.params.id_post);
    const subReddit = await _models_subRedditModel__WEBPACK_IMPORTED_MODULE_1__["default"].findById(req.params.id_subreddit);
    subReddit.posts.push(newPost);
    subReddit.save();
    res.json(subReddit);
  } catch (error) {
    res.json(error.message);
  }
};


/***/ }),

/***/ "./src/controllers/subRedditController.js":
/*!************************************************!*\
  !*** ./src/controllers/subRedditController.js ***!
  \************************************************/
/*! exports provided: createSubReddit, getAllSubReddits, getsubRedditById, deleteSubreddit, deletePostSubreddit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSubReddit", function() { return createSubReddit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubReddits", function() { return getAllSubReddits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getsubRedditById", function() { return getsubRedditById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSubreddit", function() { return deleteSubreddit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePostSubreddit", function() { return deletePostSubreddit; });
/* harmony import */ var _models_subRedditModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/subRedditModel */ "./src/models/subRedditModel.js");
/* harmony import */ var _models_postModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/postModel */ "./src/models/postModel.js");


const createSubReddit = async (req, res) => {
  const {
    title,
    description
  } = req.body;
  try {
    const newSubReddit = await new _models_subRedditModel__WEBPACK_IMPORTED_MODULE_0__["default"]({
      title,
      description
    });
    newSubReddit.save();
    res.json(newSubReddit);
  } catch (error) {
    res.json({
      error: error.message
    });
  }
};
const getAllSubReddits = async (req, res) => {
  try {
    const allSubReddits = await _models_subRedditModel__WEBPACK_IMPORTED_MODULE_0__["default"].find();
    res.json(allSubReddits);
  } catch (error) {
    res.json({
      error: error.message
    });
  }
};
const getsubRedditById = async (req, res) => {
  try {
    const oneSubreddit = await _models_subRedditModel__WEBPACK_IMPORTED_MODULE_0__["default"].findById(req.params.id);
    if (!oneSubreddit) {
      res.json({
        message: " subreddit not found !"
      });
    }
    res.json(oneSubreddit);
  } catch (error) {
    res.json({
      error: error.message
    });
  }
};
const deleteSubreddit = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const deleteSubreddit = await _models_subRedditModel__WEBPACK_IMPORTED_MODULE_0__["default"].findOneAndDelete(id);
    if (!deleteSubreddit) {
      return res.json({
        error: "Subreddit pas trouvé"
      });
    }
    // res.json(deleteSubreddit);
    res.json({
      message: "Subreddit deleted successfully"
    });
  } catch (error) {
    res.json({
      error: error.message
    });
  }
};
const deletePostSubreddit = async (req, res) => {
  try {
    const postId = req.params.id_post;
    const subRedditId = req.params.id_subreddit;
    const subReddit = await _models_subRedditModel__WEBPACK_IMPORTED_MODULE_0__["default"].findByIdAndUpdate(subRedditId, {
      $pull: {
        posts: postId
      }
    }, {
      new: true
    });
    res.json(subReddit);
  } catch (error) {
    res.json(error.message);
  }
};


/***/ }),

/***/ "./src/controllers/userController.js":
/*!*******************************************!*\
  !*** ./src/controllers/userController.js ***!
  \*******************************************/
/*! exports provided: inscription, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inscription", function() { return inscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/userModel */ "./src/models/userModel.js");

const inscription = async (req, res) => {
  try {
    const newUser = await _models_userModel__WEBPACK_IMPORTED_MODULE_0__["default"].create(req.body);
    newUser.password = await newUser.encryptPassword(req.body.password);
    newUser.save();
    res.json(newUser);
  } catch (error) {
    res.json({
      error: error.message
    });
  }
};
const login = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_0__["default"].findOne({
      email
    }).select("+password");
    if (!user) {
      const error = new Error("Invalid user");
      throw error;
    }
    const validPassword = await user.validPassword(req.body.password, user.password);
    console.log("Password from request:", req.body.password);
    console.log("Password from database:", user.password);
    if (!validPassword) {
      const error = new Error("Invalid password");
      throw error;
    }
    res.json({
      user,
      message: "Vous êtes bien connécté"
    });
  } catch (error) {
    console.error(error.message);
  }
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv/config */ "dotenv/config");
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes_userRoutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/userRoutes */ "./src/routes/userRoutes.js");
/* harmony import */ var _routes_subRedditRoutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/subRedditRoutes */ "./src/routes/subRedditRoutes.js");
/* harmony import */ var _routes_postRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/postRoutes */ "./src/routes/postRoutes.js");







const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
const port = process.env.PORT;
main().catch(err => console.log(err));
async function main() {
  await mongoose__WEBPACK_IMPORTED_MODULE_3___default.a.connect(process.env.MONGODB_URI);
  console.log(`[DATABASE] MongoDB is Connected`);
}

// Utilisation de middleware pour traiter les données JSON dans les requêtes
app.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({
  extended: false
}));
app.get("/", (req, res) => res.send("SALUT HAKIM DADDY MICHELIN"));
app.use("/auth", _routes_userRoutes__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.use("/subreddit", _routes_subRedditRoutes__WEBPACK_IMPORTED_MODULE_5__["default"]);
app.use("/post", _routes_postRoutes__WEBPACK_IMPORTED_MODULE_6__["default"]);
app.listen(port, () => console.log(`[SERVER] listening at http://localhost:${port}`));

/***/ }),

/***/ "./src/models/postModel.js":
/*!*********************************!*\
  !*** ./src/models/postModel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const postSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  title: {
    type: String,
    required: true
  },
  content: String,
  // user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments: [{
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__["mongoose"].Schema.Types.ObjectId,
    ref: "Comment"
  }]
});
const Post = mongoose__WEBPACK_IMPORTED_MODULE_0__["mongoose"].model("Post", postSchema);
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./src/models/subRedditModel.js":
/*!**************************************!*\
  !*** ./src/models/subRedditModel.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const subRedditSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  title: String,
  description: String,
  posts: [{
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.ObjectId,
    ref: "Post"
  }]
});
const SubReddit = mongoose__WEBPACK_IMPORTED_MODULE_0__["mongoose"].model("SubReddit", subRedditSchema);
/* harmony default export */ __webpack_exports__["default"] = (SubReddit);

/***/ }),

/***/ "./src/models/userModel.js":
/*!*********************************!*\
  !*** ./src/models/userModel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);



const userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    minlength: 5
  }
});

// Un petit peu de sel de guérande
userSchema.methods.encryptPassword = async password => {
  const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.genSalt(8);
  const hash = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.hash(password, salt);
  return hash;
};
userSchema.methods.validPassword = async (applicantPassword, oldPassword) => {
  const result = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.compare(applicantPassword, oldPassword);
  return result;
};
const User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("User", userSchema);
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/routes/postRoutes.js":
/*!**********************************!*\
  !*** ./src/routes/postRoutes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_postController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/postController */ "./src/controllers/postController.js");

const postRouter = __webpack_require__(/*! express */ "express").Router();
postRouter.post("/submitpost", _controllers_postController__WEBPACK_IMPORTED_MODULE_0__["createPost"]);
postRouter.post("/allPosts", _controllers_postController__WEBPACK_IMPORTED_MODULE_0__["getAllPost"]);
postRouter.post("/:id_subreddit/addpostsubreddit/:id_post", _controllers_postController__WEBPACK_IMPORTED_MODULE_0__["addPostSubreddit"]);
postRouter.delete("/deletePost/:id", _controllers_postController__WEBPACK_IMPORTED_MODULE_0__["deletePost"]);
/* harmony default export */ __webpack_exports__["default"] = (postRouter);

/***/ }),

/***/ "./src/routes/subRedditRoutes.js":
/*!***************************************!*\
  !*** ./src/routes/subRedditRoutes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_subRedditController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/subRedditController */ "./src/controllers/subRedditController.js");

const subRedditRouter = __webpack_require__(/*! express */ "express").Router();
subRedditRouter.post("/newSubReddit", _controllers_subRedditController__WEBPACK_IMPORTED_MODULE_0__["createSubReddit"]);
subRedditRouter.get("/allSubReddits", _controllers_subRedditController__WEBPACK_IMPORTED_MODULE_0__["getAllSubReddits"]);
subRedditRouter.get("/:id", _controllers_subRedditController__WEBPACK_IMPORTED_MODULE_0__["getsubRedditById"]);
subRedditRouter.delete("/:id/clean", _controllers_subRedditController__WEBPACK_IMPORTED_MODULE_0__["deleteSubreddit"]);
subRedditRouter.delete("/:id_subreddit/delete-post-subreddit/:id_post", _controllers_subRedditController__WEBPACK_IMPORTED_MODULE_0__["deletePostSubreddit"]);
/* harmony default export */ __webpack_exports__["default"] = (subRedditRouter);

/***/ }),

/***/ "./src/routes/userRoutes.js":
/*!**********************************!*\
  !*** ./src/routes/userRoutes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_userController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/userController */ "./src/controllers/userController.js");

const userRouter = __webpack_require__(/*! express */ "express").Router();
userRouter.post("/inscription", _controllers_userController__WEBPACK_IMPORTED_MODULE_0__["inscription"]);
userRouter.post("/login", _controllers_userController__WEBPACK_IMPORTED_MODULE_0__["login"]);
/* harmony default export */ __webpack_exports__["default"] = (userRouter);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hakim/dev/reddit-back/src/index.js */"./src/index.js");


/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=main.map
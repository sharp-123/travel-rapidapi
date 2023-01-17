const axios = require("axios");
const { sort } = require("semver");

const searchLocation = (req, res) => {
	const options = {
		method: 'GET',
		url: 'https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete',
		params: { text: req.query.query, languagecode: 'en-us' },
		headers: {
			'X-RapidAPI-Key': '5c476d6342msh05ee9313efa0affp17029cjsnae85b77e1954',
			'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
		}
	};
	axios.request(options).then(function (response) {
		res.json(response.data);
	}).catch(function (error) {
		console.error(error);
	});
}

const getHotelsFilter = (req, res) => {
	const options = {
		method: 'GET',
		url: 'https://apidojo-booking-v1.p.rapidapi.com/properties/list',
		params: {
			offset: '0',
			arrival_date: req.query.arrival_date,
			departure_date: req.query.departure_date,
			guest_qty: req.query.guest_qty,
			dest_ids: req.query.dest_ids,
			room_qty: req.query.room_qty,
			search_type: req.query.search_type,
			children_qty: req.query.children_qty,
			search_id: req.query.search_id,
			price_filter_currencycode: 'USD',
			order_by: 'popularity',
			languagecode: 'en-us',
			travel_purpose: 'leisure'
		},
		headers: {
			'X-RapidAPI-Key': '5c476d6342msh05ee9313efa0affp17029cjsnae85b77e1954',
			'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
		}
	};
	axios.request(options).then(function (response) {
		res.json(response.data);
	}).catch(function (error) {
		console.error(error);
	});
}

const searchHotels = (req, res) => {
	if (req.query.categories_filter == undefined) {
		req.query.categories_filter = [];
	}
	const options = {
		method: 'GET',
		url: 'https://apidojo-booking-v1.p.rapidapi.com/properties/list',
		params: {
			offset: req.query.offset,
			arrival_date: req.query.arrival_date,
			departure_date: req.query.departure_date,
			guest_qty: req.query.guest_qty,
			dest_ids: req.query.dest_ids,
			room_qty: req.query.room_qty,
			search_type: req.query.search_type,
			children_qty: req.query.children_qty,
			search_id: req.query.search_id,
			price_filter_currencycode: 'USD',		
			order_by: 'popularity',
			languagecode: 'en-us',
			travel_purpose: 'leisure',
			search_id: req.query.search_id,
			categories_filter: req.query.categories_filter.toString()
		},
		headers: {
			'X-RapidAPI-Key': '5c476d6342msh05ee9313efa0affp17029cjsnae85b77e1954',
			'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
		}
	};
	const baseurl = "http://localhost:3030/"
	axios.request(options).then(function (response) {
		// res.json({ "scrapped": response.data, "base": baseurl, "params": req.query });
		res.render("../views/searchResult", { "scrapped": response.data, "base": baseurl, "params": req.query, });
	}).catch(function (error) {
		// console.error(error);
	});
}

const getHotelDetails = (req, res) => {
	const options = {
		method: 'GET',
		url: 'https://apidojo-booking-v1.p.rapidapi.com/properties/detail',
		params: {
			hotel_id: req.query.hotel_id,
			search_id: req.query.search_id,
			departure_date: req.query.departure_date,
			arrival_date: req.query.arrival_date,
			rec_guest_qty: req.query.rec_guest_qty,
			rec_room_qty: req.query.rec_room_qty,
			languagecode: 'en-us',
			currency_code: 'USD',
			units: 'imperial'
		},
		headers: {
			'X-RapidAPI-Key': '5c476d6342msh05ee9313efa0affp17029cjsnae85b77e1954',
			'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
		}
	};

	axios.request(options).then(function (response) {
		res.json(response.data);
	}).catch(function (error) {
		console.error(error);
	});
}

module.exports = { searchLocation, getHotelsFilter, searchHotels, getHotelDetails };
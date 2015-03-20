'use strict';

var restifyUrlVersion = require('./index')
  , request = require('supertest')
  , restify = require('restify')
  , assert = require('assert')


describe('Restify URL Version', function() {

  describe('middleware', function() {
    var server = restify.createServer()

    server.pre(restifyUrlVersion('_v', 'x-api-version'))
    
    server.get({path: '/', version: '1.0.0'}, function(req, res, next) {
      assert(req.headers['x-api-version'])
      res.send(200)
    })
    server.get({path: '/', version: '2.0.0'}, function(req, res, next) {
      res.send(500)
    })

    it('header', function(done) {
      request(server)
        .get('/')
        .set('x-api-version', '1.0.0')
        .expect(200, done)
    })

    it('querystring', function(done) {
      request(server)
        .get('/?_v=1.0.0&_v=1.0.0&_v=1.2.0')
        .expect(200, done)
    })

    it('none', function(done) {
      request(server)
        .get('/')
        .expect(500, done)
    })
  })

  describe('middleware array', function() {
    var server = restify.createServer()

    server.pre(restifyUrlVersion(['v', 'foobar'], 'accept-version'))
    
    server.get({path: '/', version: '1.0.0'}, function(req, res, next) {
      assert(req.headers['accept-version'])
      res.send(200)
    })
    server.get({path: '/', version: '2.0.0'}, function(req, res, next) {
      res.send(500)
    })

    it('header', function(done) {
      request(server)
        .get('/')
        .set('accept-version', '1.0.0')
        .expect(200, done)
    })

    it('querystring', function(done) {
      request(server)
        .get('/?foobar=1.0.0')
        .expect(200, done)
    })

    it('querystring', function(done) {
      request(server)
        .get('/?v=1.0.0')
        .expect(200, done)
    })

    it('none', function(done) {
      request(server)
        .get('/')
        .expect(500, done)
    })
  })

  describe('default', function() {
    var server = restify.createServer()
    
    server.get({path: '/', version: '1.0.0'}, function(req, res, next) {
      assert(req.headers['x-api-version'])
      res.send(200)
    })
    server.get({path: '/', version: '2.0.0'}, function(req, res, next) {
      res.send(500)
    })

    it('header', function(done) {
      request(server)
        .get('/')
        .set('x-api-version', '1.0.0')
        .expect(200, done)
    })

    it('querystring', function(done) {
      request(server)
        .get('/?_v=1.0.0')
        .expect(500, done)
    })

    it('none', function(done) {
      request(server)
        .get('/')
        .expect(500, done)
    })
  })
})

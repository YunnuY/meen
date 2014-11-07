import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('users', function() { });
  this.route('signup');
  this.route('signin');

  this.route('error', { path: '/*path' });
});

export default Router;

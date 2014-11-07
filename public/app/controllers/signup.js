import Ember from 'ember';

export default Ember.ObjectController.extend({
  error: null,

  actions: {
    signup: function() {
      var _this = this;

      this.get('model').save().then(function(data) {
        console.log('signup saved ok:', data);
      }, function(data) {
        console.log('signup saved fail:', data);
        _this.set('error', data.responseJSON.message || 'sorry, signup failed.');
      });
    }
  }
});

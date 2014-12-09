import Ember from 'ember';

export default Ember.ObjectController.extend({
  error: null,

  actions: {
    signup: function() {
      var _this = this;

      this.get('model').save().then(function(data) {
        console.log('signup response:', data);
        alert('signup saved ok! redirect to signin');
        _this.transitionToRoute('signin');
      }, function(data) {
        alert('signup saved fail!');
        _this.set('error', data.responseJSON.error || 'sorry, signup failed.');
      });
    }
  }
});

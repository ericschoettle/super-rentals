import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      announcements: this.store.findAll('announcement')
    })
  },

  actions: {
    saveRental(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
    },

    destroyRental(rental) {
      rental.destroyRecord();
      // this.transitionTo('index');
    },

    saveAnnouncement3(announcement) {
      var newAnnouncement = this.store.createRecord('announcement', announcement);
      newAnnouncement.save();
    },

    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
    }
  }
});

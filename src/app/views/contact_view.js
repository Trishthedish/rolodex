//contact_view.js
// handles the logic for single contact view.
import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options){
    console.log("options in contact_iew_>", options);
    this.model = options.model;
    this.template = options.template;
    // do we need these 2 rangle these ?>
    // this.email = options.contact.email;
    // this.phone = options.contact.phone;

    this.template = _.template($('#tmpl-contact-card').html());
    this.listElement = this.$('.contact-card');

    this.detailsTemplate = _.template($('#tmpl-contact-details').html());
    this.element = $('#contact-details');

    this.model.bind('change', this.render.bind(this));


    },
    events: {
         'click .contact-card' : 'showDetails',
         // 'click .btn cancel' : clearInput
    },

    showDetails: function() {
      console.log("Clicked on contact you did.");
      // probably should pull details from #'temp-contact-details'
      var innerText = this.detailsTemplate({
        name: this.model.get("name"),
        email: this.model.get("email"),
        phone: this.model.get("phone")
      });
      this.element.html(innerText);
      $("#contact-details").show();
      console.log("this model",this.model);
    },

    render: function(){
    // Use the contact template to build some HTML, and
    // add it to our DOM object
    this.delegateEvents();
    this.listElement.empty();

    var html = this.template(this.model.toJSON());
    this.$el.html(html);
    // this.$el.html(this.template(this.model.attributes));

    // Since the HTML elements are destroyed and re-created from
    // scratch every time the list re-renders, we need to re-bind
    // event handlers that listen to events on those elements.
    // Enable chained calls
    return this;

    }
  });

/// Shall delete this once finalized.
  //     render: function(){
  //
  //       // console.log("I'm here");
  //       var html = this.template({name: this.name});
  //       // console.log("I'm here htlm>", html);
  //       // console.log("$el:  ", this.$el);
  //       this.$el.html(html);
  //       return this;
  //     },
  //
  //
    //store the full list of contacts
    // this.contactData = options.contactData;
    //
    // // Compile a template to be shared between the individual tasks
    // this.contactTemplate = _.template($('#tmpl-contact-card').html());
    // // not sure if this is how its done.
    // this.listElement = this.$('#contact-list');
    //
    // // model/template options.model
    //  this.contactModel = options.model;
    //
    //
    // //create a ContactView for each contact
    // // this.modelList = [];
    // this.cardList = [];

    // this.contactData.forEach(function(contact){
    //   var card = new ContactView({
    //     contact: contact,
    //     template: this.taskTemplate
    //   });
    //   this.cardList.push(card);
    // }, this); // bind this
    //
    // this.input = {
    //   name: this.$('.new-contact input[name="name"]'),
    //   phone: this.$('.new-contact input[name="phone"]'),
    //   email: this.$('.new-contact input[name="email"]')
    // };

 // end of initialize


  // http://backbonejs.org/#View-render
  // render: function(){
  //   // this.$el.html(this.contactTemplate(this.contactModel.attributes));
  //   // return this;
  // // },
  //
  // events:  {
  //   // right: name of function that insides page view.
  //   'click btn-save' : 'createContact',
  //   'click btn-cancel':'clearInput'
  //
  // },
  //
  // // clear input function
  // clearInput: function(event) {
  //   console.log("clear Input called!");
  //   this.input.name.val('');
  //   this.input.email.val('');
  //   this.input.phone.val('');
  // },
  //
  // // create Contact function
  // createContact: function() {
  //   event.preventDefault();
  //   //get input data from the form. and turn it into contact.
  //
  //   var contact = this.getInput();
  //
  //   // add the dat
  //   var card = new RolodexView({
  //     contact: contact,
  //     template: this.contactTemplate
  //
  //   });
  //   this.cartList.push(card);
  //
  // },
  //
  // getInput: function() {
  //   var contact = {
  //     name: this.input.name.val(),
  //     email: this.input.email.val(),
  //     phone: this.input.phone.val()
  //   };
  //   return contact;
  // },// end getInputl





export default ContactView;

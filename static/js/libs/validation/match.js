define(['zepto'], function ($) {
  return function () {
    if (this.data('match')) {
      if (this.val() === $(this.data('match')).val()) {
        return ['This does not match the password.'];
      }
    }
    return [];
  };
});
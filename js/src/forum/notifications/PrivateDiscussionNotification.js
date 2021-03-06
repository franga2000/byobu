import Notification from 'flarum/components/Notification';

export default class PrivateDiscussionNotification extends Notification {
    icon() {
        return 'fas fa-map';
    }

    href() {
        const notification = this.attrs.notification;
        const discussion = notification.subject();

        return app.route.discussion(discussion);
    }

    content() {
        const user = this.attrs.notification.fromUser();
        return app.translator.trans('fof-byobu.forum.notifications.pd_text', {
            user: user,
        });
    }
}

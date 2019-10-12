import {
    animate,
    keyframes,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { INotificationConfig } from '../interfaces/INotificationConfig';

export const notificationAnimation = (config: INotificationConfig) =>
    trigger('openClose', [
        state(
            'void',
            style({
                opacity: 0,
            })
        ),
        state(
            'open',
            style({
                opacity: 1,
            })
        ),
        transition(
            'void => open',
            animate(
                `${config.appearanceTime}ms ease-out`,
                keyframes([
                    style({
                        transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
                        opacity: 0,
                    }),
                    style({
                        transform: 'skewX(20deg)',
                        opacity: 0.5,
                    }),
                    style({
                        transform: 'skewX(-5deg)',
                        opacity: 0.5,
                    }),
                    style({
                        transform: 'none',
                        opacity: 1,
                    }),
                ])
            )
        ),
        transition(
            'open => void',
            animate(
                `${config.disappearanceTime}ms ease-out`,
                keyframes([
                    style({
                        opacity: 1,
                    }),
                    style({
                        transform: 'translate3d(100%, 0, 0) skewX(30deg)',
                        opacity: 0,
                    }),
                ])
            )
        ),
    ]);

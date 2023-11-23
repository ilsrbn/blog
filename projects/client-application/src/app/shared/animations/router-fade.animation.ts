import {
  animate,
  animateChild,
  AnimationTriggerMetadata,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

const AnimationConfig = {
  opacity: {
    min: 0.05,
    max: 1,
  },
  speed: '200ms',
  delay: '200ms',
  timingFunction: 'ease-in',
};

export const fadeAnimation: AnimationTriggerMetadata = trigger(
  'fadeAnimation',
  [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 16,
            left: 0,
            width: '100%',
          }),
        ],
        { optional: true },
      ),
      query(':enter', [style({ opacity: 0 })], {
        optional: true,
      }),
      query(':leave', [style({ opacity: AnimationConfig.opacity.max })], {
        optional: true,
      }),
      group([
        query(
          ':leave',
          [
            animate(
              `${AnimationConfig.speed} ${AnimationConfig.timingFunction}`,
              style({ opacity: AnimationConfig.opacity.min }),
            ),
          ],
          {
            optional: true,
          },
        ),
        query(
          ':enter',
          [
            animate(
              `${AnimationConfig.speed} ${AnimationConfig.delay} ${AnimationConfig.timingFunction}`,
              style({ opacity: AnimationConfig.opacity.max }),
            ),
          ],
          {
            optional: true,
          },
        ),
        query('@*', animateChild(), { optional: true }),
      ]),
    ]),
  ],
);

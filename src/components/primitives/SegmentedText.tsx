import { Fragment } from 'react';
import type { TextSegment } from '@/types/content';

type EmphasisStyle = 'accent' | 'strong';

interface SegmentedTextProps {
  segments: TextSegment[];
  emphasis?: EmphasisStyle;
}

export function SegmentedText({ segments, emphasis = 'accent' }: SegmentedTextProps) {
  return (
    <>
      {segments.map((segment, index) => {
        if (!segment.emphasis) {
          return <Fragment key={index}>{segment.text}</Fragment>;
        }

        if (emphasis === 'accent') {
          return (
            <span key={index} className="text-electric-cobalt">
              {segment.text}
            </span>
          );
        }

        // font-normal disengaja: sistemnya single-weight (DESIGN.md), penekanan dibawa warna
        return (
          <strong key={index} className="font-normal text-ice-white">
            {segment.text}
          </strong>
        );
      })}
    </>
  );
}

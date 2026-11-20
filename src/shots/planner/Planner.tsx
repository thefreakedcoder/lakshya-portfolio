import { Bar, Check, Collapse, Roll, Stage, Text, Window, type Act } from '../../stageshow/kit'
import './planner.css'

// Agentic Coding Planner: the plan tracker. The learner marks Day 4 done; the
// check draws, the row settles, then the progress count rolls 3 to 4 and the
// bar grows, and a "Next" line opens under it. A second click (undo) is the
// visible cause of the reset.
//
// Gold: table-edit (an edit in a window, the figure it feeds rolls a beat later).
// Real strings: the plan title, "3 of 14 days", Day 1 to 5, "Tool-use loops",
// the Next line. Everything else is placeholder bars.

type S = { done: boolean; count: number; next: boolean }
const initial: S = { done: false, count: 3, next: false }
const poster: S = { done: true, count: 4, next: true }

const REST = { wide: { x: 586, y: 372 }, compact: { x: 322, y: 318 } }

async function script(a: Act<S>) {
  await a.wait(1000)
  a.mark('mark')
  await a.move({ at: 'check', x: 0.5, y: 0.5 })
  await a.wait(200)
  await a.click({ at: 'check', x: 0.5, y: 0.5 })
  a.put({ done: true })
  await a.move(REST[a.layout], { duration: 900 })
  await a.wait(300)
  a.mark('count')
  a.put({ count: 4 })
  await a.wait(600)
  a.put({ next: true })
  await a.wait(3000)
  // The reset has a cause: the learner undoes it
  a.mark('undo')
  await a.move({ at: 'check', x: 0.5, y: 0.5 })
  await a.wait(150)
  await a.click({ at: 'check', x: 0.5, y: 0.5 })
  a.put({ done: false })
  await a.wait(500)
  a.put({ count: 3, next: false })
  await a.move(REST[a.layout], { duration: 900 })
  await a.wait(1200)
}

const DONE_WIDTHS = [150, 118, 136]
const LATER = [
  [124, 40],
  [150, 52],
  [104, 36],
  [138, 48],
  [116, 44],
  [142, 40],
]

export function PlannerShot({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  return (
    <Stage<S>
      width={640}
      height={400}
      compact={{ below: 600, width: 358, height: 340 }}
      initial={initial}
      poster={poster}
      script={script}
      play="loop"
      theme={theme}
      palette="mono"
      cursor={{ at: REST }}
      className="pp"
    >
      {(s) => (
        <Window url="agentic-coding-planner.vercel.app" className="pp-window" body={{ className: 'pp-body' }}>
          <div className="pp-page">
            <div className="pp-head">
              <Text className="pp-title">14-day plan · Agentic coding</Text>
              <span className="pp-count">
                <Roll>{`${s.count} of 14 days`}</Roll>
              </span>
            </div>
            <div className="pp-track">
              <i className="pp-fill" style={{ transform: `scaleX(${s.count / 14})` }} />
            </div>
            <Collapse open={s.next}>
              <Text className="pp-next">Next: Day 5 · Planning agents</Text>
            </Collapse>
            <div className="pp-list">
              {[0, 1, 2].map((i) => (
                <div key={i} className="pp-row">
                  <Check on size={16} />
                  <Text className="pp-day">{`Day ${i + 1}`}</Text>
                  <span className="pp-what"><Bar w={DONE_WIDTHS[i]} h={6} tone={3} /></span>
                  <span className="pp-hours"><Bar w={28} h={6} tone={2} /></span>
                </div>
              ))}
              <div className="pp-row" data-current={!s.done || undefined}>
                <Check on={s.done} size={16} data-target="check" data-cursor="pointer" />
                <Text className="pp-day">Day 4</Text>
                <span className="pp-what"><Text>Tool-use loops</Text></span>
                <span className="pp-hours"><Bar w={28} h={6} tone={2} /></span>
              </div>
              {LATER.map(([w, h], i) => (
                <div key={i} className="pp-row">
                  <Check on={false} size={16} />
                  <Text className="pp-day">{`Day ${i + 5}`}</Text>
                  <span className="pp-what"><Bar w={w} h={6} tone={2} /></span>
                  <span className="pp-hours"><Bar w={h} h={6} tone={1} /></span>
                </div>
              ))}
            </div>
          </div>
        </Window>
      )}
    </Stage>
  )
}

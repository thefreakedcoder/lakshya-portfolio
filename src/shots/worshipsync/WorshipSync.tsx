import { Music } from 'lucide-react'
import { Bar, Button, Phone, Roll, Row, Stage, Text, Window, useLook, type Act } from '../../stageshow/kit'
import './worship.css'

// WorshipSync: the leader's web window and a band member's phone telling one
// event. The leader steps the key from E to F; the chord sheet in the window
// rolls to the new key, and a beat later the member's phone, following the
// same live session, rolls the same chords. The "Live" dot is the only signal
// colour on the page. A second click (-1) is the visible cause of the reset.
//
// Gold: device-pair (window with a phone straddling its edge over margin) with
// the roll motion of table-edit (a value changes, what depends on it follows
// a beat later).
//
// Real strings: WorshipSync, Sunday set, Lantern Hymn, Key, the chords, the
// key letter, -1/+1 and "Live · synced". Lyrics are placeholder bars.

type S = { key: number; phone: number }
const initial: S = { key: 0, phone: 0 }
const poster: S = { key: 1, phone: 1 }

// Song in E. Chords are sharps-only so the transposition is exact.
const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const BASE = 4 // E
const transpose = (chord: string, by: number) => {
  const m = /^([A-G]#?)(.*)$/.exec(chord)!
  return NOTES[(NOTES.indexOf(m[1]) + by + 12) % 12] + m[2]
}

const SHEET = [
  ['E', 'B', 'C#m', 'A'],
  ['A', 'E', 'B', 'E'],
  ['C#m', 'A', 'E', 'B'],
]
// Where each chord sits over its (placeholder) words, in the window
const AT = [
  [0, 58, 112, 170],
  [0, 50, 108, 164],
  [0, 56, 104, 166],
]
const LYRIC = [
  [188, 142],
  [168, 150],
  [182, 120],
]

const REST = { wide: { x: 84, y: 336 }, compact: { x: 30, y: 226 } }

async function script(a: Act<S>) {
  await a.wait(1100)
  a.mark('step')
  await a.move({ at: 'plus', x: 0.78, y: 0.62 })
  await a.wait(180)
  await a.click({ at: 'plus', x: 0.78, y: 0.62 })
  a.put({ key: 1 })
  // The phone follows the leader a beat later
  await a.wait(750)
  a.mark('sync')
  a.put({ phone: 1 })
  a.move(REST[a.layout], { duration: 900 })
  await a.wait(3000)
  // The reset has a cause: the leader steps the key back down
  a.mark('back')
  await a.move({ at: 'minus', x: 0.86, y: 0.8 })
  await a.wait(150)
  await a.click({ at: 'minus', x: 0.86, y: 0.8 })
  a.put({ key: 0 })
  await a.wait(750)
  a.put({ phone: 0 })
  a.move(REST[a.layout], { duration: 900 })
  await a.wait(1500)
}

const keyName = (n: number) => transpose(NOTES[BASE], n)

function ThemedPhone({ width, className, children }: { width: number; className: string; children: React.ReactNode }) {
  const { theme } = useLook()
  const dark = theme === 'dark'
  return (
    <Phone width={width} frame="android" dark={dark} wallpaper={dark ? '#0a0a0b' : '#fbfbfa'} className={className}>
      {children}
    </Phone>
  )
}

export function WorshipSyncShot({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  return (
    <Stage<S>
      width={640}
      height={400}
      compact={{ below: 600, width: 358, height: 470 }}
      initial={initial}
      poster={poster}
      script={script}
      play="loop"
      theme={theme}
      palette="mono"
      cursor={{ at: REST }}
      className="ws"
    >
      {(s, _rect, layout) => {
        const wide = layout === 'wide'
        const k = wide ? 1 : 1.5
        const control = (
          <div className="ws-key">
            <Text className="ws-key__label">Key</Text>
            <Button size="small" data-target="minus">{'−1'}</Button>
            <span className="ws-key__note">
              <Roll variant="fade">{keyName(s.key)}</Roll>
            </span>
            <Button size="small" data-target="plus">+1</Button>
          </div>
        )
        const sidebar = (
          <div className="ws-side">
            <div className="ws-mark">
              <Music size={14} strokeWidth={1.75} absoluteStrokeWidth />
              <Text>WorshipSync</Text>
            </div>
            <Text className="ws-side__label">Sunday set</Text>
            <div className="ws-songs">
              {[56, 70, 48, 62, 52].map((w, i) => (
                <Row key={i} selected={i === 1} pad={8} title={<Bar w={w} h={6} tone={i === 1 ? 4 : 3} />} />
              ))}
            </div>
          </div>
        )
        return (
          <>
            <Window
              {...(wide ? { sidebar, sidebarWidth: 140, toolbar: control } : { lead: control })}
              className="ws-window"
              body={{ className: 'ws-body' }}
            >
              <div className="ws-sheet">
                <Text className="ws-title">Lantern Hymn</Text>
                {SHEET.slice(0, wide ? 3 : 2).map((line, li) => (
                  <div key={li} className="ws-group">
                    <div className="ws-chords">
                      {line.map((c, ci) => (
                        <span key={ci} className="ws-chord" style={{ left: AT[li][ci] * k }}>
                          <Roll variant="fade" delay={ci * 70}>{transpose(c, s.key)}</Roll>
                        </span>
                      ))}
                    </div>
                    <div className="ws-lyric">
                      {LYRIC[li].slice(0, wide ? 2 : 1).map((w, i) => <Bar key={i} w={w * k} h={6} tone={2} />)}
                    </div>
                  </div>
                ))}
                {wide && <div className="ws-group ws-group--rest">
                  <div className="ws-lyric">
                    {[176, 132, 160, 110].map((w, i) => <Bar key={i} w={w} h={6} tone={2} />)}
                  </div>
                </div>}
              </div>
            </Window>

            <ThemedPhone width={wide ? 216 : 290} className="ws-phone">
              <div className="ws-app">
                <div className="ws-app__head">
                  <Text className="ws-app__title">Lantern Hymn</Text>
                  <span className="ws-app__key"><Roll variant="fade" delay={60}>{keyName(s.phone)}</Roll></span>
                </div>
                <div className="ws-live"><i className="ws-live__dot" /><Text>Live · synced</Text></div>
                {SHEET.map((line, li) => (
                  <div key={li} className="ws-app__group">
                    <div className="ws-app__chords">
                      {line.map((c, ci) => (
                        <span key={ci} className="ws-app__chord"><Roll variant="fade" delay={ci * 70}>{transpose(c, s.phone)}</Roll></span>
                      ))}
                    </div>
                    <Bar w={LYRIC[li][0] * 1.5} h={12} tone={2} />
                  </div>
                ))}
                <div className="ws-app__rest">
                  <Bar w={280} h={12} tone={2} />
                  <Bar w={210} h={12} tone={2} />
                </div>
              </div>
            </ThemedPhone>
          </>
        )
      }}
    </Stage>
  )
}

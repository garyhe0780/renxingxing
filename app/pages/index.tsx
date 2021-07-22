import { Suspense, useEffect, useRef } from "react"
import { Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import Typed from "typed.js"

const strings = [
  `大宝宝,
   <br/>
   <br/>
   <br/>
   转眼就是我们在一起第四个生日了。 前几次生日都发生了不愉快的事情, 这次尤甚, 还没到过生日那天就已经发生不愉快的事情了
   <br/>
   <br/>
   <br/>
   你一直希望我做一些不一样事情, 一些浪漫的, 深思熟虑的事情, 结果我还是什么都没有做。
   我除了写代码勉强也没有更多长才。 更甚的是 从加入XX, 到兼职XXX, 再到现在, 总是想做更好,
   更多的工作而忽视了生活, 忽视了你。这可能是我从小到大的一个问题, 总是在玩的时候
   担忧学习和作业, 又在学习和作业的时候想着玩, 无法平衡好学习和娱乐,
   近来我也逐渐意识到了这个问题, 在工作里面不再试图去控制自己无法 控制的部分,
   试着和不好的代码和解, 休息的时候不总是聊工作, 还算有一些效果。所以这次即是“道歉信”,
   也是一次自我剖析。
    <br/>
    <br/>
    <br/>
   虽然廉价的自我感动不值得提倡, 但我想如果写字不能首先感动自己, 估计也很难感动他人吧,
   如果没有真情的自然流露, 是不值得一写的, 尽管我写这些字时 我是感动的, 我还是怕感动不了你,
   让你失望。 除了感情的真挚，我也希望它更讲究，二者兼具需要更高的修为和境界，所以我虽然很多次提笔来写,
   但总是踌躇不前,
    <br/>
    <br/>
    <br/>
   关于此次事件, 我想我的情绪的起点来自于两个地方。 第一个是我和我爸通电话的时候,
   就不是特别开心, 因为一些观念上的差异, 甚至后来我和他说我有事先挂的时候, 还是被他拖了一会,
   让我有点着急 第二个是你说不去吃烤肉, 为了我改去吃转转寿司, 本来我对去哪里吃都无所谓,
   但是有了第一个的情绪的铺垫之后 其实我是有些不开心的, 因为当时我并不想吃转转寿司,
   然后说是因为我才吃的转转寿司, 让我不是很开心
    <br/>
    <br/>
    <br/>
   我知道这种情绪很微妙, 弄不好就会被当作“深井冰”, 或者已经被当作“深井冰”了,
   我并不喜欢这种情绪, 所以也是在极力的抵抗这种情绪, 终究还是失败了,
   虽然后来我成功的抵抗了这种情绪, 成功的夺回了情绪的 控制权, 但是我无法挽回造成的破坏。
    <br/>
    <br/>
    <br/>
   我很想以“这种另一个我在作怪而不是真的我”或者其实“我是一个情绪非常稳定的人,
   只有极少数情况才会这样“这样的借口来为自己开脱, 关于情绪的宣导, 我可能还有很多要学,
   这次事件的全部事实就是这样。
    <br/>
    <br/>
    <br/>
   接下来的几段是一些近来的思考或者说自我剖析
    <br/>
    <br/>

  关于工作, 我感觉我这一年来学到的很多, 可能是得益于DueDEX的工作经历,
          也有可能是工作积累到了一定的程度, 量变引起质变, 我相信有一些知识 是我能教你的,
          我们可以一起进步。 其实我没有勇气说未来一定是光明的, 尤其是过去一年是地球多灾多难的一年,
          新的一年也没有看到完全好转的迹象, 所幸的是我找到了一条也许光明的路,
          就是成为独立的软件服务承包商, 真正的实现我们的创业的理想。
          我相信未来程序员依然是一个光明的职业, 因为只有5%的程序员在思考, 所以即便是内卷和淘汰,
          淘汰的 也是那些不思考的程序员
    <br/>
    <br/>
    <br/>

  关于生活, 我承认我几乎是一个乏味的人, 我缺乏生活技能,
          对美食和户外活动没有自己的见地。当然也有可能是因为前面 说的没有做好平衡工作和生活的关系,
          在工作中投入了很多精力, 有些还是无效的精力, 需要更好的平衡工作和生活
    <br/>
    <br/>
    <br/>
        关于朋友, 我可能是真的没有朋友, 当然我并非生来冷漠或者不会交朋友,
          我只是有时候觉得他们无聊, 所以更多的还是环境的问题

    <br/>
    <br/>
    <br/>
    <br/>

    关于你, 我喜欢你的自信, 你的乐观, 你的干练,
          这些都是我匮乏的，这也要归功于你父母的培养。我对你的依赖越来越深， 我对你的表扬却越来越少,
          这是我要反省的

    <br/>
    <br/>
    <br/>
    <br/>
          关于我, 我不是一个自信的人, 我也不是一个直抒心意的人, 很多时候我的想法只有自己清楚。
          我也许有一些优点, 但是我了解一个人的优缺点相当于另外一个人来说不是静止不动的,
          是需要参照物的, 比如一个人喜欢 安静的话, 那么性格活泼就不是优点, 如果一个人性格严谨,
          那么性格大条就不是优点。 所以从这个角度来说的话, 我的优点未必是优点, 反而成了缺点,
          而我的缺点仍然是缺点。 如此下来, 我大体上也同意不是良配的说法

    <br/>
    <br/>
    <br/>

    爱情有时候也是条反骨。大宝宝，我以为我只写得出一行，结果写得有点长了，再写千言万语，有点过了。
          我当然也有去看《如果更好的沟通》, 也会反思如何避免类似的情况,
          但这些都不是我首要渴求的，我想要的是你的拥抱。`,
]

const Home: BlitzPage = () => {
  const el = useRef<HTMLDivElement>(null)
  const typed = useRef<any>(null)

  useEffect(() => {
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
    }

    if (el) {
      typed.current = new Typed(el.current!, options)
    }

    return () => {
      typed.current?.destroy()
    }
  }, [])

  return (
    <div className="poem">
      <header>
        <h1>任行行</h1>
        <ol>
          <li>首页</li>
          <li>音乐盒</li>
          <li>画廊</li>
        </ol>
      </header>
      <main>
        <div className="typing" ref={el}></div>
      </main>
      <footer>
        <p className="text">Build with Love By Gary & Iris</p>
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-family: "ZCOOL XiaoWei", serif;
          box-sizing: border-box;
        }
        .app {
          min-height: 100vh;
          width: 100vw;
        }
        main {
          max-width: 1200px;
          margin: 10em auto;
        }
        header {
          padding: 1em 2.5em;
          width: 100vw;
          height: 160px;
          background-color: #000;
        }
        header h1 {
          padding: 0.4em;
          color: white;
          border-bottom: 1px solid white;
        }
        header ol {
          padding-left: 0;
          display: flex;
          color: white;
          list-style: none;
        }
        header ol li {
          width: auto;
          margin-right: 1.4em;
          color: inherit;
          cursor: pointer;
        }
        .typing {
          width: auto;
          min-height: 600px;
          font-size: 1.4em;
          display: inline;
        }
        footer {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 160px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #000;
        }
        footer .text {
          color: white;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home

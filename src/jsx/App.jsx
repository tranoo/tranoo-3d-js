import { createLocalStore, getRandomColor } from 'krestianstvo-tranoo'
import { onMount, onCleanup, createResource, createEffect } from 'solid-js';
import { loadScene } from '../js/polygon'
import * as THREE from 'three'

const sceneAndPlayer = async () => await loadScene()

const Avatar = (props) => {

  const [local, setLocal] = createLocalStore(
    {
      data: {
        nodeID: props.nodeID,
        type: 'Node',
        properties: {
          color: props.color ? props.color : "green",
          position: props.position ? props.position : { x: 0, y: 1, z: 0 },
          ticking: false,
          initialize: false,          
        },
      },
    },
    props
  )

  



  const createAvatar = () => {
    if(local.data.properties.color == 'green'){
      console.log('greeeeeeeeeeen')
      setLocal("data", "properties", "color", getRandomColor(props.selo));
      console.log(local.data.properties.color)
      setLocal("data", "properties", "position", { x: props.selo.random() * 10, y: 1, z: props.selo.random() * 10 })
    }
    const color = new THREE.Color( local.data.properties.color )
    const geo = props.sa.scene.createNode('geo')
    const avatar = geo.createNode('avatar')
    let str_node = geo._name+ '/' + avatar._name
        
    props.sa.scene.node(str_node).p.color.set([color.r, color.g, color.b])
    const node = props.sa.scene.node(str_node)

    node.compute().then((cont)=>{
      let player = props.sa.scene.threejsScene().getObjectByName(local.data.nodeID)
      player = cont.coreContent().threejsObjects()[0]
      player.name = local.data.nodeID
      player.position.x = local.data.properties.position.x + 1
      player.position.y = 1
      player.position.z = local.data.properties.position.z
      })
  }


  createEffect(() => {

    let player = props.sa.scene.threejsScene().getObjectByName(props.nodeID)

    let px = local.data.properties.position.x
    let py = local.data.properties.position.y
    let pz = local.data.properties.position.z

    if (player) {

      player.matrixAutoUpdate=true      

      player.position.x = px
      player.position.y = py
      player.position.z = pz

      player.updateMatrix()
      player.matrixAutoUpdate=false
  
    }

  })

  let moveby = 1

  const moveBallByKeys = (data) => {
    let player = props.sa.scene.threejsScene().getObjectByName(local.data.nodeID)

    switch (data[1]) {
      case 'KeyW':
        setLocal("data", "properties", "position", "z", (c) => c + moveby)
        break
      case 'KeyS':
        setLocal("data", "properties", "position", "z", (c) => c - moveby)
        break
      case 'KeyA':
        setLocal("data", "properties", "position", "x", (c) => c + moveby)
        break
      case 'KeyD':
        setLocal("data", "properties", "position", "x", (c) => c - moveby)
        break
      case 'KeyQ':
        setLocal("data", "properties", "position", "y", (c) => c + moveby)
        break;
      case 'KeyE':
        setLocal("data", "properties", "position", "y", (c) => c - moveby)
        break
    }
  }

  props.selo.createAction(props.nodeID, 'moveBallByKeys', moveBallByKeys)


  onCleanup(() => {
    let player = props.sa.scene.threejsScene().getObjectByName(local.data.nodeID)
    console.log("Remove: ", player)
    player.removeFromParent()
  })


  onMount(() => {
    console.log("onMount ", local.data.nodeID)

    createAvatar()


    if (props.nodeID == props.selo.storeVT.moniker_)
      document.onkeydown = function (e) {
        props.selo.sendExtMsg({
          id: props.nodeID,
          params: [props.nodeID, e.code],
          msg: "moveBallByKeys"
        })
      }
  })

  return (
    <></>
  )
}

export default function App(props) {

  const [sa] = createResource(sceneAndPlayer);

  const [local, setLocal] = createLocalStore(
    {
      data: {
        type: 'Node',
        nodeID: props.nodeID,
        properties: {
          name: props.name ? props.name : props.nodeID,
          dynamic: props.dynamic ? props.dynamic : false,
          parentID: props.parentID ? props.parentID : null,
          ticking: false,
          initialize:false
        },
        dynamic: [
        ]
      }
    },
    props
  )


  createEffect(() => {
    console.log("Scene: ", sa())
  })

  createEffect(() => {
    console.log("Clients: ", props.selo.storeNode.clients)
  })

  return (
    <>
      <div>{sa.loading && "Loading scene..."}</div>
      <Show when={sa()}>
        <For each={props.selo.storeNode.clients}
          fallback={<div>Loading...</div>}>
          {(item) =>
            <Avatar
              nodeID={item}
              selo={props.selo}
              sa={sa()}
            />
          }
        </For>
      </Show>
    </>
  )
}